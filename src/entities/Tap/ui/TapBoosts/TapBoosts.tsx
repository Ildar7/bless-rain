import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { formatNumberWithSeparators } from 'shared/lib/helpers/formatNumberWithSeparators/formatNumberWithSeparators';
import { Button } from 'shared/ui/Button/Button';
import InfoIcon from 'shared/assets/icons/png/info.png';
import { TaskItem } from 'widgets/TaskItem';
import { Icon } from 'shared/ui/Icon/Icon';
import { TapFullEnergyModal } from '../TapModals/TapFullEnergyModal/TapFullEnergyModal';
import { TapMultitapBoostModal } from '../TapModals/TapMultitapBoostModal/TapMultitapBoostModal';
import { TapEnergyLimitModal } from '../TapModals/TapEnergyLimitModal/TapEnergyLimitModal';
import cls from './TapBoosts.module.scss';
import {
    TapPassiveMiningBoostModal,
} from '../TapModals/TapPassiveMiningBoostModal/TapPassiveMiningBoostModal';

interface TapBoostsProps {
    className?: string;
    hideBoosts: () => void;
}

export const TapBoosts = memo((props: TapBoostsProps) => {
    const {
        className,
        hideBoosts,
    } = props;
    const [fullEnergyModalVisible, setFullEnergyModalVisible] = useState(false);
    const [multitapBoostModalVisible, setMultiTapBoostModalVisible] = useState(false);
    const [energyLimitModalVisible, setEnergyLimitModalVisible] = useState(false);
    const [passiveMiningBoostModalVisible, setPassiveMiningBoostModalVisible] = useState(false);

    const onShowFullEnergyModal = useCallback(() => {
        setFullEnergyModalVisible(true);
    }, []);

    const closeFullEnergyModal = useCallback(() => {
        setFullEnergyModalVisible(false);
    }, []);

    const onShowMultitapBoostModal = useCallback(() => {
        setMultiTapBoostModalVisible(true);
    }, []);

    const closeMultitapBoostModal = useCallback(() => {
        setMultiTapBoostModalVisible(false);
    }, []);

    const onShowEnergyLimitModal = useCallback(() => {
        setEnergyLimitModalVisible(true);
    }, []);

    const closeEnergyLimitModal = useCallback(() => {
        setEnergyLimitModalVisible(false);
    }, []);

    const onShowPassiveMiningBoostModal = useCallback(() => {
        setPassiveMiningBoostModalVisible(true);
    }, []);

    const closePassiveMiningBoostModal = useCallback(() => {
        setPassiveMiningBoostModalVisible(false);
    }, []);

    return (
        <>
            <div className={classNames(cls.TapBoosts, {}, [className, 'mb-[130px]'])}>
                <Button
                    theme="none"
                    className={cls.exitBtn}
                    onClick={hideBoosts}
                >
                    <div className={cls.exitBtnContent}>
                        <Icon name="exit" className={cls.exitIcon} />
                        <div>Back to tap</div>
                    </div>
                </Button>
                <div className={cls.balanceWrapper}>
                    <div className={classNames(cls.balanceText, {}, ['text-label-md'])}>Your balance</div>
                    <div className={cls.balanceNum}>
                        {formatNumberWithSeparators(13449, false)}
                    </div>
                    <Button
                        theme="none"
                        className={cls.howWorkBtn}
                    >
                        <div className={cls.howWorkBtnContent}>
                            <div className={cls.howWorkImg}>
                                <img src={InfoIcon} alt="how it works" />
                            </div>
                            <div className={classNames(cls.howWorkDescr, {}, ['text-label-lg'])}>
                                How a boost works
                            </div>
                        </div>
                    </Button>
                </div>
                <div className={cls.boosters}>
                    <div>
                        <div className="title-sm text-icon-secondary">Free daily boosters</div>
                        <div className="mt-4 flex flex-col gap-4">
                            <TaskItem
                                iconName="lighting-big"
                                taskName="Full energy"
                                taskDescr="3/3 available"
                                withoutBtn
                                onClick={onShowFullEnergyModal}
                            />
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="title-sm text-icon-secondary">Boosters</div>
                        <div className="mt-4 flex flex-col gap-4">
                            <TaskItem
                                iconName="star"
                                taskName="Multitap boost"
                                taskDescr="+1 coin per tab • lvl 2"
                                withoutBtn
                                onClick={onShowMultitapBoostModal}
                            />
                            <TaskItem
                                iconName="world"
                                taskName="Energy limit"
                                taskDescr="+500 • lvl 2"
                                withoutBtn
                                onClick={onShowEnergyLimitModal}
                            />
                            <TaskItem
                                iconName="turbo"
                                taskName="Passive Mining boost"
                                taskDescr="+1 coin per 5 minutes • for 5 friends"
                                withoutBtn
                                onClick={onShowPassiveMiningBoostModal}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <TapFullEnergyModal
                isOpen={fullEnergyModalVisible}
                onClose={closeFullEnergyModal}
            />
            <TapMultitapBoostModal
                isOpen={multitapBoostModalVisible}
                onClose={closeMultitapBoostModal}
            />
            <TapEnergyLimitModal
                isOpen={energyLimitModalVisible}
                onClose={closeEnergyLimitModal}
            />
            <TapPassiveMiningBoostModal
                isOpen={passiveMiningBoostModalVisible}
                onClose={closePassiveMiningBoostModal}
            />
        </>
    );
});
