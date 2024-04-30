import React, { memo, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { Icon } from 'shared/ui/Icon/Icon';
import { Carousel } from 'shared/ui/Carousel/Carousel';
import { Tweet } from 'react-tweet';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextTheme, TextWeight } from 'shared/ui/Text/Text';
import {
    getPowerTweetsData,
    getPowerTweetsError,
    getPowerTweetsIsLoading,
} from '../model/selectors/getPowerTweetsInfo/getPowerTweetsInfo';
import { fetchPowerTweets } from '../model/services/fetchPowerTweets/fetchPowerTweets';
import cls from './PowerTweets.module.scss';

interface PowerTweetsProps {
    className?: string;
}

const getTweetId = (link: string) => {
    const linkArr = link.split('/');
    return linkArr[linkArr.length - 1];
};

export const PowerTweets = memo((props: PowerTweetsProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();

    const powerTweetsData = useSelector(getPowerTweetsData)?.data;
    const powerTweetsIsLoading = useSelector(getPowerTweetsIsLoading);
    const powerTweetsError = useSelector(getPowerTweetsError);

    useEffect(() => {
        dispatch(fetchPowerTweets());
    }, [dispatch]);

    let content;

    if (powerTweetsIsLoading) {
        content = (
            <Skeleton width="100%" height={200} border="6px" />
        );
    } else if (powerTweetsError) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                weight={TextWeight.SEMIBOLD}
            >
                An error occurred while loading, try refreshing the page
            </Text>
        );
    } else {
        content = (
            <>
                <Swiper
                    modules={[Navigation, Pagination]}
                    className="w-full px-6 sm:px-9"
                    slidesPerView={1}
                    spaceBetween={16}
                    autoHeight
                    observer
                    observeParents
                    breakpoints={{
                        675: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1440: {
                            slidesPerView: 4,
                        },
                        2560: {
                            slidesPerView: 5,
                        },
                        3080: {
                            slidesPerView: 6,
                        },
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        el: '.indicators',
                        type: 'bullets',
                        clickable: true,
                    }}
                >
                    {powerTweetsData?.map((tweet) => (
                        <SwiperSlide
                            className="rounded-2xl tweet-max-h-enabled
                            swiper-slide dashed-border glowing-blue"
                            key={tweet.id}
                        >
                            <span className="dashed-border-top">
                                <span className="dashed-border-bottom">
                                    <div
                                        data-dnt="true"
                                        data-theme="dark"
                                        data-conversation="none"
                                    >
                                        <Tweet id={getTweetId(tweet.tweet)} />
                                    </div>
                                </span>
                            </span>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    className="flex gap-5 items-center justify-center mt-4"
                >
                    <button
                        type="button"
                        className="swiper-button-prev bg-surface rounded-full w-10 h-10"
                    >
                        <div className="w-full h-full rounded-full flex
                                items-center justify-center buttonArrow"
                        >
                            <Icon
                                name="chevron-up"
                                className="text-2xl font-semibold
                                    text-icon-secondary -rotate-90"
                            />
                        </div>
                    </button>

                    <div className="bg-dark flex justify-center my-2 gap-2 indicators" />

                    <button
                        type="button"
                        className="swiper-button-next bg-surface rounded-full w-10 h-10"
                    >
                        <div
                            className="w-full h-full rounded-full flex
                                                    items-center justify-center buttonArrow"
                        >
                            <Icon
                                name="chevron-up"
                                className="text-2xl font-semibold
                                    text-icon-secondary rotate-90"
                            />
                        </div>
                    </button>
                </div>
            </>
        );
    }

    return (
        <Carousel
            className={classNames(cls.PowerTweets, {}, [className, 'relative'])}
        >
            <div className={classNames(cls.userText, {}, ['caption-lg uppercase text-center mb-2.5'])}>
                Power tweets
            </div>
            {content}
        </Carousel>
    );
});
