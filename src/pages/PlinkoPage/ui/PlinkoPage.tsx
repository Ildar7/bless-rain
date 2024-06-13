import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Plinko, plinkoReducer } from 'entities/Plinko';
import { Helmet } from 'react-helmet';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './PlinkoPage.module.scss';

interface PlinkoPageProps {
    className?: string;
}

const reducers: ReducersList = {
    plinko: plinkoReducer,
};

const PlinkoPage = memo((props: PlinkoPageProps) => {
    const {
        className,
    } = props;

    return (
        <>
            <Helmet>
                <title>Bless Rain - Plinko</title>
            </Helmet>
            <DynamicModuleLoader reducers={reducers}>
                <div className={classNames(cls.PlinkoPage, {}, [className])}>
                    <Plinko className={cls.game} />
                    <div className={cls.plinkoBg} />
                </div>
            </DynamicModuleLoader>
        </>
    );
});

export default PlinkoPage;
