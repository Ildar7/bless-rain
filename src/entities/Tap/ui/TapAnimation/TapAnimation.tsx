import React, { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SpinePlayer } from '@esotericsoftware/spine-player';
import cls from './TapAnimation.module.scss';

interface TapAnimationProps {
    className?: string;
}

export const TapAnimation = memo((props: TapAnimationProps) => {
    const { className } = props;

    useEffect(() => {
        new SpinePlayer('toad-tap', {
            jsonUrl: 'animations/tap/Toad.json',
            atlasUrl: 'animations/tap/Toad.atlas',
            animation: 'grass',
            backgroundColor: '#00000000',
            showControls: false,
            preserveDrawingBuffer: true,
            showLoading: false,
            alpha: true,
            viewport: {
                x: -2088.49,
                y: -1265.39,
                width: 4032.28,
                height: 5486.7,
            },
        });
    }, []);

    return (
        <div
            className={classNames(cls.TapAnimation, {}, [className])}
            id="toad-tap"
        />
    );
});
