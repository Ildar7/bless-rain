import React, {
    memo, useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { TapBoosts } from 'entities/Tap/ui/TapBoosts/TapBoosts';
import { GifLoader } from 'shared/lib/components/GifLoader/GifLoader';
import cls from './Tap.module.scss';
import { TapMain } from '../TapMain/TapMain';

interface TapProps {
    className?: string;
}

const tapAnimGifsUrls = [
    'assets/anims/grass.gif',
    'assets/anims/rain.gif',
    'assets/anims/idle.gif',
    'assets/anims/toad_anim_right_bottom.gif',
    'assets/anims/toad_anim_right_top.gif',
    'assets/anims/toad_anim_left_bottom.gif',
    'assets/anims/toad_anim_left_top.gif',
    'assets/anims/toad_anim_center.gif',
];

export const Tap = memo((props: TapProps) => {
    const {
        className,
    } = props;
    const [boostsVisible, setBoostsVisible] = useState(false);

    const showBoosts = useCallback(() => {
        setBoostsVisible(true);
    }, []);

    const hideBoosts = useCallback(() => {
        setBoostsVisible(false);
    }, []);

    useEffect(() => {
        setBoostsVisible(false);
    }, []);

    return (
        <div className={classNames(cls.Tap, {}, [className])}>
            {!boostsVisible && (
                <TapMain
                    showBoosts={showBoosts}
                />
            )}
            {boostsVisible && (
                <TapBoosts
                    hideBoosts={hideBoosts}
                />
            )}
            <GifLoader gifUrls={tapAnimGifsUrls} />
        </div>
    );
});
