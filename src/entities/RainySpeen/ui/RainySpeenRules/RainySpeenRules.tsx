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
                <ul className="flex flex-col gap-2">
                    <li className={cls.item}>Press the button to spin the reels.</li>
                    <li className={cls.item}>By clicking the button, you place a bet of 2 points.</li>
                    <li className={cls.item}>There are symbols on each reel in a predetermined sequence.</li>
                    <li className={cls.item}>The rotation of each reel is random.</li>
                    <li className={cls.item}>The middle line of symbols is used to determine the winning combination.</li>
                    <li className={cls.item}>If you get a winning combination, you get a win according to the table.</li>
                </ul>
            </div>
        </div>
    );
});
