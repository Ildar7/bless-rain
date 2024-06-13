import React, { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { appActions } from 'entities/App';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import RainySpeenImg from 'shared/assets/icons/png/rainy_speen.png';
import PlinkoImg from 'shared/assets/icons/png/plinko.png';
import LuckyDropletImg from 'shared/assets/icons/png/lucky_droplet.png';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { getRouteMain, getRoutePlinko, getRouteRainySpeen } from 'shared/const/router';
import { useMobile } from 'shared/lib/hooks/useMobile/useMobile';
import cls from './GamesPage.module.scss';

interface GamesPageProps {
    className?: string;
}

const GamesPage = memo((props: GamesPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const { isMobile } = useMobile();

    useEffect(() => {
        dispatch(appActions.setPlayingMode('games'));
    }, [dispatch]);

    return (
        <div className={classNames(cls.GamesPage, {}, [className, 'mt-[-40px] sm:mt-0'])}>
            {isMobile && (
                <div className="title-lg">
                    Games
                </div>
            )}
            <div className="flex flex-col sm:flex-row items-stretch gap-6 mt-4">
                <AppLink
                    className={classNames(cls.link, {}, ['flex-1 glowing-blue dashed-border rounded-xl overflow-hidden'])}
                    to={getRouteRainySpeen()}
                >
                    <span className="dashed-border-top">
                        <span className="dashed-border-bottom">
                            <img src={RainySpeenImg} alt="rainy-speen" />
                            <div className={classNames(cls.gameName, {}, [])}>
                                <div className="title-lg-clash-display w-full">
                                    RAINY SPEEN
                                </div>
                            </div>
                        </span>
                    </span>
                </AppLink>
                <AppLink
                    className={classNames(cls.link, {}, ['flex-1 glowing-blue dashed-border rounded-xl overflow-hidden'])}
                    to={getRoutePlinko()}
                >
                    <span className="dashed-border-top">
                        <span className="dashed-border-bottom">
                            <img src={PlinkoImg} alt="plinko" />
                            <div className={classNames(cls.gameName, {}, [])}>
                                <div className="title-lg-clash-display w-full">
                                    PLINKO
                                </div>
                            </div>
                        </span>
                    </span>
                </AppLink>
                <div
                    className={classNames(
                        cls.link,
                        {},
                        [cls.linkBlured, 'flex-1 glowing-blue dashed-border rounded-xl overflow-hidden'],
                    )}
                >
                    <span className="dashed-border-top">
                        <span className="dashed-border-bottom">
                            <img src={LuckyDropletImg} alt="lucky-droplet" />
                            <div className={classNames(cls.gameName, {}, [])}>
                                <div className="title-lg-clash-display w-full opacity-60">
                                    COMING SOON
                                </div>
                            </div>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
});

export default GamesPage;
