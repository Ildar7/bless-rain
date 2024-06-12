import React, {
    memo, useCallback, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import InfoIcon from 'shared/assets/icons/png/info.png';
import CloseIcon from 'shared/assets/icons/png/close.png';
import { useNavigate } from 'react-router-dom';
import { getRouteGames } from 'shared/const/router';
import { useSelector } from 'react-redux';
import { AnimatedCounter } from 'shared/ui/AnimatedCounter/AnimatedCounter';
import { ApplicationModal, ApplicationModalButtons } from 'widgets/ApplicationModal';
import { RainySpeenRules, RainySpeenWinTable } from 'entities/RainySpeen';
import { getUserBalance } from 'entities/User';
import cls from './RainySpeenHeader.module.scss';
import {
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
    const balance = useSelector(getUserBalance);
    const newGameInited = useSelector(getRainySpeenNewGameInited);
    const canUpdateBalance = useSelector(getRainySpeenCanUpdateBalance);
    const [applicationModalOpened, setApplicationModalOpened] = useState(false);

    const buttons: ApplicationModalButtons[] = useMemo(() => [
        {
            id: 1,
            name: 'Rules',
            icon: 'gamepad',
            active: true,
            component: <RainySpeenRules />,
        },
        {
            id: 2,
            name: 'Win table',
            icon: 'table',
            active: false,
            component: <RainySpeenWinTable />,
        },
    ], []);

    const closeGame = useCallback(() => {
        navigate(getRouteGames());
    }, [navigate]);

    const onOpenApplicationModal = useCallback(() => {
        setApplicationModalOpened(true);
    }, []);

    const onCloseApplicationModal = useCallback(() => {
        setApplicationModalOpened(false);
    }, []);

    return (
        <>
            <div className={classNames(cls.RainySpeenHeader, {}, [className])}>
                <button
                    type="button"
                    onClick={onOpenApplicationModal}
                >
                    <img src={InfoIcon} alt="info" />
                </button>
                <div className={classNames(cls.balance, {}, ['title-sm'])}>
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

            <ApplicationModal
                isOpen={applicationModalOpened}
                onCloseModal={onCloseApplicationModal}
                buttons={buttons}
            />
        </>
    );
});
