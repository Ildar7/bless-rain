import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TapAnimationRain.module.scss';

interface TapAnimationRainProps {
    className?: string;
}

export const TapAnimationRain = memo((props: TapAnimationRainProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.TapAnimationRain, {}, [className])}>
            <img src="assets/anims/rain.gif" alt="rain" />
        </div>
    );
});
