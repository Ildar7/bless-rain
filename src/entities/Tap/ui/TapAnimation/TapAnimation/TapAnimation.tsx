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
    toadAnimPosition: string;
}

// const parseTgInfo = (url: string) => {
//     const decodedUrl = decodeURIComponent(decodeURIComponent(url.split('#tgWebAppData=')[1])).split('&');
//     const tgInfo: any = {};
//
//     for (let i = 0; i < decodedUrl.length; i++) {
//         const elemName = decodedUrl[i].split('=')[0];
//         const elemInfo = decodedUrl[i].split('=')[1];
//
//         if (elemInfo[0] !== '{') {
//             tgInfo[elemName] = elemInfo;
//         } else {
//             tgInfo[elemName] = JSON.parse(elemInfo);
//         }
//     }
//
//     return tgInfo;
// };

export const TapAnimation = memo((props: TapAnimationProps) => {
    const {
        className,
        toadAnimPosition,
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
                    toadAnimPosition={toadAnimPosition}
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
