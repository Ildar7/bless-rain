import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import './Button.scss';

export type ButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'square';
export type ButtonTheme = 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'none' | 'tab' | 'reward';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    contentClassName?: string;
    size?: ButtonSize;
    theme?: ButtonTheme;
    selected?: boolean
    loading?: boolean
    disabled?: boolean
}
export const Button = memo((props: ButtonProps) => {
    const {
        children,
        className,
        contentClassName,
        disabled = false,
        size = 'md',
        theme = 'primary',
        selected,
        loading = false,
        ...otherProps
    } = props;
    const getSpinnerSize = () => (size === 'sm' ? 15 : 18);
    const getSpinnerClass = () => {
        const colors = {
            primary: 'fill-icon',
            secondary: 'fill-icon-colorful',
            tertiary: 'fill-content-secondary',
            outlined: 'fill-white',
            none: 'fill-none',
            tab: 'fill-tab',
            reward: 'fill-white',
        };

        return colors[theme];
    };

    const getButtonClasses = () => {
        const classes = ['btn', size, theme];

        loading ? classes.push('loading') : null;
        disabled ? classes.push('disabled') : null;
        selected ? classes.push('selected') : null;

        classes.push(size === 'sm' ? 'text-label-sm' : 'text-label-md');

        return classes.filter((x) => x).join(' ');
    };

    return (
        <button
            type="button"
            className={classNames(
                '',
                {},
                [
                    className,
                    'relative flex justify-center items-center',
                    getButtonClasses(),
                ],
            )}
            disabled={disabled}
            {...otherProps}
        >
            {
                loading
                    ? (
                        <div className={classNames(
                            '',
                            { 'opacity-0': !loading },
                            ['absolute top-1/2 -translate-y-1/2 duration-100'],
                        )}
                        >
                            <div className="animate-spin loading-spinner">
                                <svg
                                    viewBox="0 0 18 18"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={getSpinnerSize()}
                                    height={getSpinnerSize()}
                                    className={classNames('', {}, [getSpinnerClass()])}
                                >
                                    <path d="M15.864 2.63609L14.45 4.05009C13.3049 2.90489 11.7982
                        2.19215 10.1865 2.03333C8.57482 1.87451 6.95794 2.27942 5.61134
                        3.17908C4.26474 4.07874 3.27174 5.41748 2.80154 6.9672C2.33134
                        8.51692 2.41302 10.1817 3.03268 11.678C3.65234 13.1742 4.77162
                        14.4093 6.19983 15.1728C7.62803 15.9363 9.27679 16.181 10.8652
                        15.8652C12.4536 15.5493 13.8833 14.6925 14.9108 13.4407C15.9382
                        12.1889 16.4999 10.6196 16.5 9.00009H18.5C18.5 11.0823 17.778
                        13.1001 16.457 14.7096C15.1361 16.3192 13.2979 17.4209 11.2557
                        17.8271C9.21355 18.2333 7.0937 17.9188 5.25737 16.9373C3.42104
                        15.9557 1.98187 14.3678 1.18506 12.4441C0.388253 10.5204 0.283114
                        8.37992 0.887558 6.38739C1.492 4.39486 2.76863 2.67355 4.49992
                        1.51675C6.23121 0.359959 8.31004 -0.160747 10.3822 0.0433572C12.4544 0.247462
                        14.3917 1.16375 15.864 2.63609Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    )
                    : ''
            }
            <div className={classNames('flex', { 'opacity-0 duration-100': loading }, [contentClassName])}>
                {children}
            </div>
        </button>
    );
});
