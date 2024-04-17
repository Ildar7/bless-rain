import { classNames } from 'shared/lib/classNames/classNames';
import LeftHangingBars from 'shared/assets/icons/left-hanging-bars.svg';
import { MouseEventHandler, ReactNode } from 'react';

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
        <div className={classNames('flex w-auto sm:w-full items-center', {}, [className])}>
            <div>
                <LeftHangingBars />
            </div>

            <button
                type="button"
                className="surface cursor-pointer w-[135px] xs:w-[156px] sm:w-[200px]"
                onClick={onClick}
            >
                <div className={
                    classNames(
                        'inner p-2 flex gap-2 items-center dashed-border',
                        {
                            'glowing-blue': active,
                        },
                        [],
                    )
                }
                >
                    <span className="text-label-md dashed-border-top">
                        <span className="dashed-border-bottom">{children}</span>
                    </span>
                </div>
            </button>

        </div>
    );
};
