import React, {
    memo, useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { TapBoosts } from 'entities/Tap/ui/TapBoosts/TapBoosts';
import cls from './Tap.module.scss';
import { TapMain } from '../TapMain/TapMain';

interface TapProps {
    className?: string;
}

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
        </div>
    );
});
