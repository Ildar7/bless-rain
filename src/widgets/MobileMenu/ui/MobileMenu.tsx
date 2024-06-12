import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import {
    getRouteGames, getRouteMain, getRouteRating, getRouteRules,
} from 'shared/const/router';
import { useLocation } from 'react-router-dom';
import cls from './MobileMenu.module.scss';

interface MobileMenuProps {
    className?: string;
}

export const MobileMenu = memo((props: MobileMenuProps) => {
    const {
        className,
    } = props;
    const { pathname } = useLocation();

    return (
        <div className={classNames(cls.MobileMenu, {}, [className])}>
            <AppLink
                className={classNames(cls.item, { [cls.itemActive]: pathname === getRouteMain() }, [])}
                to={getRouteMain()}
            >
                <Icon name="dollar" />
                <div className={cls.itemText}>
                    Tasks
                </div>
            </AppLink>
            <AppLink
                className={classNames(cls.item, { [cls.itemActive]: pathname.includes(getRouteGames()) }, [])}
                to={getRouteGames()}
            >
                <Icon name="xbox-gamepad" />
                <div className={cls.itemText}>
                    Games
                </div>
            </AppLink>
            <AppLink
                className={classNames(cls.item, { [cls.itemActive]: pathname === getRouteRating() }, [])}
                to={getRouteRating()}
            >
                <Icon name="arrows-up-boxed" />
                <div className={cls.itemText}>
                    Rating
                </div>
            </AppLink>
            <AppLink
                className={classNames(cls.item, { [cls.itemActive]: pathname === getRouteRules() }, [])}
                to={getRouteRules()}
            >
                <Icon name="check-list-boxed" />
                <div className={cls.itemText}>
                    Rules
                </div>
            </AppLink>
        </div>
    );
});
