import React, { memo, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'shared/ui/Button/Button';
import MainImage from 'shared/assets/images/main-image.png';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Link } from 'react-scroll';
import { scrollToAnchor } from 'shared/lib/helpers/scrollToAnchor/scrollToAnchor';
import { useScrollEffect } from 'shared/lib/hooks/useScrollEffect/useScrollEffect';
import cls from './Main.module.scss';

export const Main = memo(() => {
    const userData = useSelector(getUserData)?.data;
    const featuresRef = useRef<HTMLDivElement | null>(null);

    const loginHandler = useCallback(() => {
        window.open('https://rain.bless.bet/auth/twitter', '_self');
    }, []);

    const logoutHandler = useCallback(() => {
        window.open('https://rain.bless.bet/auth/logout', '_self');
    }, []);

    const scrollToAnchor = (anchor: string) => {
        const targetElement = document.getElementById(anchor);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            window.history.pushState(null, '', `#${anchor}`);
        }
    };

    useScrollEffect(featuresRef, '#features', 300);

    return (
        <>
            <Helmet>
                <title>Bless Rain</title>
            </Helmet>
            <div className={classNames(
                'mt-[-55px] md:mt-0',
                {},
                [],
            )}
            >
                <div
                    className={classNames(
                        cls.firstScreen,
                        {},
                        ['flex flex-col md:flex-row items-center justify-between relative'],
                    )}
                >
                    <div className="order-2 mt-[24px] md:mt-0 md:order-1 w-full md:max-w-[493px]">
                        <div className="h1-max">
                            Bless Rain
                        </div>
                        <div className="h2-max mt-[2px] md:mt-[10px]">
                            Be active, earn points, get tokens!
                        </div>
                        <Button
                            theme="primary"
                            className="rounded-lg mt-[23px] md:mt-[38px] w-full md:w-[252px]"
                            size="xl"
                            onClick={() => { scrollToAnchor('features'); }}
                        >
                            Next
                        </Button>
                        <div className="relative sm:hidden mt-[16px]">
                            <div
                                className="surface
                        p-1 rounded-xl cursor-pointer select-none flex glowing-blue dashed-border relative"
                            >
                                <span className="inner p-1 block dashed-border-top w-full" style={{ borderRadius: 8 }}>
                                    <span className="dashed-border-bottom">
                                        <Button
                                            theme="primary"
                                            className="rounded-lg w-full"
                                            size="md"
                                            onClick={userData ? logoutHandler : loginHandler}
                                        >
                                            {userData ? 'Logout' : 'Login with Х'}
                                        </Button>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 girls__block">
                        <img src={MainImage} alt="anime-girls" className="w-full md:w-auto h-full object-cover" />
                    </div>
                </div>
                <div ref={featuresRef} id="features" className="mt-[380px] sm:mt-[320px] md:mt-[200px]">
                    <div className="grid gap-5 grid-cols-1 xs:grid-cols-2 sm:grid-cols-4">
                        <div className="surface">
                            <div className="inner h-full flex flex-col items-center gap-4 p-4">
                                <Icon
                                    className={cls.icon}
                                    name="check-list"
                                    glow="pink"
                                />
                                <span className="border-t pt-4 text-label-lg-bold w-full text-center">
                                    Complete tasks and get points for each one!
                                </span>
                            </div>
                        </div>
                        <div className="surface">
                            <div className="inner h-full flex flex-col items-center gap-4 p-4">
                                <Icon
                                    className={cls.icon}
                                    name="percents"
                                    glow="pink"
                                />
                                <span className="border-t pt-4 text-label-lg-bold w-full text-center">
                                    Attract friends and get 10% points from each of their rewards!
                                </span>
                            </div>
                        </div>
                        <div className="surface">
                            <div className="inner h-full flex flex-col items-center gap-4 p-4">
                                <Icon
                                    className={cls.icon}
                                    name="gamepad"
                                    glow="pink"
                                />
                                <span className="border-t pt-4 text-label-lg-bold w-full text-center">
                                    Play original simple and exciting games and multiply the balance of your points!
                                </span>
                            </div>
                        </div>
                        <div className="surface">
                            <div className="inner h-full flex flex-col items-center gap-4 p-4">
                                <Icon
                                    className={cls.icon}
                                    name="coins"
                                    glow="pink"
                                />
                                <span className="border-t pt-4 text-label-lg-bold w-full text-center">
                                    Participate in the airdrop and get tokens in proportion to the points earned!
                                </span>
                            </div>
                        </div>
                    </div>
                    <Button
                        theme="primary"
                        className="rounded-lg mt-[23px] md:mt-[38px] w-full md:w-[252px]"
                        size="xl"
                        onClick={loginHandler}
                    >
                        Get started
                    </Button>
                </div>
            </div>
        </>
    );
});
