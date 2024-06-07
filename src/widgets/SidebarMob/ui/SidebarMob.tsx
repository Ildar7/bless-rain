import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import LeftHangingBars from 'shared/assets/icons/left-hanging-bars.png';
import { Icon, IconName } from 'shared/ui/Icon/Icon';
import cls from './SidebarMob.module.scss';

type SidebarItemGlowing = 'pink' | 'blue';

export interface SidebarMobItem {
    id: number;
    title: string;
    glow: SidebarItemGlowing;
    onClick: () => void;
    icon: IconName;
    active: boolean;
}

interface SidebarMobProps {
    className?: string;
    items: SidebarMobItem[];
}

export const SidebarMob = memo((props: SidebarMobProps) => {
    const {
        className,
        items,
    } = props;

    return (
        <div className={classNames(cls.SidebarMob, {}, [className])}>
            <div className="flex flex-col gap-3">
                {items.map((item) => {
                    const glowingClass = `glowing-${item.glow}`;

                    return (
                        <div className="flex items-center" key={item.id}>
                            <img src={LeftHangingBars} alt="left-hanging-bars" />
                            <div className="surface p-1 min-w-[200px]">
                                <div
                                    className={classNames(
                                        'inner rounded-xl p-2 flex items-center justify-start gap-3 dashed-border cursor-pointer',
                                        {},
                                        [item.active ? glowingClass : ''],
                                    )}
                                    onClick={item.onClick}
                                >
                                    <Icon name={item.icon} glow={item.glow} className="text-2xl" />
                                    <span className="dashed-border-top">
                                        <span className="text-label-sm dashed-border-bottom">{item.title}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});
