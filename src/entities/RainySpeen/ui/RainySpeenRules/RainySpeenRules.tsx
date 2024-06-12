import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './RainySpeenRules.module.scss';

interface RainySpeenRulesProps {
    className?: string;
}

export const RainySpeenRules = memo((props: RainySpeenRulesProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.RainySpeenRules, {}, [className])}>
            <div className={cls.title}>
                Rules
            </div>
            <div className={cls.subtitle}>
                Body 1
            </div>
        </div>
    );
});
