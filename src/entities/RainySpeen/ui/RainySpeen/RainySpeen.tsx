import React, {
    memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import RainySpeenGame from 'shared/assets/icons/png/speen-bg.png';
import RainySpeenGamePc from 'shared/assets/icons/png/speen-bg-pc.png';
import PlayBtnImg from 'shared/assets/icons/png/play-btn.png';
import PlayBtnPcImg from 'shared/assets/icons/png/play-btn-pc.png';
import PlayBtnPressedImg from 'shared/assets/icons/png/play-btn-pressed.png';
import PlayBtnPressedPcImg from 'shared/assets/icons/png/play-btn-pressed-pc.png';
import BorderWin from 'shared/assets/icons/png/win-border.svg';
import BorderWinBigHeight from 'shared/assets/icons/png/win-border-big-height.svg';
import { useMobile } from 'shared/lib/hooks/useMobile/useMobile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import RollingSlotsAudio from 'shared/assets/songs/rainySpeen/rolling-slots.mp3';
import PressBtnAudio from 'shared/assets/songs/rainySpeen/button.mp3';
import BorderAudio from 'shared/assets/songs/rainySpeen/border.mp3';
import { RainySpeenHeader } from '../RainySpeenHeader/RainySpeenHeader';
import cls from './RainySpeen.module.scss';
import './RainySpeen.scss';
import { rainySpeenActions } from '../../model/slice/rainySpeenSlice';
import {
    getRainySpeenBtnPressed,
    getRainySpeenGameFinished,
    getRainySpeenGameStarted,
    getRainySpeenNewGameInited,
} from '../../model/selectors/getRainySpeen/getRainySpeen';
import { RainySpeenWinModal } from '../RainySpeenWinModal/RainySpeenWinModal';
import { getUserBalance, userActions } from 'entities/User';

interface RainySpeenProps {
    className?: string;
}

export const RainySpeen = memo((props: RainySpeenProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const gameScreenRef = useRef<HTMLImageElement | null>(null);
    const [gameScreenWidth, setGameScreenWidth] = useState(0);
    const [gameScreenHeight, setGameScreenHeight] = useState(0);
    const { width, height, isMobile } = useMobile();
    const [gameNum, setGameNum] = useState(1);
    const btnPressed = useSelector(getRainySpeenBtnPressed);
    const gameStarted = useSelector(getRainySpeenGameStarted);
    const gameFinished = useSelector(getRainySpeenGameFinished);
    const newGameInited = useSelector(getRainySpeenNewGameInited);
    const balance = useSelector(getUserBalance);
    const [visibleWinModal, setVisibleWinModal] = useState(false);
    const [canResizeScreen, setCanResizeScreen] = useState(false);

    const pressBtnAudioRef = useRef<HTMLAudioElement | null>(null);
    const rollingSlotsAudioRef = useRef<HTMLAudioElement | null>(null);
    const borderAudioRef = useRef<HTMLAudioElement | null>(null);

    const [firstRollPosition, setFirstRollPosition] = useState({
        start: 0,
        end: 0,
    });
    const [secondRollPosition, setSecondRollPosition] = useState({
        start: 0,
        end: 0,
    });
    const [thirdRollPosition, setThirdRollPosition] = useState({
        start: 0,
        end: 0,
    });

    const onCloseWinModal = useCallback(() => {
        setVisibleWinModal(false);
    }, []);

    const onStartHandler = useCallback(() => {
        const newBalance = (balance || 0) - 500;

        dispatch(rainySpeenActions.changeNewGameInited(true));
        dispatch(rainySpeenActions.changeGameStarted(false));
        dispatch(rainySpeenActions.changeGameFinished(false));
        dispatch(rainySpeenActions.changeCanUpdateBalance(false));
        dispatch(userActions.changeBalance(newBalance));
        setCanResizeScreen(false);

        pressBtnAudioRef.current?.play();

        setTimeout(() => {
            rollingSlotsAudioRef.current?.play();
        }, 200);

        setTimeout(() => {
            dispatch(rainySpeenActions.changeBtnPressed(true));
            dispatch(rainySpeenActions.changeGameStarted(true));

            setTimeout(() => {
                setCanResizeScreen(true);
            }, 2000);

            setFirstRollPosition({
                ...firstRollPosition,
                end: 98.8 * Math.floor(Math.random() * (29 - 24) + 24) * (gameNum),
            });
            setSecondRollPosition({
                ...secondRollPosition,
                end: 98.8 * Math.floor(Math.random() * (29 - 24) + 24) * (gameNum),
            });
            setThirdRollPosition({
                ...thirdRollPosition,
                end: 98.8 * Math.floor(Math.random() * (29 - 24) + 24) * (gameNum),
            });

            setTimeout(() => {
                dispatch(rainySpeenActions.changeBtnPressed(false));
            }, 200);

            setTimeout(() => {
                dispatch(rainySpeenActions.changeGameFinished(true));
                borderAudioRef.current?.play();
            }, 3000);

            setTimeout(() => {
                setVisibleWinModal(true);
                setGameNum((prevState) => prevState + 1);
                setFirstRollPosition((prevState) => ({
                    ...prevState,
                    start: prevState.end,
                }));
                setSecondRollPosition((prevState) => ({
                    ...prevState,
                    start: prevState.end,
                }));
                setThirdRollPosition((prevState) => ({
                    ...prevState,
                    start: prevState.end,
                }));

                setTimeout(() => {
                    dispatch(rainySpeenActions.changeNewGameInited(false));
                }, 500);
            }, 3500);
        }, 0);
    }, [balance, dispatch, firstRollPosition, gameNum, secondRollPosition, thirdRollPosition]);

    useEffect(() => {
        setTimeout(() => {
            if (gameScreenRef.current) {
                setGameScreenWidth(gameScreenRef.current?.offsetWidth);
                setGameScreenHeight(gameScreenRef.current?.offsetHeight);
            }
        }, 200);
    }, [gameScreenRef, width, height]);

    return (
        <div
            className={classNames(cls.RainySpeen, {}, [className])}
        >
            <RainySpeenHeader />
            <div className={cls.game}>
                <img
                    ref={gameScreenRef}
                    src={width >= 768 ? RainySpeenGamePc : RainySpeenGame}
                    alt="game-screen"
                />
                <button
                    type="button"
                    className={cls.startBtn}
                    onClick={onStartHandler}
                    style={{
                        width: `${gameScreenWidth / 2}px`,
                        bottom: `${(width >= 768 ? 0.03 : 0.0808) * gameScreenHeight}px`,
                    }}
                    disabled={newGameInited && !gameFinished}
                >
                    {btnPressed && (
                        <img src={width >= 768 ? PlayBtnPressedPcImg : PlayBtnPressedImg} alt="play-btn-pressed" />
                    )}
                    {!btnPressed && (
                        <img src={width >= 768 ? PlayBtnPcImg : PlayBtnImg} alt="play-btn" />
                    )}
                </button>
            </div>
            <div
                className={classNames(
                    cls.screen,
                    { screenResize: canResizeScreen },
                    [],
                )}
                style={{
                    width: `${(width >= 768 ? 0.59 : 0.6625) * gameScreenWidth}px`,
                    height: `${(width >= 768 ? 0.34 : 0.33041) * gameScreenHeight}px`,
                    top: `calc(50% + ${(width >= 768 ? 0.075 : 0.0299) * gameScreenHeight}px + ${width >= 768 ? '48px' : '0px'})`,
                }}
            >
                {gameFinished && (
                    height > 900
                        ? (
                            <BorderWinBigHeight
                                className={classNames(cls.borderWin, {}, ['absolute'])}
                            />
                        )
                        : (
                            <BorderWin
                                className={classNames(cls.borderWin, {}, ['absolute'])}
                            />
                        )
                )}
                <div
                    className={classNames(
                        cls.items,
                        { firstSlotAnim: gameStarted },
                        [],
                    )}
                    style={{
                        height: `${494 * 9 * gameNum * 2}px`,
                    }}
                />
                <div
                    className={classNames(
                        cls.items,
                        { secondSlotAnim: gameStarted },
                        [],
                    )}
                    style={{
                        height: `${494 * 9 * gameNum * 2}px`,
                    }}
                />
                <div
                    className={classNames(
                        cls.items,
                        { thirdSlotAnim: gameStarted },
                        [],
                    )}
                    style={{
                        height: `${494 * 9 * gameNum * 2}px`,
                    }}
                />

                <style>
                    {`
                        @keyframes resize-screen {
                            0% {
                                height: ${0.33041 * gameScreenHeight}px
                            }
                            
                            100% {
                                height: calc(${(width >= 768 && width <= 1920
            ? 0.17 : 0.1406) * gameScreenHeight}px - ${height > 900 ? 70 : 0}px)
                            }
                        }
                    
                        @keyframes roll-first-slot {
                            0% {
                                transform: translateY(${firstRollPosition.start}px);
                            }
                            
                            5% {
                                transform: translateY(${firstRollPosition.start - 40}px);
                            }
                            
                            80% {
                                transform: translateY(${firstRollPosition.end}px);
                            }
                            
                            85% {
                                transform: translateY(${(firstRollPosition.end) + 5}px);
                            }
                            
                            100% {
                                transform: translateY(${firstRollPosition.end}px);
                            }
                        }
                        
                        @keyframes roll-second-slot {
                            0% {
                                transform: translateY(${secondRollPosition.start}px);
                            }
                            
                            5% {
                                transform: translateY(${secondRollPosition.start}px);
                            }
                            
                            10% {
                                transform: translateY(${secondRollPosition.start - 40}px);
                            }
                            
                            80% {
                                transform: translateY(${secondRollPosition.end}px);
                            }
                            
                            85% {
                                transform: translateY(${secondRollPosition.end}px);
                            }
                            
                            90% {
                                transform: translateY(${secondRollPosition.end + 5}px);
                            }
                            
                            100% {
                                transform: translateY(${secondRollPosition.end}px);
                            }
                        }
                        
                        @keyframes roll-third-slot {
                            0% {
                                transform: translateY(${thirdRollPosition.start}px);
                            }
                            
                            10% {
                                transform: translateY(${thirdRollPosition.start}px);
                            }
                            
                            15% {
                                transform: translateY(${thirdRollPosition.start - 40}px);
                            }
                            
                            80% {
                                transform: translateY(${thirdRollPosition.end}px);
                            }
                            
                            90% {
                                transform: translateY(${thirdRollPosition.end}px);
                            }
                            
                            95% {
                                transform: translateY(${thirdRollPosition.end + 5}px);
                            }
                            
                            100% {
                                transform: translateY(${thirdRollPosition.end}px);
                            }
                        }
                        
                        .firstSlotAnim {
                            animation: roll-first-slot 3s ease-in-out forwards;
                        }
                        
                        .secondSlotAnim {
                            animation: roll-second-slot 3s ease-in-out forwards;
                        }
                        
                        .thirdSlotAnim {
                            animation: roll-third-slot 3s ease-in-out forwards;
                        }
                        
                       .screenResize {
                            animation: resize-screen 0.3s linear forwards;
                       }
                    `}
                </style>
            </div>

            <audio
                ref={pressBtnAudioRef}
                className={cls.audio}
            >
                <source
                    src={PressBtnAudio}
                    type="audio/mpeg"
                />
                <track kind="captions" />
                <p>Your browser does not support the audio element.</p>
            </audio>

            <audio
                ref={rollingSlotsAudioRef}
                className={cls.audio}
            >
                <source
                    src={RollingSlotsAudio}
                    type="audio/mpeg"
                />
                <track kind="captions" />
                <p>Your browser does not support the audio element.</p>
            </audio>

            <audio
                ref={borderAudioRef}
                className={cls.audio}
            >
                <source
                    src={BorderAudio}
                    type="audio/mpeg"
                />
                <track kind="captions" />
                <p>Your browser does not support the audio element.</p>
            </audio>

            {gameFinished && !newGameInited && (
                <RainySpeenWinModal
                    visible={visibleWinModal}
                    onClose={onCloseWinModal}
                />
            )}
        </div>
    );
});
