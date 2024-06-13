import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PlinkoWinTable.module.scss';

interface PlinkoWinTableProps {
    className?: string;
}

export const PlinkoWinTable = memo((props: PlinkoWinTableProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.PlinkoWinTable, {}, [className])}>
            <div className={cls.title}>
                Win table
            </div>
            <div className={cls.subtitle}>
                Body 2
            </div>
        </div>
    );
});
