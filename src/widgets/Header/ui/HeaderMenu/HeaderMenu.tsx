import { classNames } from 'shared/lib/classNames/classNames';
import TopHangingBars from 'shared/assets/icons/top-hanging-bars.png';
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
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { appActions, getAppSidebarOpened } from 'entities/App';
import { useMobile } from 'shared/lib/hooks/useMobile/useMobile';
import cls from './HeaderMenu.module.scss';

interface HeaderMenuProps {
    className?: string;
}
export const HeaderMenu = memo((props: HeaderMenuProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const userData = useSelector(getUserData)?.data;
    const userIsLoading = useSelector(getUserIsLoading);
    const sidebarOpened = useSelector(getAppSidebarOpened);
    const { width, isMobile } = useMobile();

    const toggleSidebar = useCallback(() => {
        dispatch(appActions.toggleVisibleSidebar());
    }, [dispatch]);

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
            <div className={classNames(cls.mobSidebarButton, {}, ['sm:hidden'])}>
                <div className={cls.mobSidebarBar}>
                    <img src={TopHangingBars} alt="top-hanging-bars" />
                </div>
                <button
                    type="button"
                    className="surface p-1 sm:p-2 text-white text-2xl font-bold"
                    onClick={toggleSidebar}
                >
                    <div className="inner px-2 sm:px-3 py-2 flex items-center justify-center h-[40px] sm:h-[48px]">
                        <Icon className="text-icon-secondary" name="menu-open" />
                    </div>
                </button>
            </div>
            <div className={classNames(
                cls.headerMenuItem,
                {},
                ['relative z-70 flex'],
            )}
            >
                {(sidebarOpened || width >= 768) && (
                    <PlayingModeBanner />
                )}
                {/* <BonusBanner /> */}
            </div>

            <AppLink
                className={classNames(
                    cls.headerMenuItem,
                    {},
                    [cls.headerMenuLogo, 'flex', 'absolute top-0 left-1/2 -translate-x-1/2 hidden md:block z-20'],
                )}
                to={getRouteMain()}
            >
                <HeaderLogoSvg className={cls.headerLogo} />
            </AppLink>

            <div className={classNames(cls.headerMenuItem, {}, ['relative z-80'])}>
                <div className="flex gap-2 ml-32 signin-buttons">
                    <div className="flex flex-col items-center">
                        <div className="flex w-full px-[15px] justify-between">
                            <img src={TopHangingBars} alt="top-hanging-bars" />
                            <img src={TopHangingBars} alt="top-hanging-bars" />
                        </div>

                        <div className="relative">
                            <div
                                className={classNames(
                                    'surface p-1 rounded-lg sm:rounded-xl cursor-pointer select-none flex relative',
                                    { 'glowing-blue dashed-border': !isMobile },
                                    [''],
                                )}
                            >
                                <span
                                    className={classNames(
                                        'inner p-0.5 sm:p-1 block',
                                        { 'dashed-border-top': !isMobile },
                                        [],
                                    )}
                                    style={{ borderRadius: 8 }}
                                >
                                    <span
                                        className={classNames(
                                            '',
                                            { 'dashed-border-bottom': !isMobile },
                                            [],
                                        )}
                                    >
                                        {
                                            userIsLoading
                                                ? (<Skeleton width={132} height={36} border="8px" />)
                                                : (
                                                    <Button
                                                        theme="primary"
                                                        className="relative z-80 rounded-md sm:rounded-lg"
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
