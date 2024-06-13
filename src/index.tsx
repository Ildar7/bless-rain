import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import 'app/styles/typography.scss';
import 'app/styles/shared.scss';
import 'app/styles/libs/ReactToastify.scss';
import 'app/styles/style.scss';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import ScrollToTop from 'shared/ui/ScrollToTop/ScrollToTop';

const container = document.getElementById('root');
const root = createRoot(container as any);

root.render(
    <BrowserRouter basename="/">
        <StoreProvider>
            <ErrorBoundary>
                <ScrollToTop />
                <App />
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
