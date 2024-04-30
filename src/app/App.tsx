import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageLoader } from 'widgets/PageLoader';
import { AppRouter } from 'app/providers/router';
import { ToastContainer } from 'react-toastify';
import { CloseButton } from 'shared/ui/CloseButton/CloseButton';
import { Portal } from 'shared/ui/Portal/Portal';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchUserInfo } from 'entities/User';
import { Helmet } from 'react-helmet';
import FaviconImage from 'shared/assets/icons/favicon/favicon.png';
import { Web3ModalProvider } from './providers/Web3ModalProvider';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUserInfo());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={<PageLoader />}>
                <Web3ModalProvider>
                    <Helmet>
                        <link rel="icon" href={FaviconImage} />
                    </Helmet>
                    <AppRouter />
                    <Portal>
                        <ToastContainer closeButton={CloseButton} />
                    </Portal>
                </Web3ModalProvider>
            </Suspense>
        </div>
    );
}

export default App;
