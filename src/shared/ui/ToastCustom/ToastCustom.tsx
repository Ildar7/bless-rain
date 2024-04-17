import { toast } from 'react-toastify';
import InfoIcon from 'shared/assets/icons/toast-info-icon.svg';
import WarningIcon from 'shared/assets/icons/toast-warning-icon.svg';
import SuccessIcon from 'shared/assets/icons/toast-success-icon.svg';

export const userToastConfig = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    style: { zIndex: 999999 },
};

function ToastComponent({ message, Icon }: any) {
    return (
        <div className="toastify__content-wrapper">
            <div className="toastify__icon">
                <Icon />
            </div>
            <div className="toastify__content">
                <div className="toastify__content__text">
                    {message}
                </div>
            </div>
        </div>
    );
}
export const ToastCustom = {
    info: (message: string) => toast(
        (
            <ToastComponent message={message} Icon={InfoIcon} />
        ),
        {
            ...userToastConfig as any,
            className: 'info-toast',
        },
    ),
    error: (message: string) => toast.error(
        (
            <ToastComponent message={message} Icon={InfoIcon} />
        ),
        {
            ...userToastConfig as any,
            className: 'error-toast',
            autoClose: 5000,
        },
    ),
    warning: (message: string) => toast.warning(
        (
            <ToastComponent message={message} Icon={WarningIcon} />
        ),
        {
            ...userToastConfig as any,
            className: 'warning-toast',
        },
    ),
    success: (message: string) => toast.success(
        (
            <ToastComponent message={message} Icon={SuccessIcon} />
        ),
        {
            ...userToastConfig as any,
            className: 'success-toast',
        },
    ),
    loading: (message: string, className?: string) => toast.loading(
        message,
        {
            ...userToastConfig as any,
            className,
        },
    ),
    update: (toast: any, message: string, status: string) => toast.update(
        toast,
        {
            render: message,
            type: status,
            isLoading: false,
        },
    ),
};
