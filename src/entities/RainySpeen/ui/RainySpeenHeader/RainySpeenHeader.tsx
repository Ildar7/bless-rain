import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import InfoIcon from 'shared/assets/icons/png/info.png';
import CloseIcon from 'shared/assets/icons/png/close.png';
import { useNavigate } from 'react-router-dom';
import { getRouteGames } from 'shared/const/router';
import { useSelector } from 'react-redux';
import { AnimatedCounter } from 'shared/ui/AnimatedCounter/AnimatedCounter';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { rainySpeenActions } from 'entities/RainySpeen/model/slice/rainySpeenSlice';
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

    const closeGame = useCallback(() => {
        navigate(getRouteGames());
    }, [navigate]);

    return (
        <div className={classNames(cls.RainySpeenHeader, { }, [className])}>
            <button
                type="button"
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
    );
});
