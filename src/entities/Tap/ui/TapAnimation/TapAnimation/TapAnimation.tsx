import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getAppIsLoadingTapGifs } from 'entities/App';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './TapAnimation.module.scss';
import { TapAnimationGrass } from '../TapAnimationGrass/TapAnimationGrass';
import { TapAnimationRain } from '../TapAnimationRain/TapAnimationRain';
import { TapAnimationToad } from '../TapAnimationToad/TapAnimationToad';

interface TapAnimationProps {
    className?: string;
    toadAnimSrc: string;
}

export const TapAnimation = memo((props: TapAnimationProps) => {
    const {
        className,
        toadAnimSrc,
    } = props;
    const isLoadingAnims = useSelector(getAppIsLoadingTapGifs);

    let anims;

    if (isLoadingAnims) {
        anims = (
            <Loader />
        );
    } else {
        anims = (
            <>
                <TapAnimationRain />
                <TapAnimationToad
                    animSrc={toadAnimSrc}
                />
                <TapAnimationGrass />
            </>
        );
    }

    return (
        <div
            className={classNames(cls.TapAnimation, {}, [className])}
        >
            {anims}
        </div>
    );
});
