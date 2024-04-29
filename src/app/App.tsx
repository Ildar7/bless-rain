import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageLoader } from 'widgets/PageLoader';
import { AppRouter } from 'app/providers/router';
import { ToastContainer } from 'react-toastify';
import { CloseButton } from 'shared/ui/CloseButton/CloseButton';
import { Portal } from 'shared/ui/Portal/Portal';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchUserInfo } from 'entities/User';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUserInfo());
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
