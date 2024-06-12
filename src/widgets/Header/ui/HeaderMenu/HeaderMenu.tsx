import { classNames } from 'shared/lib/classNames/classNames';
import TopHangingBars from 'shared/assets/icons/top-hanging-bars.png';
import { Button } from 'shared/ui/Button/Button';
import { memo, useCallback } from 'react';
import './HeaderMenu.scss';
import { PlayingModeBanner } from 'widgets/PlayingModeBanner';
import HeaderLogoSvg from 'shared/assets/icons/header-logo.svg';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { getRouteMain } from 'shared/const/router';
import { useSelector } from 'react-redux';
import { getUserBalance, getUserData, getUserIsLoading } from 'entities/User';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useMobile } from 'shared/lib/hooks/useMobile/useMobile';
import { formatNumberWithSeparators } from 'shared/lib/helpers/formatNumberWithSeparators/formatNumberWithSeparators';
import cls from './HeaderMenu.module.scss';

interface HeaderMenuProps {
    className?: string;
}
export const HeaderMenu = memo((props: HeaderMenuProps) => {
    const {
        className,
    } = props;
    const userData = useSelector(getUserData)?.data;
    const userBalance = useSelector(getUserBalance);
    const userIsLoading = useSelector(getUserIsLoading);
    const { width, isMobile } = useMobile();

    const loginHandler = useCallback(() => {
        window.open('https://rain.bless.bet/auth/twitter', '_self');
    }, []);

    return (
        <div
            className={classNames(
                'flex justify-between items-stretch sm:items-start w-full',
                {},
                [className],
            )}
        >
            <div className={classNames(
                cls.headerMenuItem,
                {},
                ['relative z-70 flex'],
            )}
            >
                {width >= 768 && (
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
                <div className="flex gap-4 lg:gap-8 signin-buttons">
                    {userData && (
                        <div className="flex flex-col items-center">
                            <div className="flex w-full px-[15px] justify-between">
                                <img src={TopHangingBars} alt="top-hanging-bars" />
                                <img src={TopHangingBars} alt="top-hanging-bars" />
                            </div>

                            <div
                                className="surface p-2 rounded-xl select-none flex gap-2 h-full"
                            >
                                <div
                                    className={classNames(
                                        cls.money,
                                        {},
                                        ['inner text-white rounded-xl flex items-center justify-center pr-2 pl-6'],
                                    )}
                                >
                                    {
                                        userIsLoading
                                            ? <Skeleton width="100%" height="100%" border="6px" />
                                            : (formatNumberWithSeparators(userBalance, true))
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col items-center">
                        <div className="flex w-full px-[15px] justify-between">
                            <img src={TopHangingBars} alt="top-hanging-bars" />
                            <img src={TopHangingBars} alt="top-hanging-bars" />
                        </div>

                        {
                            userData
                                ? (
                                    <div
                                        className="surface p-2 rounded-xl cursor-pointer select-none flex gap-2"
                                    >
                                        {
                                            userIsLoading
                                                ? <Skeleton width="100%" height="100%" border="6px" />
                                                : (
                                                    <AppLink
                                                        to={getRouteMain()}
                                                        className="inner text-white rounded-xl flex items-center justify-center"
                                                    >
                                                        <div className={classNames(cls.profileName, {}, ['px-4'])}>
                                                            {userData.name}
                                                        </div>
                                                        <div
                                                            className="w-11 h-11 rounded-md bg-center
                                                            bg-cover bg-content-secondary"
                                                            style={{
                                                                backgroundImage:
                                                                    `url('${JSON.parse(userData.twitter_data).avatar}')`
                                                                ,
                                                            }}
                                                        />
                                                    </AppLink>
                                                )
                                        }
                                    </div>
                                )
                                : (
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
                                                                    onClick={loginHandler}
                                                                >
                                                                    Login with Х
                                                                </Button>
                                                            )
                                                    }
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
});
