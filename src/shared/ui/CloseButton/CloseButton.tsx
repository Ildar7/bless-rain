import cls from './CloseButton.module.scss';

export const CloseButton = ({ closeToast }: any) => (
    <div className={cls.CloseButton} onClick={closeToast} />
);
