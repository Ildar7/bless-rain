import React, {
    memo, useCallback, useEffect, useMemo, useState,
} from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserData, getUserError, getUserIsLoading } from 'entities/User';
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
import { use } from 'i18next';
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

    const walletMessageData = useSelector(getWalletData);
    const walletMessageIsLoading = useSelector(getWalletIsLoading);
    const walletMessageError = useSelector(getWalletError);

    const verifyWalletIsLoading = useSelector(getWalletVerifyIsLoading);
    const verifyWalletError = useSelector(getWalletVerifyError);

    const userData = useSelector(getUserData)?.data;
    const userIsLoading = useSelector(getUserIsLoading);
    const userError = useSelector(getUserError);
    const telegramConnected = !!(userData?.telegram_id && userData.telegram_data);
    const refLink = useMemo(() => `https://${window.location.host}/ref/${userData?.referral_code}`, [userData?.referral_code]);

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

    const onCopyHandler = useCallback(async () => {
        await navigator.clipboard.writeText(refLink);
        ToastCustom.success('Your referral link has been copied to the clipboard');
    }, [refLink]);

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

    useEffect(() => {
        dispatch(appActions.setPlayingMode('null'));
    }, [dispatch]);

    useEffect(() => {
        const button = document.createElement('script');
        button.async = true;
        button.src = 'https://telegram.org/js/telegram-widget.js?22';
        button.setAttribute('data-telegram-login', 'blessrain_bot,en');
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
                'flex flex-col relative h-full -mt-[50px] md:mt-0 gap-3',
                {},
                [],
            )}
            >
                <div className="title-lg">
                    Hello,
                    {' '}
                    {userData?.name}
                    !
                </div>

                <div className="flex flex-col md:flex-row items-stretch gap-3">
                    <div
                        className="surface p-2 w-full md:w-[218px] !rounded-xl"
                    >
                        <div className={
                            classNames(
                                'inner p-2 flex gap-2 items-center dashed-border !rounded-xl',
                                {},
                                [],
                            )
                        }
                        >
                            <span className="text-label-md dashed-border-top flex-1">
                                <span className="dashed-border-bottom flex flex-col items-center pt-2 pb-3 flex-1">
                                    <div className={classNames(cls.userText, {}, ['caption-lg uppercase'])}>
                                        Total
                                    </div>
                                    <div
                                        className="gap-[15px] sm:gap-[30px] flex items-stretch
                                    flex-col sm:flex-row mt-4 md:mt-2"
                                    >
                                        <div className="user-dashboard-item">
                                            <div>Points</div>
                                            <div
                                                className="user-dashboard-item-text flex items-center gap-3"
                                            >
                                                50,000
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div
                        className="surface p-2 w-full !rounded-xl flex-1"
                    >
                        <div className={
                            classNames(
                                'inner py-2 px-5 flex gap-2 items-center dashed-border !rounded-xl',
                                {},
                                [],
                            )
                        }
                        >
                            <span className="text-label-md dashed-border-top flex-1">
                                <span className="dashed-border-bottom flex flex-col items-center pt-2 pb-3 flex-1">
                                    <div className={classNames(cls.userText, {}, ['caption-lg uppercase'])}>
                                        User dashboard
                                    </div>
                                    <div
                                        className="gap-[15px] sm:gap-[30px] flex items-stretch
                                    flex-col sm:flex-row mt-4 md:mt-2 w-full"
                                    >
                                        <div className="user-dashboard-item">
                                            <div>Points</div>
                                            <div
                                                className="user-dashboard-item-text flex items-center gap-3"
                                            >
                                                20,000
                                            </div>
                                        </div>
                                        <div className="user-dashboard-item">
                                            <Icon className="duration-100 text-2xl" name="edit" glow="pink" />
                                            <div
                                                className="user-dashboard-item-text flex items-center gap-3"
                                            >
                                                12
                                            </div>
                                        </div>
                                        <div className="user-dashboard-item">
                                            <Icon className="duration-100 text-2xl" name="retweet" glow="pink" />
                                            <div
                                                className="user-dashboard-item-text flex items-center gap-3"
                                            >
                                                15
                                            </div>
                                        </div>
                                        <div className="user-dashboard-item">
                                            <Icon className="duration-100 text-2xl" name="comment" glow="pink" />
                                            <div
                                                className="user-dashboard-item-text flex items-center gap-3"
                                            >
                                                45
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div
                        className="surface p-2 flex-1 !rounded-xl flex-1"
                    >
                        <div className={
                            classNames(
                                'inner py-2 px-5 flex gap-2 items-center dashed-border !rounded-xl',
                                {},
                                [],
                            )
                        }
                        >
                            <span className="text-label-md dashed-border-top flex-1">
                                <span className="dashed-border-bottom flex flex-col items-center pt-2 pb-3 flex-1">
                                    <div
                                        className={classNames(cls.userText, {}, ['caption-lg uppercase'])}
                                    >
                                        Referral dashboard
                                    </div>
                                    <div
                                        className="user-dashboard-items flex items-stretch
                                    flex-col sm:flex-row mt-4 md:mt-2 w-full"
                                    >
                                        <div className="user-dashboard-item">
                                            <div>Points</div>
                                            <div className="user-dashboard-item-text flex items-center gap-3">
                                                30,000
                                            </div>
                                        </div>
                                        <div className="user-dashboard-item">
                                            <div>Referrals</div>
                                            <div className="user-dashboard-item-text flex items-center gap-3">
                                                56
                                            </div>
                                        </div>
                                        <div className="user-dashboard-item user-dashboard-item-reflink">
                                            <div>
                                                Reflink
                                            </div>
                                            <div className="user-dashboard-item-text flex items-center gap-3">
                                                <div className="reflink-text">{refLink}</div>
                                                <Button
                                                    className="copy-btn caption-sm rounded-lg
                                                min-w-[36px] h-9 p-0 relative flex justify-center
                                                items-center btn square tertiary text-label-md"
                                                    onClick={onCopyHandler}
                                                >
                                                    <div className="flex">
                                                        <Icon name="copy" className="duration-100 text-2xl" />
                                                    </div>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-stretch gap-3">
                    <div
                        className="surface p-2 flex-1 !rounded-xl"
                    >
                        <div className={
                            classNames(
                                'inner py-2 px-6 flex gap-2 items-center dashed-border !rounded-xl h-full',
                                {},
                                [],
                            )
                        }
                        >
                            <span className="text-label-md dashed-border-top flex-1 h-full">
                                <span className="dashed-border-bottom flex flex-col
                                items-center pt-2 pb-3 flex-1 h-full"
                                >
                                    <div className={classNames(cls.userText, {}, ['caption-lg uppercase'])}>
                                        Your wallet
                                    </div>
                                    <div
                                        className="gap-[12px] flex flex-1 items-stretch
                                    flex-col justify-between mt-4 md:mt-2 w-full"
                                    >
                                        {
                                            signMessageIsLoading || verifyWalletIsLoading || walletMessageIsLoading
                                                ? <Skeleton width="100%" height={250} border="10px" />
                                                : (
                                                    <>
                                                        <div className="user-dashboard-item">
                                                            {!userData?.wallet && (
                                                                <div>Connect your wallet to receive a reward</div>
                                                            )}
                                                            {userData?.wallet && (
                                                                <div>Your wallet to receive a reward</div>
                                                            )}
                                                        </div>
                                                        <div className="flex flex-col gap-[6px]">
                                                            {!userData?.wallet && (
                                                                <Button
                                                                    size="xl"
                                                                    className="rounded-lg text-label-md flex-1"
                                                                    onClick={onConnectWallet}
                                                                >
                                                                    Connect your wallet
                                                                </Button>
                                                            )}
                                                            {userData?.wallet && (
                                                                <Input
                                                                    className={classNames(cls.inputAddress, {}, ['!mb-0'])}
                                                                    flat
                                                                    value={address}
                                                                    readOnly
                                                                />
                                                            )}
                                                        </div>
                                                    </>
                                                )
                                        }
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div
                        className="surface p-2 flex-1 !rounded-xl"
                    >
                        <div className={
                            classNames(
                                'inner py-2 px-6 flex gap-2 items-center dashed-border !rounded-xl h-full',
                                {},
                                [],
                            )
                        }
                        >
                            <span className="text-label-md dashed-border-top flex-1 h-full">
                                <span className="dashed-border-bottom flex flex-col
                                items-center pt-2 pb-3 flex-1 h-full"
                                >
                                    <div className={classNames(
                                        cls.userText,
                                        {},
                                        ['caption-lg uppercase flex items-center gap-1'],
                                    )}
                                    >
                                        <Icon name="telegram" className="duration-100 text-2xl" />
                                        <span>TElegram</span>
                                    </div>
                                    <div
                                        className="gap-[12px] flex flex-1 items-stretch
                                    flex-col justify-between mt-4 md:mt-2 w-full"
                                    >
                                        <div className="user-dashboard-item">
                                            <div>Subscribe to our telegram channel to receive 150 points</div>
                                            {/* {subscribedTelegram && ( */}
                                            {/*    <div> */}
                                            {/*        You have successfully subscribed to our */}
                                            {/*        channel and received 150 points. */}
                                            {/*    </div> */}
                                            {/* )} */}
                                        </div>
                                        <div className="flex flex-col gap-[6px]">
                                            {!telegramConnected && (
                                                <div id="telegram-widget-container" />
                                            )}
                                            {telegramConnected && (
                                                <>
                                                    <Button
                                                        size="xl"
                                                        className="rounded-lg text-label-md flex-1"
                                                        onClick={onSubscribeTelegram}
                                                    >
                                                        Subscribe
                                                    </Button>
                                                    <Button
                                                        size="xl"
                                                        className="rounded-lg text-label-md flex-1"
                                                        theme="outlined"
                                                    >
                                                        Get reward
                                                    </Button>
                                                </>
                                            )}
                                            {/* {connectedTelegram && subscribedTelegram && ( */}
                                            {/*    <Button */}
                                            {/*        size="xl" */}
                                            {/*        className="rounded-lg text-label-md flex-1" */}
                                            {/*        contentClassName="items-center gap-[5px]" */}
                                            {/*        theme="secondary" */}
                                            {/*    > */}
                                            {/*        <Icon name="check-circle" className="duration-100 text-2xl" /> */}
                                            {/*        <span>Done</span> */}
                                            {/*    </Button> */}
                                            {/* )} */}
                                        </div>
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div
                        className="surface p-2 flex-1 !rounded-xl"
                    >
                        <div className={
                            classNames(
                                'inner py-2 px-6 flex gap-2 items-center dashed-border !rounded-xl h-full',
                                {},
                                [],
                            )
                        }
                        >
                            <span className="text-label-md dashed-border-top flex-1 h-full">
                                <span className="dashed-border-bottom flex flex-col
                                items-center pt-2 pb-3 flex-1 h-full"
                                >
                                    <div className={classNames(
                                        cls.userText,
                                        {},
                                        ['caption-lg uppercase flex items-center gap-1'],
                                    )}
                                    >
                                        <Icon name="social-x" className="duration-100 text-2xl" />
                                        <span>Follow us</span>
                                    </div>
                                    <div
                                        className="gap-[12px] flex flex-1 items-stretch
                                    flex-col justify-between mt-4 md:mt-2 w-full"
                                    >
                                        <div className="user-dashboard-item">
                                            <div>Follow us to receive 150 points</div>
                                        </div>
                                        <div className="flex flex-col gap-[6px]">
                                            {!connectedTwitter && (
                                                <Button
                                                    size="xl"
                                                    className="rounded-lg text-label-md flex-1"
                                                    onClick={onConnectTwitter}
                                                >
                                                    Follow
                                                </Button>
                                            )}
                                            {connectedTwitter && (
                                                <>
                                                    <Button
                                                        size="xl"
                                                        className="rounded-lg text-label-md flex-1"
                                                    >
                                                        Follow
                                                    </Button>
                                                    <Button
                                                        size="xl"
                                                        className="rounded-lg text-label-md flex-1"
                                                        theme="outlined"
                                                        onClick={onCheckSubscribedTwitter}
                                                    >
                                                        Get reward
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div
                        className="surface p-2 flex-1 !rounded-xl hidden"
                    >
                        <div className={
                            classNames(
                                'inner py-2 px-6 flex gap-2 items-center dashed-border !rounded-xl h-full',
                                {},
                                [],
                            )
                        }
                        >
                            <span className="text-label-md dashed-border-top flex-1 h-full">
                                <span className="dashed-border-bottom flex flex-col
                                items-center pt-2 pb-3 flex-1 h-full"
                                >
                                    <div className={classNames(
                                        cls.userText,
                                        {},
                                        ['caption-lg uppercase flex items-center gap-1'],
                                    )}
                                    >
                                        <Icon name="discord" className="duration-100 text-2xl" />
                                        <span>DIscord</span>
                                    </div>
                                    <div
                                        className="gap-[12px] flex flex-1 items-stretch
                                    flex-col justify-between mt-4 md:mt-2 w-full"
                                    >
                                        <div className="user-dashboard-item">
                                            {!connectedDiscord && !subscribedDiscord && (
                                                <div>Subscribe to our Discord channel to receive 150 points</div>
                                            )}
                                            {connectedDiscord && !subscribedDiscord && (
                                                <div>Subscribe to our Discord to receive 150 points</div>
                                            )}
                                            {connectedDiscord && subscribedDiscord && (
                                                <div>
                                                    You have successfully subscribed
                                                    to our Discord and received 150 points.
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-[6px]">
                                            {!connectedDiscord && !subscribedDiscord && (
                                                <Button
                                                    size="xl"
                                                    className="rounded-lg text-label-md flex-1"
                                                    onClick={onConnectDiscord}
                                                >
                                                    Connect Discord
                                                </Button>
                                            )}
                                            {connectedDiscord && !subscribedDiscord && (
                                                <>
                                                    <Button
                                                        size="xl"
                                                        className="rounded-lg text-label-md flex-1"
                                                        onClick={onSubscribeDiscord}
                                                    >
                                                        Subscribe
                                                    </Button>
                                                    <Button
                                                        size="xl"
                                                        className="rounded-lg text-label-md flex-1"
                                                        theme="outlined"
                                                    >
                                                        Get reward
                                                    </Button>
                                                </>
                                            )}
                                            {connectedDiscord && subscribedDiscord && (
                                                <Button
                                                    size="xl"
                                                    className="rounded-lg text-label-md flex-1"
                                                    contentClassName="items-center gap-[5px]"
                                                    theme="secondary"
                                                >
                                                    <Icon name="check-circle" className="duration-100 text-2xl" />
                                                    <span>Done</span>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <PowerTweets />

                <Carousel className="relative !hidden">
                    <div className={classNames(cls.userText, {}, ['caption-lg uppercase text-center mb-2.5'])}>
                        Tasks
                    </div>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-x-9
                    md:gap-x-16 gap-y-8 px-6 sm:px-9 w-full"
                    >
                        {tasks.map((task) => (
                            <div
                                className="flex flex-col gap-3.5 taskItem flex-1 sm:flex-none"
                                key={task.id}
                            >
                                <div className={classNames(cls.greenBg, {}, ['rounded-xl'])}>
                                    <div className="flex justify-between">
                                        <div className="text-label-sm">{task.name}</div>
                                        <div className="text-label-sm uppercase">{task.reward}</div>
                                    </div>
                                    <div className="descrText caption-sm max-w-[186px] sm:max-w-none">
                                        {task.description}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <Button
                                        theme="primary"
                                        className="rounded-lg"
                                    >
                                        Execute
                                    </Button>
                                    <Button
                                        theme="reward"
                                        className="rounded-lg"
                                        onClick={() => {
                                            getRewardHandler(task.canGetReward);
                                        }}
                                    >
                                        Get reward
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Carousel>
            </div>
        </DynamicModuleLoader>
    );
});
