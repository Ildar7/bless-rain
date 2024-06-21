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
                <ul className="flex flex-col gap-2">
                    <li className={cls.item}>Press the button for the next drop to fall.</li>
                    <li className={cls.item}>By pressing the button you place a bet of 10 points.</li>
                    <li className={cls.item}>
                        Falling on each pin, the drop bounces to
                        the right or left with a 50% random chance and goes down to the line below.
                    </li>
                    <li className={cls.item}>
                        The amount of your winnings is
                        determined by the odds on the basket the drop fell into.
                    </li>
                </ul>
            </div>
        </div>
    );
});
