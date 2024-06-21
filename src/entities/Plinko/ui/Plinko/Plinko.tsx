import React, {
    memo, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import Matter from 'matter-js';
import DropIcon from 'shared/assets/icons/png/drop-plinko.png';
import BinIcon10x from 'shared/assets/icons/png/bin-10x.png';
import BinIcon3Dot3x from 'shared/assets/icons/png/bin-3.3x.png';
import BinIcon1Dot1x from 'shared/assets/icons/png/bin-1.1x.png';
import BinIcon0Dot8x from 'shared/assets/icons/png/bin-0.8x.png';
import BinIcon0Dot5x from 'shared/assets/icons/png/bin-0.5x.png';
import PegIconNormal from 'shared/assets/icons/png/peg.png';
import PegIconHit from 'shared/assets/icons/png/peg-hit.png';
import PlayText from 'shared/assets/icons/png/plinko-play-text.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { getUserBalance, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useMobile } from 'shared/lib/hooks/useMobile/useMobile';
import { PlinkoHeader } from '../PlinkoHeader/PlinkoHeader';
import cls from './Plinko.module.scss';
import { plinkoActions } from '../../model/slice/plinkoSlice';
import {
    getPlinkoGameFinished,
    getPlinkoGameStarted,
    getPlinkoNewGameInited,
} from '../../model/selectors/getPlinko/getPlinko';
import { PlinkoWinModal } from '../PlinkoWinModal/PlinkoWinModal';

interface PlinkoProps {
    className?: string;
}

export const Plinko = memo((props: PlinkoProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const balance = useSelector(getUserBalance);
    const gameStarted = useSelector(getPlinkoGameStarted);
    const gameFinished = useSelector(getPlinkoGameFinished);
    const newGameInited = useSelector(getPlinkoNewGameInited);
    const scene = useRef<HTMLDivElement>(null);
    const engine = useRef<Matter.Engine | null>(null);
    const yPositionsRef = useRef<number[]>([]);
    const [visibleWinModal, setVisibleWinModal] = useState(false);
    const { isMobile, width } = useMobile();

    const binImages = useMemo(() => [
        BinIcon10x,
        BinIcon3Dot3x,
        BinIcon1Dot1x,
        BinIcon0Dot8x,
        BinIcon0Dot5x,
        BinIcon0Dot8x,
        BinIcon1Dot1x,
        BinIcon3Dot3x,
        BinIcon10x,
    ], []);

    const onCloseWinModal = useCallback(() => {
        setVisibleWinModal(false);
    }, []);

    useEffect(() => {
        const {
            Engine, Render, Runner, Bodies, World, Events, Mouse, MouseConstraint,
        } = Matter;

        engine.current = Engine.create();
        const { world } = engine.current;

        const render = Render.create({
            element: scene.current!,
            engine: engine.current,
            options: {
                width: 280,
                height: 243,
                wireframes: false,
                background: 'transparent',
            },
        });

        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine.current);

        // Штифты
        const widthTop = 35;
        const widthBottom = 190;
        const height = 228;
        const pegRows = 8;
        const pegs = [];
        const pegSpacingY = height / (pegRows + 1);
        const yPositions = [];

        let pegSpacingX = 0;

        for (let row = 0; row < pegRows; row++) {
            const currentRowCount = 3 + row;
            const currentRowWidth = widthTop + ((widthBottom - widthTop) / (pegRows - 1)) * row;
            const startX = 140 - currentRowWidth / 2;
            pegSpacingX = currentRowWidth / (currentRowCount - 1);

            for (let i = 0; i < currentRowCount; i++) {
                const x = startX + pegSpacingX * i;
                const y = pegSpacingY * (row + 1);
                const peg = Bodies.circle(x, y, 2.5, {
                    isStatic: true,
                    render: {
                        sprite: {
                            texture: PegIconNormal,
                            xScale: 1,
                            yScale: 1,
                        },
                    },
                    label: 'peg',
                });
                pegs.push(peg);
                if (i === 0) {
                    yPositions.push(y);
                }
            }
        }

        yPositionsRef.current = yPositions;
        World.add(world, pegs);

        // Добавление невидимых границ для ведер
        const binWidth = 26;
        const binCount = binImages.length;
        const binSpacing = (280 - binWidth * binCount) / (binCount + 1) - 2.3;

        const binBorders = [];

        for (let i = 0; i < binCount; i++) {
            const leftX = binSpacing + i * (binWidth + binSpacing);
            const rightX = leftX + binWidth;

            const leftBorder = Bodies.rectangle(leftX + 11, height + 15, 2, 40, {
                isStatic: true,
                render: { visible: false },
                label: 'border',
            });

            const rightBorder = Bodies.rectangle(rightX + 12, height + 15, 2, 40, {
                isStatic: true,
                render: { visible: false },
                label: 'border',
            });

            binBorders.push(leftBorder, rightBorder);
        }

        World.add(world, binBorders);

        const handlePegCollision = (peg: any) => {
            const originalTexture = peg.render.sprite.texture;

            peg.render.sprite.texture = PegIconHit;

            setTimeout(() => {
                if (peg.render.sprite.texture === PegIconHit) {
                    peg.render.sprite.texture = originalTexture;
                }
            }, 1000);
        };

        const isLastPegRow = (pegY: number) => {
            const lastRowY = yPositionsRef.current[pegRows - 1];
            return Math.abs(pegY - lastRowY) < 5;
        };

        Events.on(engine.current, 'collisionStart', (event) => {
            event.pairs.forEach((pair) => {
                const { bodyA, bodyB } = pair;
                console.log('Collision between:', bodyA.label, 'and', bodyB.label);
                if (bodyB.label === 'ball' && bodyA.label === 'border') {
                    setTimeout(() => {
                        dispatch(plinkoActions.changeGameFinished(true));
                        dispatch(plinkoActions.changeNewGameInited(false));
                        dispatch(plinkoActions.changeGameStarted(false));
                        dispatch(plinkoActions.changeCanUpdateBalance(true));
                        setVisibleWinModal(true);
                    }, 1250);
                } else if (bodyB.label === 'peg' && bodyA.label === 'ball') {
                    handlePegCollision(bodyB);
                    if (isLastPegRow(bodyB.position.y)) {
                        setTimeout(() => {
                            dispatch(plinkoActions.changeGameFinished(true));
                            dispatch(plinkoActions.changeNewGameInited(false));
                            dispatch(plinkoActions.changeGameStarted(false));
                            dispatch(plinkoActions.changeCanUpdateBalance(true));
                            setVisibleWinModal(true);
                        }, 1250);
                    }
                } else if (bodyA.label === 'peg' && bodyB.label === 'ball') {
                    handlePegCollision(bodyA);
                    if (isLastPegRow(bodyA.position.y)) {
                        setTimeout(() => {
                            dispatch(plinkoActions.changeGameFinished(true));
                            dispatch(plinkoActions.changeNewGameInited(false));
                            dispatch(plinkoActions.changeGameStarted(false));
                            dispatch(plinkoActions.changeCanUpdateBalance(true));
                            setVisibleWinModal(true);
                        }, 1250);
                    }
                }
            });
        });

        return () => {
            Render.stop(render);
            World.clear(world, false);
            Engine.clear(engine.current!);
            render.canvas.remove();
            render.textures = {};
        };
    }, [dispatch]);

    const addBall = (targetBucket: number) => {
        const newBalance = (balance || 0) - 500;

        dispatch(plinkoActions.changeNewGameInited(true));
        dispatch(plinkoActions.changeGameStarted(true));
        dispatch(plinkoActions.changeGameFinished(false));
        dispatch(plinkoActions.changeCanUpdateBalance(false));
        dispatch(userActions.changeBalance(newBalance));

        const { Bodies, World } = Matter;
        const ballRadius = 7;
        const yPositions = yPositionsRef.current;

        const ball = Bodies.circle(140, yPositions[0] - 10, ballRadius, {
            restitution: 0.5,
            frictionAir: 0.02,
            render: {
                sprite: {
                    texture: DropIcon,
                    xScale: 1,
                    yScale: 1,
                },
            },
            label: 'ball',
        });

        World.add(engine.current!.world, ball);

        const moveBall = (step: number) => {
            if (step < yPositions.length) {
                const currentX = ball.position.x;
                const targetX = 140
                    + ((targetBucket - (yPositions.length / 2)) * (280 / yPositions.length)) * (step / yPositions.length);

                const dx = (targetX - currentX) / 30;
                const dy = (yPositions[step] - ball.position.y) / 30;

                const interval = setInterval(() => {
                    Matter.Body.setPosition(ball, {
                        x: ball.position.x + dx,
                        y: ball.position.y + dy,
                    });

                    if (Math.abs(ball.position.x - targetX) < Math.abs(dx)
                        && Math.abs(ball.position.y - yPositions[step]) < Math.abs(dy)) {
                        clearInterval(interval);
                        moveBall(step + 1);
                    }
                }, 10);
            }
        };

        moveBall(0);
    };

    return (
        <div className={classNames(cls.Plinko, {}, [className])}>
            {isMobile && <PlinkoHeader />}

            <div
                className={cls.content}
                style={{ transform: `scale(${width * (width > 768 ? width >= 1024 ? 0.001 : 0.002 : 0.003125)})` }}
            >
                <div className={cls.scene} ref={scene} />
                <div className={cls.btns}>
                    {binImages.map((image, idx) => (
                        <div
                            className={cls.bucketBtn}
                            key={idx}
                        >
                            <img
                                src={image}
                                alt="bucket-img"
                            />
                        </div>
                    ))}
                </div>

                <Button
                    theme="none"
                    className={cls.playBtn}
                    onClick={() => addBall(1)}
                    disabled={gameStarted && !gameFinished}
                >
                    <PlayText />
                </Button>
            </div>

            {gameFinished && !newGameInited && (
                <PlinkoWinModal
                    visible={visibleWinModal}
                    onClose={onCloseWinModal}
                />
            )}
        </div>
    );
});
