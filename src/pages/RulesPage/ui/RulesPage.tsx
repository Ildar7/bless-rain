import React, { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './RulesPage.scss';
import { appActions } from 'entities/App';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Helmet } from 'react-helmet';

export interface RatingItem {
    id: number;
    img: string;
    name: string;
    points: number;
    place: number;
}

const RulesPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(appActions.setPlayingMode('rules'));
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Bless Rain - Rules</title>
            </Helmet>

            <div className={classNames(
                'flex flex-col gap-4 mt-[-50px] sm:mt-0',
                {},
                [],
            )}
            >
                <div className="h2">
                    Earn Points with Blessed Rain!
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h3">
                        There are 3 easy ways to earn points with Blessed Rain:
                    </div>
                    <ul className="list-disc pl-6 xs:pl-10">
                        <li className="h4">
                            <strong>Engage with Power Tweets</strong>
                            : Retweet, and comment on Power Tweets to earn bonus points.
                        </li>
                        <li className="h4">
                            <strong>Play games</strong>
                            : Play exciting games to increase your points.
                        </li>
                        <li className="h4">
                            <strong>Invite friends</strong>
                            : Share your referral link and earn points every time a friend you refer gets their points.
                        </li>
                    </ul>
                    <div className="h5">
                        For maximum results, use all 3 methods!
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h3">
                        Additional rules:
                    </div>
                    <ul className="list-disc pl-6 xs:pl-10">
                        <li className="h4">
                            <strong>Organic engagement</strong>
                            : All interactions and content must be genuine and
                            reflect authentic interest in the platform and
                            community. No bots or automated systems are allowed.
                        </li>
                        <li className="h4">
                            <strong>Content quality</strong>
                            : All content shared should be relevant,
                            valuable, and non-spammy. Avoid repetitive or low-quality posts.
                        </li>
                        <li className="h4">
                            <strong>Respectful communication</strong>
                            : Treat others in the community with respect and
                            courtesy. Harassment, hate speech, or offensive
                            language will not be tolerated.
                        </li>
                        <li className="h4">
                            <strong>No impersonation</strong>
                            : Do not impersonate other users or entities.
                            This includes using similar usernames,
                            profile pictures, or misleading information.
                        </li>
                        <li className="h4">
                            <strong>Fair distribution</strong>
                            : Rewards are distributed based on genuine engagement and
                            contributions. Any attempts to manipulate
                            the system for personal gain will result
                            in penalties or account suspension.
                        </li>
                        <li className="h4">
                            <strong>Privacy protection</strong>
                            : Respect the privacy of others and do
                            not share personal or sensitive information without permission.
                        </li>
                        <li className="h4">
                            <strong>Compliance with laws and regulations</strong>
                            : All users must comply with applicable laws and
                            regulations, including those related to
                            content, data protection, and intellectual property.
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h3">
                        User Tweet Value Based on Popularity
                    </div>
                    <div className="h4">
                        <strong>Value Coefficient</strong>
                        {' '}
                        is calculated proportionally to the sum of a user's follower count and friend count:
                    </div>
                    <div className="h4">
                        k
                        <sub>value</sub>
                        {' '}
                        =
                        {' '}
                        log
                        <sub>100</sub>
                        (userfollowers + userfriends)
                        <sup>3</sup>
                    </div>
                    <div className="h4">
                        <strong>This coefficient is applied to retweet or like points</strong>
                        {' '}
                        earned by the user for any supported activity type.
                    </div>
                    <div className="h4">
                        <strong>Tweet Value Table:</strong>
                    </div>
                    <table className="text-center max-w-[768px]">
                        <tr>
                            <th>Follower + Friend Count</th>
                            <th>Tweet Value Coefficient</th>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>0.3</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>1.0</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>2.2</td>
                        </tr>
                        <tr>
                            <td>50</td>
                            <td>4.9</td>
                        </tr>
                        <tr>
                            <td>100</td>
                            <td>8.0</td>
                        </tr>
                        <tr>
                            <td>200</td>
                            <td>12.2</td>
                        </tr>
                        <tr>
                            <td>500</td>
                            <td>19.7</td>
                        </tr>
                        <tr>
                            <td>1000</td>
                            <td>27.0</td>
                        </tr>
                        <tr>
                            <td>2000</td>
                            <td>36.0</td>
                        </tr>
                        <tr>
                            <td>5000</td>
                            <td>50.6</td>
                        </tr>
                        <tr>
                            <td>10000</td>
                            <td>64.0</td>
                        </tr>
                        <tr>
                            <td>20000</td>
                            <td>79.6</td>
                        </tr>
                        <tr>
                            <td>50000</td>
                            <td>103.8</td>
                        </tr>
                        <tr>
                            <td>100000</td>
                            <td>125.0</td>
                        </tr>
                        <tr>
                            <td>200000</td>
                            <td>149.0</td>
                        </tr>
                        <tr>
                            <td>500000</td>
                            <td>185.1</td>
                        </tr>
                        <tr>
                            <td>1000000</td>
                            <td>216.0</td>
                        </tr>
                    </table>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h4">
                        Here's a breakdown of how points are awarded for different activities:
                    </div>
                    <ul className="list-disc pl-6 xs:pl-10">
                        <li className="h4">
                            <strong>Quote Retweet</strong>
                            : 200 points (considered more valuable due to added user
                            commentary)
                        </li>
                        <li className="h4">
                            <strong>Regular Retweet</strong>
                            : 150 points
                        </li>
                        <li className="h4">
                            <strong>Comment</strong>
                            : 20 points per comment
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default RulesPage;
