import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { RainySpeen } from 'entities/RainySpeen';
import cls from './RainySpeenPage.module.scss';

interface RainySpeenPageProps {
    className?: string;
}

const RainySpeenPage = memo((props: RainySpeenPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.RainySpeenPage, {}, [className, 'mt-[-9rem]'])}>
            <RainySpeen />
        </div>
    );
});

export default RainySpeenPage;
