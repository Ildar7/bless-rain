import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';
import './HeaderAndFooter.scss';
import { getRouteRainySpeen } from 'shared/const/router';
import { useLocation } from 'react-router-dom';
import { Container } from '../../Container';

const withoutHeaderAndFooterPages = [getRouteRainySpeen()];

interface HeaderAndFooterProps {
    className?: string;
    children: ReactNode;
}

export const HeaderAndFooter = ({ className, children }: HeaderAndFooterProps) => {
    const { pathname } = useLocation();

    console.log(pathname);

    return (
        <Container
            className={
                classNames(
                    'relative flex flex-col items-center sm:w-full overflow-x-hidden',
                    {},
                    [className],
                )
            }
        >
            {!withoutHeaderAndFooterPages.includes(pathname) && (
                <Header />
            )}
            {children}
            {!withoutHeaderAndFooterPages.includes(pathname) && (
                <Footer />
            )}
        </Container>
    );
};
