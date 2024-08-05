import React, {
    memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import InfoIcon from 'shared/assets/icons/png/info.png';
import { Button } from 'shared/ui/Button/Button';
import { TapDailyRewardsModal } from 'entities/Tap/ui/TapModals/TapDailyRewardsModal/TapDailyRewardsModal';
import cls from './TapMain.module.scss';
import { TapAnimation } from '../TapAnimation/TapAnimation/TapAnimation';

interface TapMainProps {
    className?: string;
    showBoosts: () => void;
}

export const TapMain = memo((props: TapMainProps) => {
    const {
        className,
        showBoosts,
    } = props;
    const [dailyRewardsModalVisible, setDailyRewardsModalVisible] = useState(false);

    const onShowDailyRewardsModalVisible = useCallback(() => {
        setDailyRewardsModalVisible(true);
    }, []);

    const closeDailyRewardsModalVisible = useCallback(() => {
        setDailyRewardsModalVisible(false);
    }, []);

    const viewportRef = useRef<HTMLDivElement>(null);
    const [animation, setAnimation] = useState<string | null>('idle');
    const timeoutRef = useRef<number | null>(null);
    const lastTapTimeRef = useRef<number | null>(null);
    const tapCountRef = useRef<number>(0);

    useEffect(() => {
        const handleClickOrTouch = (event: MouseEvent | TouchEvent) => {
            if (viewportRef.current) {
                const rect = viewportRef.current.getBoundingClientRect();
                let x: number;
                let y: number;

                if (event instanceof MouseEvent) {
                    x = event.clientX - rect.left;
                    y = event.clientY - rect.top;
                } else if (event instanceof TouchEvent) {
                    const touch = event.touches[0];
                    x = touch.clientX - rect.left;
                    y = touch.clientY - rect.top;
                } else {
                    return;
                }

                const { width } = rect;
                const { height } = rect;

                const centerWidth = width * 0.3;
                const centerHeight = height * 0.3;
                const centerXStart = (width - centerWidth) / 2;
                const centerYStart = (height - centerHeight) / 2;

                let newAnimation: string | null = null;

                if (
                    x >= centerXStart
                    && x <= centerXStart + centerWidth
                    && y >= centerYStart
                    && y <= centerYStart + centerHeight
                ) {
                    newAnimation = 'center';
                } else if (x < width / 2 && y < height / 2) {
                    newAnimation = 'top-left';
                } else if (x >= width / 2 && y < height / 2) {
                    newAnimation = 'top-right';
                } else if (x < width / 2 && y >= height / 2) {
                    newAnimation = 'bottom-left';
                } else if (x >= width / 2 && y >= height / 2) {
                    newAnimation = 'bottom-right';
                }

                tapCountRef.current += 1;
                lastTapTimeRef.current = Date.now();

                if (tapCountRef.current > 1) {
                    // Быстро переключаемся на idle, затем на нужную анимацию при множественных кликах
                    setAnimation('idle');
                    setTimeout(() => {
                        setAnimation(newAnimation);
                    }, 0);
                } else {
                    // Проигрываем нужную анимацию напрямую при одиночном клике
                    setAnimation(newAnimation);
                }

                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }

                timeoutRef.current = window.setTimeout(() => {
                    const timeSinceLastTap = Date.now() - (lastTapTimeRef.current || 0);
                    if (timeSinceLastTap >= 220) {
                        setAnimation('idle');
                        tapCountRef.current = 0; // Сбросить счетчик кликов после задержки
                    }
                }, 220);
            }
        };

        const viewport = viewportRef.current;
        if (viewport) {
            viewport.addEventListener('click', handleClickOrTouch);
            viewport.addEventListener('touchstart', handleClickOrTouch);
            return () => {
                viewport.removeEventListener('click', handleClickOrTouch);
                viewport.removeEventListener('touchstart', handleClickOrTouch);
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
            };
        }
    }, []);

    const getAnimationSrc = () => {
        switch (animation) {
        case 'top-left':
            return 'assets/anims/toad_anim_left_top.gif';
        case 'top-right':
            return 'assets/anims/toad_anim_right_top.gif';
        case 'bottom-left':
            return 'assets/anims/toad_anim_left_bottom.gif';
        case 'bottom-right':
            return 'assets/anims/toad_anim_right_bottom.gif';
        case 'center':
            return 'assets/anims/toad_anim_center.gif';
        case 'idle':
        default:
            return 'assets/anims/idle.gif';
        }
    };

    return (
        <>
            <div className={classNames(cls.TapMain, {}, [className])}>
                <div className={cls.top}>
                    <div className={cls.barWrapper}>
                        <div className={cls.barText}>
                            <Icon name="lighting-big" className={cls.icon} />
                            <div>78</div>
                        </div>
                        <div className={cls.scaleBar}>
                            <span />
                        </div>
                    </div>
                    <div className={cls.energyWrapper}>
                        <Button
                            className={cls.energyBlock}
                            theme="none"
                            onClick={onShowDailyRewardsModalVisible}
                        >
                            <div className={cls.energyLimit}>Daily rewards</div>
                        </Button>
                        <div className={classNames(cls.energyBlock, {}, [cls.fullEnergyBtn])}>
                            <div className={classNames(cls.energyText, {}, ['caption-md'])}>Full energy</div>
                            <Icon name="lighting-big" className={cls.energyIcon} />
                            <div className={cls.energyLimit}>3/3</div>
                        </div>
                    </div>
                </div>
                <div
                    className={cls.middle}
                    ref={viewportRef}
                >
                    <TapAnimation
                        toadAnimSrc={getAnimationSrc()}
                    />
                </div>
                <div className={cls.bottom}>
                    <div className="flex items-center gap-2">
                        <div className={cls.infoImg}>
                            <img src={InfoIcon} alt="info" />
                        </div>
                        <div className={cls.rulesText}>Rules</div>
                    </div>
                    <Button
                        theme="none"
                        className={classNames(cls.boostBtn, {}, [])}
                        onClick={showBoosts}
                    >
                        <Icon name="cosmo" className={cls.cosmoIcon} />
                        <div className={cls.boostText}>Boosts</div>
                    </Button>
                </div>
            </div>
            <TapDailyRewardsModal
                isOpen={dailyRewardsModalVisible}
                onClose={closeDailyRewardsModalVisible}
            />
        </>
    );
});
