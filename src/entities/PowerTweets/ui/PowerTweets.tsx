import React, {
    memo, useCallback, useEffect, useState,
} from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import { Tweet } from 'react-tweet';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextTheme, TextWeight } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
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
    const [showMore, setShowMore] = useState(false);

    const powerTweetsData = useSelector(getPowerTweetsData)?.data;
    const powerTweetsIsLoading = useSelector(getPowerTweetsIsLoading);
    const powerTweetsError = useSelector(getPowerTweetsError);

    const changeShowMore = useCallback(() => {
        setShowMore((prevState) => !prevState);
    }, []);

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
            <div
                className="w-full flex flex-col gap-4"
            >
                {powerTweetsData?.slice(0, showMore ? powerTweetsData?.length : 3).map((tweet) => (
                    <div
                        className={classNames(cls.tweetItem, {}, ['rounded-2xl tweet-max-h-enabled'])}
                        key={tweet.id}
                    >
                        <div
                            data-dnt="true"
                            data-theme="dark"
                            data-conversation="none"
                        >
                            <Tweet id={getTweetId(tweet.tweet)} />
                        </div>
                    </div>
                ))}
                <Button
                    theme="none"
                    className={classNames(cls.moreBtn, {}, ['text-label-md text-icon-secondary'])}
                    onClick={changeShowMore}
                >
                    {showMore ? 'Show less' : 'Show more'}
                </Button>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.PowerTweets, {}, [className, 'relative py-6 px-4'])}
        >
            <div className={classNames(cls.userText, {}, ['title-lg mb-6'])}>
                <Icon name="lighting" className={cls.titleIcon} />
                <span className={cls.title}>Power tweets</span>
            </div>
            <div className={classNames(cls.descr, {}, ['caption-lg mb-6'])}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            {content}
        </div>
    );
});
