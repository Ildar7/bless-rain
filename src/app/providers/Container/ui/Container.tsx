import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { getRoutePlinko, getRouteRainySpeen } from 'shared/const/router';
import { useLocation } from 'react-router-dom';

interface ContainerProps {
    className?: string;
    children: ReactNode;
}

const gamesUrls = [getRouteRainySpeen(), getRoutePlinko()];

export const Container = ({ className, children }: ContainerProps) => {
    const { pathname } = useLocation();

    return (
        <div className={classNames(
            'px-5 w-full h-full min-h-screen mx-auto',
            {
                'max-w-[768px]': !gamesUrls.includes(pathname),
            },
            [className],
        )}
        >
            {children}
        </div>
    );
};
