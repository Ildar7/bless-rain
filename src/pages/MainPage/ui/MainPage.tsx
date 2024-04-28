import React, { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './MainPage.scss';
import { Button } from 'shared/ui/Button/Button';
import MainImage from 'shared/assets/images/main-image.png';
import { appActions } from 'entities/App';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/User';
import { useNavigate } from 'react-router-dom';
import { getRouteAccount } from 'shared/const/router';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userData = useSelector(getUserData)?.data;

    useEffect(() => {
        dispatch(appActions.setPlayingMode('null'));
    }, [dispatch]);

    const loginHandler = useCallback(() => {
        window.open('https://rain.bless.bet/auth/twitter', '_self');
    }, []);

    const logoutHandler = useCallback(() => {
        window.open('https://rain.bless.bet/auth/logout', '_self');
    }, []);

    const routeToAccount = useCallback(() => {
        navigate(getRouteAccount());
    }, [navigate]);

    return (
        <>
            <Helmet>
                <title>Bless Rain</title>
            </Helmet>
            <div className={classNames(
                'flex flex-col md:flex-row items-center justify-between relative h-full mt-[-55px] md:mt-0',
                {},
                [],
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
                        onClick={userData ? routeToAccount : loginHandler}
                    >
                        Get started
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
        </>
    );
};

export default MainPage;
