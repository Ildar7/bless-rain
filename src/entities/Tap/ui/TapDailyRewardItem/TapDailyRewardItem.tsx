import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { abbreviateNumber } from 'shared/lib/helpers/abbreviateNumber/abbreviateNumber';
import cls from './TapDailyRewardItem.module.scss';

interface TapDailyRewardItemProps {
    className?: string;
    title: string;
    coins: number;
    disabled?: boolean;
    active?: boolean;
}

export const TapDailyRewardItem = memo((props: TapDailyRewardItemProps) => {
    const {
        className,
        title,
        coins,
        disabled,
        active,
    } = props;

    return (
        <div
            className={classNames(
                cls.TapDailyRewardItem,
                {
                    [cls.TapDailyRewardItemDisabled]: disabled,
                    [cls.TapDailyRewardItemActive]: active,
                },
                [className],
            )}
        >
            <div className={classNames(cls.title, {}, ['text-label-md font-medium'])}>
                {title}
            </div>
            <div className={classNames(cls.coins, {}, ['title-lg'])}>
                {abbreviateNumber(coins)}
            </div>
            <Icon name="coin" className={cls.coinIcon} />
        </div>
    );
});
