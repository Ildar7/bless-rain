import React, { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './RulesPage.scss';
import { appActions } from 'entities/App';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Sidebar } from 'widgets/Sidebar';
import GirlImg from 'shared/assets/icons/png/rating-img.png';
import { SidebarItems } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { Helmet } from 'react-helmet';
import cls from './RulesPage.module.scss';

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
                'flex flex-col sm:flex-row items-start gap-6 '
                + 'justify-start sm:justify-between relative h-full md:mt-0',
                {},
                [],
            )}
            >
                Rules Page
            </div>
        </>
    );
};

export default RulesPage;
