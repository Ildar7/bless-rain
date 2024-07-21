import React, { useEffect } from 'react';
import './MainPage.scss';
import { appActions } from 'entities/App';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserData, getUserError, getUserIsLoading } from 'entities/User';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextTheme, TextWeight } from 'shared/ui/Text/Text';
import { Main } from 'entities/Main';
import { Account } from 'entities/Account';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const userData = useSelector(getUserData)?.data;
    const userIsLoading = useSelector(getUserIsLoading);
    const userError = useSelector(getUserError);

    useEffect(() => {
        dispatch(appActions.setPlayingMode('null'));
    }, [dispatch]);

    let content;

    if (userIsLoading) {
        content = (
            <Skeleton width="100%" height={600} border="6px" />
        );
    } else if (userError) {
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
            <Account />
        );
    }

    return (
        <>
            {content}
        </>
    );
};

export default MainPage;
