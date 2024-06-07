import React, {
    memo, useCallback, useEffect, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import InfoIcon from 'shared/assets/icons/png/info.png';
import CloseIcon from 'shared/assets/icons/png/close.png';
import { useNavigate } from 'react-router-dom';
import { getRouteGames } from 'shared/const/router';
import { useSelector } from 'react-redux';
import { AnimatedCounter } from 'shared/ui/AnimatedCounter/AnimatedCounter';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { rainySpeenActions } from 'entities/RainySpeen/model/slice/rainySpeenSlice';
import { SidebarMob, SidebarMobItem } from 'widgets/SidebarMob';
import cls from './RainySpeenHeader.module.scss';
import {
    getRainySpeenBalance,
    getRainySpeenCanUpdateBalance,
    getRainySpeenNewGameInited,
} from '../../model/selectors/getRainySpeen/getRainySpeen';

interface RainySpeenHeaderProps {
    className?: string;
}

export const RainySpeenHeader = memo((props: RainySpeenHeaderProps) => {
    const {
        className,
    } = props;
    const navigate = useNavigate();
    const balance = useSelector(getRainySpeenBalance);
    const newGameInited = useSelector(getRainySpeenNewGameInited);
    const canUpdateBalance = useSelector(getRainySpeenCanUpdateBalance);
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const closeGame = useCallback(() => {
        navigate(getRouteGames());
    }, [navigate]);

    const sidebarItems: SidebarMobItem[] = useMemo(() => [
        {
            id: 1,
            title: 'RULES',
            glow: 'pink',
            onClick: () => { setSidebarVisible(false); },
            icon: 'gamepad',
            active: false,
        },
        {
            id: 2,
            title: 'WIN TABLE',
            glow: 'blue',
            onClick: () => { setSidebarVisible(false); },
            icon: 'table',
            active: false,
        },
    ], []);

    const onToggleSidebar = useCallback(() => {
        setSidebarVisible((prevState) => !prevState);
    }, []);

    return (
        <>
            <div className={classNames(cls.RainySpeenHeader, { }, [className])}>
                <button
                    type="button"
                    onClick={onToggleSidebar}
                >
                    <img src={InfoIcon} alt="info" />
                </button>
                <div className={classNames(cls.balance, { }, ['title-sm'])}>
                    {(newGameInited || canUpdateBalance) && (
                        <AnimatedCounter
                            from={balance!}
                            to={balance!}
                            duration={1000}
                        />
                    )}
                    {!(newGameInited || canUpdateBalance) && (
                        balance
                    )}
                </div>
                <button
                    type="button"
                    onClick={closeGame}
                >
                    <img src={CloseIcon} alt="close" />
                </button>
            </div>
            {sidebarVisible && (
                <SidebarMob items={sidebarItems} />
            )}
        </>
    );
});
