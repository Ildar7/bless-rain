import { classNames } from 'shared/lib/classNames/classNames';
import TopHangingBars from 'shared/assets/icons/top-hanging-bars.svg';
import { Button } from 'shared/ui/Button/Button';
import { memo, useCallback } from 'react';
import './HeaderMenu.scss';
import { PlayingModeBanner } from 'widgets/PlayingModeBanner';
import HeaderLogoSvg from 'shared/assets/icons/header-logo.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { getRouteMain } from 'shared/const/router';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserData, getUserIsLoading } from 'entities/User';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './HeaderMenu.module.scss';

interface HeaderMenuProps {
    className?: string;
}
export const HeaderMenu = memo((props: HeaderMenuProps) => {
    const {
        className,
    } = props;
    const navigate = useNavigate();
    const userData = useSelector(getUserData)?.data;
    const userIsLoading = useSelector(getUserIsLoading);

    const routeToMainPage = useCallback(() => {
        navigate(getRouteMain());
    }, [navigate]);

    const loginHandler = useCallback(() => {
        window.open('https://rain.bless.bet/auth/twitter', '_self');
    }, []);

    const logoutHandler = useCallback(() => {
        window.open('https://rain.bless.bet/auth/logout', '_self');
    }, []);

    return (
        <div
            className={classNames(
                'flex justify-between items-stretch sm:items-start w-full',
                {},
                [className],
            )}
        >
            <div className={classNames(cls.mobSidebarButton, {}, ['md:hidden'])}>
                <div className={cls.mobSidebarBar}>
                    <TopHangingBars />
                </div>
                <button
                    type="button"
                    className="surface p-1 sm:p-2 text-white text-2xl font-bold"
                    onClick={routeToMainPage}
                >
                    <div className="inner px-3 py-2 flex items-center justify-center h-[48px]">
                        <Icon name="bless" />
                    </div>
                </button>
            </div>
            <div className={classNames(cls.headerMenuItem, {}, ['flex'])}>
                <PlayingModeBanner className="relative z-20 flex-1 sm:flex-auto" />
                {/* <BonusBanner /> */}
            </div>

            <AppLink
                className={classNames(
                    cls.headerMenuItem,
                    {},
                    ['flex', 'absolute top-0 left-1/2 -translate-x-1/2 hidden md:block z-20'],
                )}
                to={getRouteMain()}
            >
                <HeaderLogoSvg className={cls.headerLogo} />
            </AppLink>

            <div className={classNames(cls.headerMenuItem, {}, ['flex hidden sm:block'])}>
                <div className="flex gap-2 ml-32 signin-buttons">
                    <div className="flex flex-col items-center">
                        <div className="w-2/3 flex justify-between">
                            <TopHangingBars />
                            <TopHangingBars />
                        </div>

                        <div className="relative">
                            <div
                                className="surface
                                            p-1 rounded-xl cursor-pointer select-none flex glowing-blue dashed-border relative"
                            >
                                <span
                                    className="inner p-1 block dashed-border-top"
                                    style={{ borderRadius: 8 }}
                                >
                                    <span className="dashed-border-bottom">
                                        {
                                            userIsLoading
                                                ? (<Skeleton width={132} height={36} border="8px=" />)
                                                : (
                                                    <Button
                                                        theme="primary"
                                                        className="rounded-lg"
                                                        size="md"
                                                        style={{ width: 132 }}
                                                        onClick={userData ? logoutHandler : loginHandler}
                                                    >
                                                        {userData ? 'Logout' : 'Login with Х'}
                                                    </Button>
                                                )
                                        }
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
});
