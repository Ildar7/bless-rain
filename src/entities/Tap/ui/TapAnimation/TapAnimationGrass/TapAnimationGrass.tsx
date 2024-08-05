import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TapAnimationGrass.module.scss';

interface TapAnimationGrassProps {
    className?: string;
}

export const TapAnimationGrass = memo((props: TapAnimationGrassProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.TapAnimationGrass, {}, [className])}>
            <img src="assets/anims/grass.gif" alt="grass" />
        </div>
    );
});
