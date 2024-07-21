import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import InfoIcon from 'shared/assets/icons/png/info.png';
import { Button } from 'shared/ui/Button/Button';
import { TapDailyRewardsModal } from 'entities/Tap/ui/TapModals/TapDailyRewardsModal/TapDailyRewardsModal';
import cls from './TapMain.module.scss';

interface TapMainProps {
    className?: string;
    showBoosts: () => void;
}

export const TapMain = memo((props: TapMainProps) => {
    const {
        className,
        showBoosts,
    } = props;
    const [dailyRewardsModalVisible, setDailyRewardsModalVisible] = useState(false);

    const onShowDailyRewardsModalVisible = useCallback(() => {
        setDailyRewardsModalVisible(true);
    }, []);

    const closeDailyRewardsModalVisible = useCallback(() => {
        setDailyRewardsModalVisible(false);
    }, []);

    return (
        <>
            <div className={classNames(cls.TapMain, {}, [className])}>
                <div className={cls.top}>
                    <div className={cls.barWrapper}>
                        <div className={cls.barText}>
                            <Icon name="lighting-big" className={cls.icon} />
                            <div>78</div>
                        </div>
                        <div className={cls.scaleBar}>
                            <span />
                        </div>
                    </div>
                    <div className={cls.energyWrapper}>
                        <Button
                            className={cls.energyBlock}
                            theme="none"
                            onClick={onShowDailyRewardsModalVisible}
                        >
                            <div className={cls.energyLimit}>Daily rewards</div>
                        </Button>
                        <div className={cls.energyBlock}>
                            <div className={classNames(cls.energyText, {}, ['caption-md'])}>Full energy</div>
                            <Icon name="lighting-big" className={cls.energyIcon} />
                            <div className={cls.energyLimit}>3/3</div>
                        </div>
                    </div>
                </div>
                <div className={cls.middle} />
                <div className={cls.bottom}>
                    <div className="flex items-center gap-2">
                        <div className={cls.infoImg}>
                            <img src={InfoIcon} alt="info" />
                        </div>
                        <div className={cls.rulesText}>Rules</div>
                    </div>
                    <Button
                        theme="none"
                        className={classNames(cls.boostBtn, {}, [])}
                        onClick={showBoosts}
                    >
                        <Icon name="cosmo" className={cls.cosmoIcon} />
                        <div className={cls.boostText}>Boosts</div>
                    </Button>
                </div>
            </div>
            <TapDailyRewardsModal
                isOpen={dailyRewardsModalVisible}
                onClose={closeDailyRewardsModalVisible}
            />
        </>
    );
});
