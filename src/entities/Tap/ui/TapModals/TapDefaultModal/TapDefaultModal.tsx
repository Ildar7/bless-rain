import React, { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import InfoIcon from 'shared/assets/icons/png/info.png';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './TapDefaultModal.module.scss';

interface TapDefaultModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    howWorkHandler: () => void;
    howWorkText: string;
}

export const TapDefaultModal = memo((props: TapDefaultModalProps) => {
    const {
        className,
        isOpen,
        onClose,
        children,
        howWorkHandler,
        howWorkText,
    } = props;

    return (
        <Modal
            className={classNames(cls.TapDefaultModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className={cls.content}>
                <div className={cls.header}>
                    <Button
                        className={cls.infoBtn}
                        onClick={howWorkHandler}
                        theme="none"
                    >
                        <div className={cls.infoBtnContent}>
                            <Icon name="exclamation-circle" className={cls.exclamIcon} />
                            <div className={cls.howWorkText}>{howWorkText}</div>
                        </div>
                    </Button>
                    <Button
                        theme="none"
                        className={cls.closeBtn}
                        onClick={onClose}
                    >
                        <Icon name="xmark" className={cls.closeIcon} />
                    </Button>
                </div>
                {children}
            </div>
        </Modal>
    );
});
