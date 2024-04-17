import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import FaviconImage from 'shared/assets/icons/favicon/favicon.png';
import Favicon from 'react-favicon';
import App from './app/App';
import 'app/styles/typography.scss';
import 'app/styles/shared.scss';
import 'app/styles/libs/ReactToastify.scss';
import 'app/styles/style.scss';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

render(
    <BrowserRouter basename="/">
        <StoreProvider>
            <ErrorBoundary>
                <Favicon url={FaviconImage} />
                <App />
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
