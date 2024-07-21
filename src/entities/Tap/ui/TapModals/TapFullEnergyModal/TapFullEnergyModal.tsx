import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button } from 'shared/ui/Button/Button';
import cls from './TapFullEnergyModal.module.scss';
import { TapDefaultModal } from '../TapDefaultModal/TapDefaultModal';

interface TapFullEnergyModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const TapFullEnergyModal = memo((props: TapFullEnergyModalProps) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;

    const onHowWorkHandler = useCallback(() => {
        console.log('opened full energy how work');
    }, []);

    return (
        <TapDefaultModal
            className={classNames(cls.TapFullEnergyModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            howWorkHandler={onHowWorkHandler}
            howWorkText="How a boost works"
        >
            <div className="flex flex-col items-center mt-8">
                <Icon name="lighting-big" className="text-[72px] text-icon-secondary" />
                <div className="text-[38px] leading-[46px] h2">Full energy</div>
                <div className="text-body-lg text-center mt-6">
                    Recharge your energy to the maximum and do another round of mining.
                </div>
                <div className="title-lg text-icon-secondary mt-6">+1 coin per tab • lvl 2</div>
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
