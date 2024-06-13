import React, { memo, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Matter from 'matter-js';
import DropIcon from 'shared/assets/icons/png/drop-plinko.png';
import BinIcon10x from 'shared/assets/icons/png/bin-10x.png';
import BinIcon3Dot3x from 'shared/assets/icons/png/bin-3.3x.png';
import BinIcon1Dot1x from 'shared/assets/icons/png/bin-1.1x.png';
import BinIcon0Dot8x from 'shared/assets/icons/png/bin-0.8x.png';
import BinIcon0Dot5x from 'shared/assets/icons/png/bin-0.5x.png';
import cls from './Plinko.module.scss';

interface PlinkoProps {
    className?: string;
}

export const Plinko = memo((props: PlinkoProps) => {
    const { className } = props;
    const scene = useRef<HTMLDivElement>(null);
    const engine = useRef<Matter.Engine | null>(null);

    useEffect(() => {
        const {
            Engine, Render, Runner, Bodies, MouseConstraint, Mouse, World, Events,
        } = Matter;

        engine.current = Engine.create();
        const { world } = engine.current;

        const render = Render.create({
            element: scene.current!,
            engine: engine.current,
            options: {
                width: 280,
                height: 265,
                wireframes: false,
                background: 'transparent',
            },
        });

        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine.current);

        // Штифты
        const widthTop = 35;
        const widthBottom = 195;
        const height = 228;
        const pegRows = 8;
        const pegs = [];
        const pegSpacingY = height / (pegRows + 1);

        for (let row = 0; row < pegRows; row++) {
            const currentRowCount = 3 + row;
            const currentRowWidth = widthTop + ((widthBottom - widthTop) / (pegRows - 1)) * row;
            const startX = 140 - currentRowWidth / 2;
            const spacingX = currentRowWidth / (currentRowCount - 1);

            for (let i = 0; i < currentRowCount; i++) {
                const x = startX + spacingX * i;
                const y = pegSpacingY * (row + 1);
                const peg = Bodies.circle(x, y, 2.5, {
                    isStatic: true,
                    render: { fillStyle: '#AA4B23' },
                    label: 'peg',
                });
                pegs.push(peg);
            }
        }

        World.add(world, pegs);

        // Корзины
        const binImages = [
            BinIcon10x,
            BinIcon3Dot3x,
            BinIcon1Dot1x,
            BinIcon0Dot8x,
            BinIcon0Dot5x,
            BinIcon0Dot8x,
            BinIcon1Dot1x,
            BinIcon3Dot3x,
            BinIcon10x,
        ];
        const bins = []; // Initialize the bins array
        const binCount = binImages.length;
        const binSpacing = 2; // 2px gap between bins
        const binWidth = (widthBottom - binSpacing * (binCount - 1)) / binCount + 5;
        const binHeight = 38.8;

        for (let i = 0; i < binCount; i++) {
            const x = 20 + (binWidth + binSpacing) * i;
            bins.push(Bodies.rectangle(x + binWidth / 2, 220 + binHeight / 2, binWidth, binHeight, {
                isStatic: true,
                render: {
                    sprite: {
                        texture: binImages[i],
                        xScale: binWidth / 26,
                        yScale: binHeight / 36,
                    },
                },
                label: 'bin',
            }));
        }

        World.add(world, bins);

        const handlePegCollision = (peg: any) => {
            const originalFillStyle = peg.render.fillStyle;
            const originalStrokeStyle = peg.render.strokeStyle;
            const originalLineWidth = peg.render.lineWidth;

            peg.render.fillStyle = '#FFB042';
            peg.render.strokeStyle = '#FF9400';
            peg.render.lineWidth = 3;

            setTimeout(() => {
                // Проверяем, не был ли снова изменен цвет штифта
                if (peg.render.fillStyle === '#FFB042') {
                    peg.render.fillStyle = originalFillStyle;
                    peg.render.strokeStyle = originalStrokeStyle;
                    peg.render.lineWidth = originalLineWidth;
                }
            }, 1000);
        };

        // Удаление шариков при попадании в корзину
        Events.on(engine.current, 'collisionStart', (event) => {
            event.pairs.forEach((pair) => {
                const { bodyA, bodyB } = pair;
                if (bodyB.label === 'bin' && bodyA.label === 'ball') {
                    const binBounds = bodyB.bounds;
                    const ballBounds = bodyA.bounds;
                    if (
                        ballBounds.min.x >= binBounds.min.x
                        && ballBounds.max.x <= binBounds.max.x
                        && ballBounds.min.y >= binBounds.min.y
                        && ballBounds.max.y <= binBounds.max.y
                    ) {
                        setTimeout(() => {
                            World.remove(world, bodyA);
                        }, 100);
                    }
                } else if (bodyB.label === 'peg' && bodyA.label === 'ball') {
                    handlePegCollision(bodyB);
                } else if (bodyA.label === 'peg' && bodyB.label === 'ball') {
                    handlePegCollision(bodyA);
                }
            });
        });

        // Мышь
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine.current, {
            mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false },
            },
        });

        World.add(world, mouseConstraint);
        render.mouse = mouse;

        return () => {
            Render.stop(render);
            World.clear(world, false);
            Engine.clear(engine.current!);
            render.canvas.remove();
            render.textures = {};
        };
    }, []);

    const addBall = (path: number[][]) => {
        const { Bodies, World } = Matter;
        const ball = Bodies.circle(path[0][0], path[0][1], 5, {
            restitution: 0.5,
            render: {
                sprite: {
                    texture: DropIcon,
                    xScale: 1,
                    yScale: 1,
                },
            },
            label: 'ball',
        });

        let step = 1;

        const applyNextVelocity = () => {
            if (step < path.length) {
                const [nextX, nextY] = path[step];
                const [currentX, currentY] = [ball.position.x, ball.position.y];
                const velocityX = (nextX - currentX) / 10;
                const velocityY = (nextY - currentY) / 10;
                Matter.Body.setVelocity(ball, { x: velocityX, y: velocityY });
                step++;
                setTimeout(applyNextVelocity, 100);
            }
        };

        applyNextVelocity();
        World.add(engine.current!.world, ball);
    };

    const dropBallInBin = (targetBinIndex: number) => {
        // Пример траектории для каждого из индексов корзин
        const paths = {
            0: [[140, 10], [135, 40], [140, 70], [130, 100], [140, 130], [135, 160], [140, 190], [135, 220]],
            1: [[140, 10], [145, 40], [150, 70], [160, 100], [150, 130], [160, 160], [150, 190], [160, 220]],
            // Добавьте другие траектории по аналогии
        };
        // @ts-ignore
        const path = paths[targetBinIndex];
        addBall(path);
    };

    return (
        <div className={classNames(cls.Plinko, {}, [className])}>
            <div className={cls.scene} ref={scene} />
            <button onClick={() => addBall([[140, 10], [130, 40], [150, 70], [140, 100]])}>Play</button>
            <button onClick={() => dropBallInBin(0)}>Drop in Bin 1</button>
            <button onClick={() => dropBallInBin(1)}>Drop in Bin 2</button>
        </div>
    );
});
