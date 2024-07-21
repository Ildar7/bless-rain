import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { memo, useCallback } from 'react';
import './HeaderMenu.scss';
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
    const { isMobile } = useMobile();

    const loginHandler = useCallback(() => {
        window.open('https://rain.bless.bet/auth/twitter', '_self');
    }, []);

    return (
        <div
            className={classNames(
                'flex justify-between items-stretch sm:items-start w-full mt-[42px]',
                {},
                [className],
            )}
        >
            <div className={classNames(cls.headerMenuItem, {}, ['relative z-80 w-full'])}>
                <div className="flex justify-between gap-4 lg:gap-8 signin-buttons">
                    {!userData && <span />}
                    <div className="flex flex-col items-center">
                        {
                            userData
                                ? (
                                    <div
                                        className="rounded-xl cursor-pointer select-none flex gap-2"
                                    >
                                        {
                                            userIsLoading
                                                ? <Skeleton width="100%" height="100%" border="6px" />
                                                : (
                                                    <AppLink
                                                        to={getRouteMain()}
                                                        className="text-white rounded-xl flex items-center justify-center"
                                                    >
                                                        <div
                                                            className="w-9 h-9 rounded-md bg-center
                                                            bg-cover bg-content-secondary"
                                                            style={{
                                                                backgroundImage:
                                                                    `url('${JSON.parse(userData.twitter_data).avatar}')`
                                                                ,
                                                            }}
                                                        />
                                                        <div className={classNames(cls.profileName, {}, ['px-2.5'])}>
                                                            <div className={cls.name}>{userData.name}</div>
                                                            <div className="text-label-md text-icon-secondary">7 level</div>
                                                        </div>
                                                    </AppLink>
                                                )
                                        }
                                    </div>
                                )
                                : (
                                    <div className="relative">
                                        <div
                                            className={classNames(
                                                'rounded-lg sm:rounded-xl cursor-pointer select-none flex relative',
                                                { 'glowing-blue dashed-border': !isMobile },
                                                [''],
                                            )}
                                        >
                                            <span
                                                className={classNames(
                                                    'block',
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
                                                            ? (<Skeleton width={94} height={48} border="8px" />)
                                                            : (
                                                                <Button
                                                                    theme="primary"
                                                                    className="relative z-80 rounded-lg"
                                                                    size="xl"
                                                                    onClick={loginHandler}
                                                                >
                                                                    Login
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
                    {userData && (
                        <div className="flex flex-col items-center">
                            <div
                                className="rounded-xl select-none flex gap-2 h-full"
                            >
                                <div
                                    className={classNames(
                                        cls.money,
                                        {},
                                        ['text-white rounded-xl flex items-center justify-center'],
                                    )}
                                >
                                    {
                                        userIsLoading
                                            ? <Skeleton width="100%" height="100%" border="6px" />
                                            : formatNumberWithSeparators(userBalance, false)
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});
