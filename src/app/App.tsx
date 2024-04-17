import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageLoader } from 'widgets/PageLoader';
import { AppRouter } from 'app/providers/router';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserEmail, userActions } from 'entities/User';
import { ToastContainer } from 'react-toastify';
import { CloseButton } from 'shared/ui/CloseButton/CloseButton';
import { Portal } from 'shared/ui/Portal/Portal';
import { chatActions } from 'entities/ChatBox';
import { useMobile } from 'shared/lib/hooks/useMobile/useMobile';
import { appActions } from 'entities/App';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuth());
    }, [dispatch]);

    useEffect(() => {
        dispatch(chatActions.initChatOpened());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={<PageLoader />}>
                <AppRouter />
                <Portal>
                    <ToastContainer closeButton={CloseButton} />
                </Portal>
            </Suspense>
        </div>
    );
}

export default App;
