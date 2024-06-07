import React, {
    memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AnimatedText } from 'shared/ui/AnimatedText/AnimatedText';
import { AnimatedCounter } from 'shared/ui/AnimatedCounter/AnimatedCounter';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import WinModalAudio from 'shared/assets/songs/rainySpeen/win-modal.mp3';
import { rainySpeenActions } from '../../model/slice/rainySpeenSlice';
import cls from './RainySpeenWinModal.module.scss';
import { getRainySpeenBalance } from '../../model/selectors/getRainySpeen/getRainySpeen';

interface RainySpeenWinModalProps {
    className?: string;
    visible: boolean;
    onClose: () => void;
}

export const RainySpeenWinModal = memo((props: RainySpeenWinModalProps) => {
    const {
        className,
        visible,
        onClose,
    } = props;
    const [visibleWinValue, setVisibleWinValue] = useState(false);
    const balance = useSelector(getRainySpeenBalance);
    const dispatch = useAppDispatch();
    const winModalAudioRef = useRef<HTMLAudioElement | null>(null);
    const [canCloseModal, setCanCloseModal] = useState(false);

    useEffect(() => {
        winModalAudioRef.current?.play();

        setTimeout(() => {
            setVisibleWinValue(true);
            dispatch(rainySpeenActions.changeCanUpdateBalance(true));
        }, 250);

        setTimeout(() => {
            setCanCloseModal(true);
            dispatch(rainySpeenActions.changeBalance((balance || 0) + 1500));
        }, 2000);
    }, [dispatch]);

    return (
        <div
            className={classNames(cls.RainySpeenWinModal, { [cls.visible]: visible }, [className])}
            onClick={canCloseModal ? onClose : undefined}
        >
            <AnimatedText
                className={cls.winText}
                text="WIN"
            />
            <div className="h-[110px]">
                {visibleWinValue && (
                    <AnimatedCounter
                        from={0}
                        to={1500}
                        duration={1500}
                    />
                )}
            </div>

            <audio
                ref={winModalAudioRef}
                className={cls.audio}
            >
                <source
                    src={WinModalAudio}
                    type="audio/mpeg"
                />
                <track kind="captions" />
                <p>Your browser does not support the audio element.</p>
            </audio>
        </div>
    );
});
