import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './RainySpeenWinTable.module.scss';

interface RainySpeenWinTableProps {
    className?: string;
}

export const RainySpeenWinTable = memo((props: RainySpeenWinTableProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.RainySpeenWinTable, {}, [className])}>
            <div className={cls.title}>
                Win table
            </div>
            <div className={cls.subtitle}>
                Body 2
            </div>
        </div>
    );
});
