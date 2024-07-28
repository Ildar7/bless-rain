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
            animation: 'rain',
            backgroundColor: '#000717',
            showControls: false,
            preserveDrawingBuffer: true,
            showLoading: false,
            alpha: true,
        });
    }, []);

    return (
        <div
            className={classNames(cls.TapAnimation, {}, [className])}
            id="toad-tap"
        />
    );
});
