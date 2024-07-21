import React, { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { appActions } from 'entities/App';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import RainySpeenImg from 'shared/assets/icons/png/rainy_speen.png';
import PlinkoImg from 'shared/assets/icons/png/plinko.png';
import LuckyDropletImg from 'shared/assets/icons/png/lucky_droplet.png';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { getRoutePlinko, getRouteRainySpeen } from 'shared/const/router';
import { Helmet } from 'react-helmet';
import cls from './GamesPage.module.scss';

interface GamesPageProps {
    className?: string;
}

const GamesPage = memo((props: GamesPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(appActions.setPlayingMode('games'));
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Bless Rain - Games</title>
            </Helmet>
            <div className={classNames(cls.GamesPage, {}, [className, 'mt-[-67px] mb-[130px]'])}>
                <div className="title-lg">
                    Games
                </div>
                <div className="flex flex-col sm:flex-row items-stretch gap-6 mt-4">
                    <AppLink
                        className={classNames(cls.link, {}, ['flex-1 dashed-border rounded-lg overflow-hidden'])}
                        to={getRouteRainySpeen()}
                    >
                        <img src={RainySpeenImg} alt="rainy-speen" />
                        <div className={classNames(cls.gameName, {}, ['flex flex-col justify-end gap-2.5'])}>
                            <div className="title-lg w-full">
                                RAINY SPEEN
                            </div>
                            <div className={cls.descr}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </AppLink>
                    <AppLink
                        className={classNames(cls.link, {}, ['flex-1 dashed-border rounded-lg overflow-hidden'])}
                        to={getRoutePlinko()}
                    >
                        <img src={PlinkoImg} alt="plinko" />
                        <div className={classNames(cls.gameName, {}, ['flex flex-col justify-end gap-2.5'])}>
                            <div className="title-lg w-full">
                                PLINKO
                            </div>
                            <div className={cls.descr}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </AppLink>
                    <div
                        className={classNames(
                            cls.link,
                            {},
                            [cls.linkBlured, 'flex-1 dashed-border rounded-lg overflow-hidden'],
                        )}
                    >
                        <img src={LuckyDropletImg} alt="lucky-droplet" />
                        <div className={classNames(cls.gameName, {}, [])}>
                            <div className="title-lg w-full opacity-60">
                                COMING SOON
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export default GamesPage;
