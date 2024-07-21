import React, { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './TapDailyRewardsModal.module.scss';
import { TapDefaultModal } from '../TapDefaultModal/TapDefaultModal';
import { TapDailyRewardItem } from '../../TapDailyRewardItem/TapDailyRewardItem';

interface TapDailyRewardsModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const TapDailyRewardsModal = memo((props: TapDailyRewardsModalProps) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;
    const rewards = useMemo(() => [
        {
            id: 1,
            title: 'Day 1',
            coins: 250,
            disabled: true,
        },
        {
            id: 2,
            title: 'Day 2',
            coins: 500,
            disabled: true,
        },
        {
            id: 3,
            title: 'Day 3',
            coins: 1000,
            active: true,
        },
        {
            id: 4,
            title: 'Day 4',
            coins: 2000,
        },
        {
            id: 5,
            title: 'Day 5',
            coins: 8000,
        },
        {
            id: 6,
            title: 'Day 6',
            coins: 16000,
        },
        {
            id: 7,
            title: 'Day 7',
            coins: 17000,
        },
        {
            id: 8,
            title: 'Day 8',
            coins: 80000,
        },
        {
            id: 9,
            title: 'Day 9',
            coins: 200000,
        },
        {
            id: 10,
            title: 'Day 10',
            coins: 500000,
        },
    ], []);

    const onHowWorkHandler = useCallback(() => {
        console.log('opened daily reward how work');
    }, []);

    return (
        <TapDefaultModal
            className={classNames(cls.TapDailyRewardsModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            howWorkHandler={onHowWorkHandler}
            howWorkText="Daily rewards"
        >
            <div className="flex flex-col items-center mt-4">
                <div className="text-[38px] leading-[46px] h2">Day 3</div>
                <div className={classNames(cls.itemsWrapper, {}, ['flex flex-col gap-2 mt-[26px] w-full'])}>
                    <div className={classNames(cls.items, {}, ['grid grid-cols-3 gap-2'])}>
                        {rewards.slice(0, rewards.length - 1).map((item) => (
                            <TapDailyRewardItem
                                key={item.id}
                                title={item.title}
                                coins={item.coins}
                                disabled={item.disabled}
                                active={item.active}
                            />
                        ))}
                    </div>
                    <TapDailyRewardItem
                        title={rewards[rewards.length - 1].title}
                        coins={rewards[rewards.length - 1].coins}
                        active={rewards[rewards.length - 1].active}
                        disabled={rewards[rewards.length - 1].disabled}
                    />
                </div>
                <Button
                    theme="none"
                    className={cls.claimBtn}
                    onClick={onClose}
                >
                    Claim
                </Button>
            </div>
        </TapDefaultModal>
    );
});
