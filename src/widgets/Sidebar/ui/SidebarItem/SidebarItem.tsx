import { classNames } from 'shared/lib/classNames/classNames';
import { MouseEventHandler, ReactNode } from 'react';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    className?: string;
    children?: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
    active: boolean;
}
export const SidebarItem = (props: SidebarItemProps) => {
    const {
        className,
        children,
        onClick,
        active,
    } = props;

    return (
        <div className={classNames('flex w-auto items-center', {}, [className])}>
            <button
                type="button"
                className="cursor-pointer"
                onClick={onClick}
            >
                <div className={
                    classNames(
                        cls.item,
                        { [cls.itemActive]: active },
                        ['text-label-md text-icon-secondary'],
                    )
                }
                >
                    {children}
                </div>
            </button>

        </div>
    );
};
