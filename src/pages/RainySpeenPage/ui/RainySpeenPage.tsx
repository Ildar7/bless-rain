import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { RainySpeen, rainySpeenReducer } from 'entities/RainySpeen';
import { Helmet } from 'react-helmet';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './RainySpeenPage.module.scss';

interface RainySpeenPageProps {
    className?: string;
}

const reducers: ReducersList = {
    rainySpeen: rainySpeenReducer,
};

const RainySpeenPage = memo((props: RainySpeenPageProps) => {
    const {
        className,
    } = props;

    return (
        <>
            <Helmet>
                <title>Bless Rain - Rainy Speen</title>
            </Helmet>
            <DynamicModuleLoader reducers={reducers}>
                <div className={classNames(cls.RainySpeenPage, {}, [className, 'mt-[-6rem]'])}>
                    <RainySpeen />
                </div>
            </DynamicModuleLoader>
        </>
    );
});

export default RainySpeenPage;
