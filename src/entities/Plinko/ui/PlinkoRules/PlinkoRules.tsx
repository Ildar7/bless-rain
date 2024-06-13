import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PlinkoRules.module.scss';

interface PlinkoRulesProps {
    className?: string;
}

export const PlinkoRules = memo((props: PlinkoRulesProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.PlinkoRules, {}, [className])}>
            <div className={cls.title}>
                Rules
            </div>
            <div className={cls.subtitle}>
                Body 1
            </div>
        </div>
    );
});
