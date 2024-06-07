import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import TopHangingBars from 'shared/assets/icons/top-hanging-bars.png';
import { useSelector } from 'react-redux';
import { AppPlayingMode, getAppPlayingMode } from 'entities/App';
import { useNavigate } from 'react-router-dom';
import { getRouteGames, getRouteRating, getRouteRules } from 'shared/const/router';
import { useMobile } from 'shared/lib/hooks/useMobile/useMobile';
import { SidebarMob, SidebarMobItem } from 'widgets/SidebarMob';
import { useCallback, useMemo } from 'react';
import cls from './PlayingModeBanner.module.scss';

interface PlayingModeBannerProps {
  className?: string;
}
export const PlayingModeBanner = ({ className }: PlayingModeBannerProps) => {
    const playingMode = useSelector(getAppPlayingMode);
    const navigate = useNavigate();
    const { isMobile } = useMobile();

    const onChangePlayingMode = useCallback((mode: AppPlayingMode) => {
        if (mode === 'rules') {
            navigate(getRouteRules());
            return;
        }

        if (mode === 'rating') {
            navigate(getRouteRating());
            return;
        }

        navigate(getRouteGames());
    }, [navigate]);

    const sidebarItems: SidebarMobItem[] = useMemo(() => [
        {
            id: 1,
            title: 'RULES',
            glow: 'pink',
            onClick: () => onChangePlayingMode('rules'),
            icon: 'gamepad',
            active: playingMode === 'rules',
        },
        {
            id: 2,
            title: 'RATING',
            glow: 'pink',
            onClick: () => onChangePlayingMode('rating'),
            icon: 'star',
            active: playingMode === 'rating',
        },
        {
            id: 3,
            title: 'GAMES',
            glow: 'blue',
            onClick: () => onChangePlayingMode('games'),
            icon: 'xbox-gamepad',
            active: playingMode === 'games',
        },
    ], [onChangePlayingMode, playingMode]);

    if (isMobile) {
        return (
            <SidebarMob
                items={sidebarItems}
            />
        );
    }

    return (
        <div className={classNames(
            cls.PlayingModeBanner,
            {},
            [className, 'fixed sm:relative z-20 flex-1 sm:flex-auto flex flex-col'],
        )}
        >
            <div className="w-full mx-2 flex justify-between">
                <img src={TopHangingBars} alt="top-hanging-bars" />
                <img className="mr-6" src={TopHangingBars} alt="top-hanging-bars" />
            </div>
            <div
                className="surface p-1 sm:p-2 flex-1 sm:flex-none rounded-xl cursor-pointer select-none flex gap-2"
            >
                <div
                    className={classNames(
                        'inner rounded-xl px-2 py-2 sm:px-3 sm:py-3 flex '
                        + 'items-center justify-start gap-3 dashed-border',
                        {
                            'glowing-pink': playingMode === 'rules',
                        },
                        [],
                    )}
                    onClick={() => {
                        onChangePlayingMode('rules');
                    }}
                >
                    <Icon name="gamepad" glow="pink" className="text-2xl" />
                    <span className="dashed-border-top">
                        <span className="text-label-sm dashed-border-bottom">RULES</span>
                    </span>
                </div>
                <div
                    className={classNames(
                        'inner rounded-xl px-3 py-2.5 flex items-center justify-start gap-2 dashed-border',
                        {
                            'glowing-pink': playingMode === 'rating',
                        },
                        [],
                    )}
                    onClick={() => {
                        onChangePlayingMode('rating');
                    }}
                >
                    <Icon name="star" glow="pink" className="text-2xl" />
                    <span className="dashed-border-top">
                        <span className="text-label-sm dashed-border-bottom">RATING</span>
                    </span>
                </div>
                <div
                    className={classNames(
                        'inner rounded-xl px-3 py-2.5 flex items-center justify-start gap-2 dashed-border',
                        {
                            'glowing-blue': playingMode === 'games',
                        },
                        [],
                    )}
                    onClick={() => {
                        onChangePlayingMode('games');
                    }}
                >
                    <Icon name="xbox-gamepad" glow="blue" className="text-2xl" />
                    <span className="dashed-border-top">
                        <span className="text-label-sm dashed-border-bottom">GAMES</span>
                    </span>
                </div>
            </div>
        </div>
    );
};
