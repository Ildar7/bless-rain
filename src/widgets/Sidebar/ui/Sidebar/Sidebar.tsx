import { classNames } from 'shared/lib/classNames/classNames';
import './Sidebar.scss';
import React, { memo } from 'react';
import { RatingItem } from 'pages/RatingPage/ui/RatingPage';
import { SidebarItem } from '../SidebarItem/SidebarItem';

export interface SidebarItems<T> {
    id: number;
    text: string;
    active: boolean;
    items?: T;
}

interface SidebarProps {
    items: SidebarItems<RatingItem[]>[];
    setItems: React.Dispatch<React.SetStateAction<SidebarItems<RatingItem[]>[]>>;
}

export const Sidebar = memo((props: SidebarProps) => {
    const {
        items,
        setItems,
    } = props;

    const onChangeActiveTab = (id: number) => {
        setItems((prevState) => prevState.map((item) => {
            if (item.id !== id) {
                return {
                    ...item,
                    active: false,
                };
            }

            return {
                ...item,
                active: true,
            };
        }));
    };

    return (
        <div className={
            classNames(
                'text-white flex gap-1 sm:gap-0 flex-col justify-center select-none z-60',
                {},
                [],
            )
        }
        >
            <div className="flex flex-row sm:flex-col gap-3 max-w-[456px] sm:max-w-none flex-wrap">
                {items.map((item) => (
                    <SidebarItem
                        onClick={() => { onChangeActiveTab(item.id); }}
                        active={item.active}
                        key={item.id + item.text}
                    >
                        {item.text}
                    </SidebarItem>
                ))}
            </div>
        </div>
    );
});
