import React, {
    memo, useCallback, useEffect, useMemo, useState,
} from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getUserBalance, getUserData, getUserError, getUserIsLoading,
} from 'entities/User';
import { ToastCustom } from 'shared/ui/ToastCustom/ToastCustom';
import { appActions } from 'entities/App';
import { Helmet } from 'react-helmet';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button } from 'shared/ui/Button/Button';
import { PowerTweets, powerTweetsReducer } from 'entities/PowerTweets';
import { Carousel } from 'shared/ui/Carousel/Carousel';
import { classNames } from 'shared/lib/classNames/classNames';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect, useSignMessage } from 'wagmi';
import {
    fetchVerifyWalletSignMessage,
    getWalletData,
    getWalletError,
    getWalletIsLoading,
    getWalletVerifyError,
    getWalletVerifyIsLoading,
} from 'entities/Wallet';
import { Input } from 'shared/ui/Input/Input';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { verifyWallet } from 'entities/Wallet/model/services/verifyWallet/verifyWallet';
import { WalletData } from 'entities/Wallet/model/types/wallet';
import { formatNumberWithSeparators } from 'shared/lib/helpers/formatNumberWithSeparators/formatNumberWithSeparators';
import { ReflinkCopy } from 'widgets/ReflinkCopy';
import cls from './Account.module.scss';

const reducers: ReducersList = {
    powerTweets: powerTweetsReducer,
};

export const Account = memo(() => {
    const dispatch = useAppDispatch();
    const { open } = useWeb3Modal();
    const { disconnect } = useDisconnect();
    const {
        address,
        isConnecting,
        isConnected,
    } = useAccount();
    const {
        data: signMessageData, error: signMessageError, isPending: signMessageIsLoading, signMessage,
    } = useSignMessage();
    const [connectedTwitter, setConnectedTwitter] = useState<boolean>(false);
    const [connectedDiscord, setConnectedDiscord] = useState<boolean>(false);
    const [initConnectWallet, setInitConnectWallet] = useState(false);
    const [isShowLogout, setIsShowLogout] = useState(false);

    const walletMessageData = useSelector(getWalletData);
    const walletMessageIsLoading = useSelector(getWalletIsLoading);
    const walletMessageError = useSelector(getWalletError);

    const verifyWalletIsLoading = useSelector(getWalletVerifyIsLoading);
    const verifyWalletError = useSelector(getWalletVerifyError);

    const userData = useSelector(getUserData)?.data;
    const userBalance = useSelector(getUserBalance);
    const userIsLoading = useSelector(getUserIsLoading);
    const userError = useSelector(getUserError);
    const telegramConnected = !!(userData?.telegram_id && userData.telegram_data);

    const [subscribedDiscord, setSubscribedDiscord] = useState<boolean>(false);
    const tasks = useMemo(() => [
        {
            id: 1,
            name: 'Task 1',
            reward: '150 points',
            description: 'Please make sure to complete the task and claim your rewards. Thank you!',
            canGetReward: true,
        },
        {
            id: 2,
            name: 'Task 2',
            reward: '200 points',
            description: 'Please make sure to complete the task and claim your rewards. Thank you!',
            canGetReward: false,
        },
        {
            id: 3,
            name: 'Task 3',
            reward: '300 points',
            description: 'Please make sure to complete the task and claim your rewards. Thank you!',
            canGetReward: false,
        },
        {
            id: 4,
            name: 'Task 4',
            reward: '400 points',
            description: 'Please make sure to complete the task and claim your rewards. Thank you!',
            canGetReward: true,
        },
        {
            id: 5,
            name: 'Task 5',
            reward: '500 points',
            description: 'Please make sure to complete the task and claim your rewards. Thank you!',
            canGetReward: true,
        },
    ], []);

    const getRewardHandler = (canGet: boolean) => {
        if (canGet) {
            ToastCustom.success('You have been awarded 150 points');
            return;
        }

        ToastCustom.error('The check showed that the task has not been completed yet, '
            + 'we cannot give you points yet! Please complete the task and try again.');
    };

    const onConnectWallet = useCallback(() => {
        open();
        setInitConnectWallet(true);
    }, [open]);

    const onSubscribeTelegram = useCallback(() => {
        window.open(process.env.REACT_APP_TELEGRAM_LINK);
    }, []);

    const onConnectTwitter = useCallback(() => {
        setConnectedTwitter(true);
    }, []);

    const onCheckSubscribedTwitter = useCallback(() => {
        ToastCustom.error('The check showed that the task has not been completed yet, we cannot give you '
            + 'points yet! Please complete the task and try again.');
    }, []);

    const onConnectDiscord = useCallback(() => {
        setConnectedDiscord(true);
    }, []);

    const onSubscribeDiscord = useCallback(() => {
        ToastCustom.success('You have been awarded 150 points');
        setSubscribedDiscord(true);
    }, []);

    const disconnectWallet = useCallback(() => {
        disconnect();
        ToastCustom.error('An error occurred while trying to connect the wallet, please try again!');
    }, [disconnect]);

    const showLogout = useCallback(() => {
        setIsShowLogout(true);
    }, []);

    const logoutHandler = useCallback(() => {
        // window.open('https://rain.bless.bet/auth/logout', '_self');
        console.log('logout success');
    }, []);

    useEffect(() => {
        dispatch(appActions.setPlayingMode('null'));
    }, [dispatch]);

    useEffect(() => {
        const button = document.createElement('script');
        button.async = true;
        button.src = 'https://telegram.org/js/telegram-widget.js?22';
        button.setAttribute('data-telegram-login', 'blessrain_bot');
        button.setAttribute('data-size', 'large');
        button.setAttribute('data-userpic', 'false');
        button.setAttribute('data-radius', '8');
        button.setAttribute('data-auth-url', 'https://rain.bless.bet/auth/telegram/callback');
        button.setAttribute('data-request-access', 'write');

        document?.querySelector('#telegram-widget-container')?.appendChild(button);
    }, []);

    useEffect(() => {
        if (!isConnecting && isConnected && initConnectWallet) {
            dispatch(fetchVerifyWalletSignMessage(address!))
                .then((res) => {
                    if (res.meta.requestStatus === 'fulfilled') {
                        signMessage({ message: (res.payload as WalletData).data.message });
                    }
                });
        }
    }, [address, dispatch, initConnectWallet, isConnected, isConnecting, signMessage]);

    useEffect(() => {
        if (signMessageData && address) {
            dispatch(verifyWallet([address || '', signMessageData]))
                .then((res) => {
                    if (res.meta.requestStatus === 'rejected') {
                        disconnectWallet();
                    }
                });
        }
    }, [address, disconnectWallet, dispatch, signMessageData]);

    useEffect(() => {
        if (walletMessageError || signMessageError || verifyWalletError) {
            disconnectWallet();
        }
    }, [disconnect, disconnectWallet, signMessageError, verifyWalletError, walletMessageError]);

    useEffect(() => {
        if (!userIsLoading && userData) {
            if (!userData.wallet) {
                disconnect();
            }
        }
    }, [disconnect, userData, userIsLoading]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Helmet>
                <title>Bless Rain - Account</title>
            </Helmet>
            <div className={classNames(
                'flex flex-col relative h-full -mt-[32px] gap-3 mb-[130px]',
                {},
                [],
            )}
            >
                <div className={cls.accountInfo}>
                    <div
                        className="w-[70px] h-[70px] bg-center
                                                            bg-cover bg-content-secondary rounded-2xl"
                        style={{
                            backgroundImage:
                                `url('${JSON.parse(userData?.twitter_data || '').avatar}')`
                            ,
                        }}
                    />
                    {isShowLogout
                        ? (
                            <Button
                                theme="primary"
                                className="relative z-80 rounded-lg"
                                size="xl"
                                onClick={logoutHandler}
                            >
                                Log out
                            </Button>
                        )
                        : (
                            <Button
                                theme="none"
                                className={cls.openLogoutBtn}
                                onClick={showLogout}
                            >
                                <Icon className={cls.openSideIcon} name="open-side-menu" />
                            </Button>
                        )}
                </div>
                <div className={classNames(cls.helloTitle, {}, [])}>
                    Hello,
                    <br />
                    {userData?.name}
                    !
                </div>

                <div className="flex flex-col items-stretch gap-3">
                    <div
                        className="w-full !rounded-xl"
                    >
                        <div className={
                            classNames(
                                cls.pointsWrapper,
                                {},
                                ['flex items-center justify-center gap-2.5'],
                            )
                        }
                        >
                            <div className={classNames(cls.userText, {}, ['text-label-md'])}>
                                Total points
                            </div>
                            <div className={classNames(cls.points, {}, ['title-lg flex items-center gap-2'])}>
                                <Icon name="coin" />
                                {formatNumberWithSeparators(userBalance, false)}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                        <div className={cls.statsItem}>
                            <Icon name="like" className={cls.statsIcon} />
                            <div>
                                <div className="title-lg">10k</div>
                                <div className="caption-sm text-icon-secondary">from likes</div>
                            </div>
                        </div>
                        <div className={cls.statsItem}>
                            <Icon name="comment" className={cls.statsIcon} />
                            <div>
                                <div className="title-lg">10k</div>
                                <div className="caption-sm text-icon-secondary">from comments</div>
                            </div>
                        </div>
                        <div className={cls.statsItem}>
                            <Icon name="retweet" className={cls.statsIcon} />
                            <div>
                                <div className="title-lg">10k</div>
                                <div className="caption-sm text-icon-secondary">from retweets</div>
                            </div>
                        </div>
                        <div className={cls.statsItem}>
                            <Icon name="users" className={cls.statsIcon} />
                            <div>
                                <div className="title-lg">10k</div>
                                <div className="caption-sm text-icon-secondary">from referrals</div>
                            </div>
                        </div>
                    </div>
                    <ReflinkCopy className="mt-1" />
                    {/* <PowerTweets className="mt-1" /> */}
                </div>
            </div>
        </DynamicModuleLoader>
    );
});
