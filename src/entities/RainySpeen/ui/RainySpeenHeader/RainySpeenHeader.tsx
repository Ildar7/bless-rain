import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import InfoIcon from 'shared/assets/icons/png/info.png';
import CloseIcon from 'shared/assets/icons/png/close.png';
import { useNavigate } from 'react-router-dom';
import { getRouteGames } from 'shared/const/router';
import cls from './RainySpeenHeader.module.scss';

interface RainySpeenHeaderProps {
    className?: string;
}

export const RainySpeenHeader = memo((props: RainySpeenHeaderProps) => {
    const {
        className,
    } = props;
    const navigate = useNavigate();

    const closeGame = useCallback(() => {
        navigate(getRouteGames());
    }, [navigate]);

    return (
        <div className={classNames(cls.RainySpeenHeader, {}, [className])}>
            <button
                type="button"
            >
                <img src={InfoIcon} alt="info" />
            </button>
            <div className={classNames(cls.balance, {}, ['title-sm'])}>
                5000
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
