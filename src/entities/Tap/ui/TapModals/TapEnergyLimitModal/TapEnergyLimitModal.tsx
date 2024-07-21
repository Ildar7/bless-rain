import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button } from 'shared/ui/Button/Button';
import { TapDefaultModal } from '../TapDefaultModal/TapDefaultModal';
import cls from './TapEnergyLimitModal.module.scss';

interface TapEnergyLimitModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const TapEnergyLimitModal = memo((props: TapEnergyLimitModalProps) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;

    const onHowWorkHandler = useCallback(() => {
        console.log('opened energy limit how work');
    }, []);

    return (
        <TapDefaultModal
            className={classNames(cls.TapEnergyLimitModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            howWorkHandler={onHowWorkHandler}
            howWorkText="How a boost works"
        >
            <div className="flex flex-col items-center mt-8">
                <Icon name="world" className="text-[72px] text-icon-secondary" />
                <div className="text-[38px] leading-[46px] h2">Energy limit</div>
                <div className="text-body-lg text-center mt-6">
                    Increase the amount of energy.
                </div>
                <div className="title-lg text-icon-secondary mt-6">+500 • lvl 2</div>
                <Button
                    size="xl"
                    className="w-full rounded-lg mt-8"
                    onClick={onClose}
                >
                    Go ahead
                </Button>
            </div>
        </TapDefaultModal>
    );
});
