import React, {
    memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import RainySpeenGame from 'shared/assets/icons/png/speen-bg.png';
import PlayBtnImg from 'shared/assets/icons/png/play-btn.png';
import PlayBtnPressedImg from 'shared/assets/icons/png/play-btn-pressed.png';
import RainbowImg from 'shared/assets/icons/png/rainbow.png';
import autoAnimate from '@formkit/auto-animate';
import cls from './RainySpeen.module.scss';
import { RainySpeenHeader } from '../RainySpeenHeader/RainySpeenHeader';

interface RainySpeenProps {
    className?: string;
}

export const RainySpeen = memo((props: RainySpeenProps) => {
    const {
        className,
    } = props;
    const [startPressAnim, setStartPressAnim] = useState(false);
    const gameBlockRef = useRef<HTMLDivElement | null>(null);
    const gameScreenRef = useRef<HTMLImageElement | null>(null);
    const [gameScreenWidth, setGameScreenWidth] = useState(0);

    const onStartHandler = useCallback(() => {
        setStartPressAnim(true);

        setTimeout(() => {
            setStartPressAnim(false);
        }, 600);
    }, []);

    useEffect(() => {
        gameBlockRef.current && autoAnimate(gameBlockRef.current, { duration: 600 });
    }, [gameBlockRef]);

    useEffect(() => {
        if (gameScreenRef.current) {
            setGameScreenWidth(gameScreenRef.current?.offsetWidth);
        }
    }, [gameScreenRef]);

    return (
        <div
            className={classNames(cls.RainySpeen, {}, [className])}
        >
            <RainySpeenHeader />
            <div className={cls.game} ref={gameBlockRef}>
                <img
                    ref={gameScreenRef}
                    src={RainySpeenGame}
                    alt="game-screen"
                />
                <button
                    type="button"
                    className={cls.startBtn}
                    onClick={onStartHandler}
                    style={{ width: `${gameScreenWidth / 2}px` }}
                >
                    {startPressAnim && (
                        <img src={PlayBtnPressedImg} alt="play-btn-pressed" />
                    )}
                    {!startPressAnim && (
                        <img src={PlayBtnImg} alt="play-btn" />
                    )}
                </button>
            </div>
            <div className={cls.screen}>
                <div className={cls.images}>
                    <img src={RainbowImg} alt="rainbow" />
                    <img src={RainbowImg} alt="rainbow" />
                    <img src={RainbowImg} alt="rainbow" />
                </div>
            </div>
        </div>
    );
});
