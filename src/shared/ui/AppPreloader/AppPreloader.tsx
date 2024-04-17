import { classNames } from 'shared/lib/classNames/classNames';
import { AppLoaderSide } from 'shared/ui/AppLoaderSide/AppLoaderSide';
import './AppPreloader.scss';

interface AppPreloaderProps {
  className?: string;
}
export const AppPreloader = ({ className }: AppPreloaderProps) => (
    <div
        className={classNames(
            'fixed w-screen h-screen overflow-x-hidden pointer-events-none',
            {},
            [className],
        )}
        style={{ zIndex: 999 }}
    >
        <div className="w-1/2 overflow-hidden absolute left-0 translate-left">
            <AppLoaderSide />
        </div>
        <div className="w-1/2 overflow-hidden absolute right-0 translate-right" style={{ direction: 'rtl' }}>
            <AppLoaderSide />
        </div>
    </div>
);
