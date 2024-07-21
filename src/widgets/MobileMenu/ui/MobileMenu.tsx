import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import {
    getRouteEarn,
    getRouteGames, getRouteMain, getRouteRating, getRouteRules,
    getRouteTap,
} from 'shared/const/router';
import { useLocation } from 'react-router-dom';
import UsersIcon from 'shared/assets/icons/users.svg';
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
                className={classNames(cls.item, { [cls.itemActive]: pathname === getRouteTap() }, [])}
                to={getRouteTap()}
            >
                <Icon name="tap" />
                <div className={cls.itemText}>
                    Tap
                </div>
            </AppLink>
            <AppLink
                className={classNames(cls.item, { [cls.itemActive]: pathname === getRouteMain() }, [])}
                to={getRouteMain()}
            >
                <Icon name="home" />
                <div className={cls.itemText}>
                    Home
                </div>
            </AppLink>
            <AppLink
                className={classNames(cls.item, { [cls.itemActive]: pathname === getRouteEarn() }, [])}
                to={getRouteEarn()}
            >
                <Icon name="coins" />
                <div className={cls.itemText}>
                    Earn
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
                <UsersIcon className={cls.usersIcon} />
                <div className={cls.itemText}>
                    Friends
                </div>
            </AppLink>
        </div>
    );
});
