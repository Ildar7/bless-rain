import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import TopHangingBars from 'shared/assets/icons/top-hanging-bars.svg';
import { useSelector } from 'react-redux';
import { appActions, AppPlayingMode, getAppPlayingMode } from 'entities/App';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useMobile } from 'shared/lib/hooks/useMobile/useMobile';
import { useNavigate } from 'react-router-dom';
import { getRouteMain, getRouteRating, getRouteRules } from 'shared/const/router';
import cls from './PlayingModeBanner.module.scss';

interface PlayingModeBannerProps {
  className?: string;
}
export const PlayingModeBanner = ({ className }: PlayingModeBannerProps) => {
    const playingMode = useSelector(getAppPlayingMode);
    const navigate = useNavigate();

    const onChangePlayingMode = (mode: AppPlayingMode) => {
        if (mode === 'rules') {
            navigate(getRouteRules());
            return;
        }

        navigate(getRouteRating());
    };

    return (
        <div className={classNames(cls.PlayingModeBanner, {}, [className, 'flex flex-col'])}>
            <div className="w-full mx-2 flex justify-between">
                <TopHangingBars />
                <TopHangingBars className="mr-6" />
            </div>
            <div className="surface p-1 sm:p-2 flex-1 sm:flex-none rounded-xl cursor-pointer select-none flex gap-2">
                <div
                    className={classNames(
                        'inner rounded-xl px-2 py-2 sm:px-3 sm:py-3 flex '
                        + 'items-center justify-start gap-3 dashed-border',
                        {
                            'glowing-pink': playingMode === 'rules',
                        },
                        [],
                    )}
                    onClick={() => { onChangePlayingMode('rules'); }}
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
                    onClick={() => { onChangePlayingMode('rating'); }}
                >
                    <Icon name="star" glow="pink" className="text-2xl" />
                    <span className="dashed-border-top">
                        <span className="text-label-sm dashed-border-bottom">RATING</span>
                    </span>
                </div>
            </div>
        </div>
    );
};
