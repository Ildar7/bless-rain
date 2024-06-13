import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Plinko } from 'entities/Plinko';
import cls from './PlinkoPage.module.scss';

interface PlinkoPageProps {
    className?: string;
}

const PlinkoPage = memo((props: PlinkoPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.PlinkoPage, {}, [className])}>
            <Plinko className={cls.game} />
            <div className={cls.plinkoBg} />
        </div>
    );
});

export default PlinkoPage;
