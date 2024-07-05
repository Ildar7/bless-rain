import { classNames } from 'shared/lib/classNames/classNames';
import { Icon, IconName } from 'shared/ui/Icon/Icon';
import { Modal } from 'shared/ui/Modal/Modal';
import { ReactNode, useState } from 'react';
import cls from './ApplicationModal.module.scss';

export interface ApplicationModalButtons {
    id: number;
    name: string;
    icon: IconName;
    active: boolean;
    component: ReactNode;
}

interface ApplicationModalProps {
    className?: string;
    isOpen: boolean;
    onCloseModal: () => void;
    buttons: ApplicationModalButtons[];
}
export const ApplicationModal = (props: ApplicationModalProps) => {
    const {
        className,
        isOpen,
        onCloseModal,
        buttons,
    } = props;
    const [buttonsList, setButtonsList] = useState(buttons);

    const changeActiveContentModal = (contentName: string) => {
        setButtonsList((prevState) => prevState.map((button) => {
            if (button.name.toLowerCase() === contentName.toLowerCase()) {
                return {
                    ...button,
                    active: true,
                };
            }

            return {
                ...button,
                active: false,
            };
        }));
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onCloseModal}
            className={cls.ApplicationModalWrapper}
        >
            <div className={classNames(
                cls.ApplicationModal,
                {},
                [className, 'surface p-3'],
            )}
            >
                <div className={cls.aside}>
                    <div className={cls.buttons}>
                        {
                            buttonsList.map((button) => (
                                <div
                                    className={classNames(
                                        cls.button,
                                        {
                                            [cls.buttonActive]: button.active,
                                            'glowing-blue': button.active,
                                        },
                                        ['inner px-3 py-2 flex items-center justify-start gap-3 dashed-border'],
                                    )}
                                    key={button.id}
                                    onClick={() => { changeActiveContentModal(button.name); }}
                                >
                                    <Icon
                                        name={button.icon}
                                        glow={button.icon === 'table' ? 'blue' : 'pink'}
                                        className="text-2xl"
                                    />
                                    <span className="dashed-border-top">
                                        <span className="text-label-md dashed-border-bottom">
                                            {button.name}
                                        </span>
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div
                    className={
                        classNames(
                            cls.wrapper,
                            {},
                            ['inner !rounded-xl'],
                        )
                    }
                >
                    {
                        buttonsList.map((button) => (
                            button.active && button.component
                        ))
                    }

                    <button
                        type="button"
                        onClick={onCloseModal}
                        className={classNames(cls.closeBtn, {}, ['text-2xl'])}
                    >
                        <Icon name="xmark" className="text-2xl text-icon-secondary hover:text-danger" />
                    </button>
                </div>
            </div>
        </Modal>
    );
};
