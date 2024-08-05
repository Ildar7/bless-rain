import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TapAnimationToad.module.scss';

interface TapAnimationToadProps {
    className?: string;
    animSrc: string;
}

export const TapAnimationToad = memo((props: TapAnimationToadProps) => {
    const {
        className,
        animSrc,
    } = props;

    return (
        <div className={classNames(cls.TapAnimationToad, {}, [className])}>
            <img
                src={animSrc}
                alt="toad-animation"
                className={classNames(
                    cls.toad,
                    {
                        [cls.toadRightBottom]: animSrc === 'assets/anims/toad_anim_right_bottom.gif',
                        [cls.toadRightTop]: animSrc === 'assets/anims/toad_anim_right_top.gif',
                        [cls.toadLeftBottom]: animSrc === 'assets/anims/toad_anim_left_bottom.gif',
                        [cls.toadLeftTop]: animSrc === 'assets/anims/toad_anim_left_top.gif',
                        [cls.toadCenter]: animSrc === 'assets/anims/toad_anim_center.gif',
                    },
                    [],
                )}
            />
        </div>
    );
});
