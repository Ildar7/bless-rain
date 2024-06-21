import React, {
    memo, useCallback, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import InfoIcon from 'shared/assets/icons/png/plinko-info.svg';
import CloseIcon from 'shared/assets/icons/png/plinko-close.svg';
import { AnimatedCounter } from 'shared/ui/AnimatedCounter/AnimatedCounter';
import { useSelector } from 'react-redux';
import { getUserBalance } from 'entities/User';
import { ApplicationModal, ApplicationModalButtons } from 'widgets/ApplicationModal';
import { getRouteGames } from 'shared/const/router';
import { useNavigate } from 'react-router-dom';
import cls from './PlinkoHeader.module.scss';
import { getPlinkoCanUpdateBalance, getPlinkoNewGameInited } from '../../model/selectors/getPlinko/getPlinko';
import { PlinkoRules } from '../PlinkoRules/PlinkoRules';
import { PlinkoWinTable } from '../PlinkoWinTable/PlinkoWinTable';

interface PlinkoHeaderProps {
    className?: string;
}

export const PlinkoHeader = memo((props: PlinkoHeaderProps) => {
    const {
        className,
    } = props;
    const balance = useSelector(getUserBalance);
    const newGameInited = useSelector(getPlinkoNewGameInited);
    const canUpdateBalance = useSelector(getPlinkoCanUpdateBalance);
    const navigate = useNavigate();
    const [applicationModalOpened, setApplicationModalOpened] = useState(false);

    const buttons: ApplicationModalButtons[] = useMemo(() => [
        {
            id: 1,
            name: 'Rules',
            icon: 'gamepad',
            active: true,
            component: <PlinkoRules />,
        },
        // {
        //     id: 2,
        //     name: 'Win table',
        //     icon: 'table',
        //     active: false,
        //     component: <PlinkoWinTable />,
        // },
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
            <div className={classNames(cls.PlinkoHeader, {}, [className])}>
                <button
                    type="button"
                    onClick={onOpenApplicationModal}
                >
                    <InfoIcon />
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
                    <CloseIcon />
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
