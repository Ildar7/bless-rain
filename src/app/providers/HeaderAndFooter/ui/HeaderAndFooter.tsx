import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';
import './HeaderAndFooter.scss';
import { getRoutePlinko, getRouteRainySpeen } from 'shared/const/router';
import { useLocation } from 'react-router-dom';
import { useMobile } from 'shared/lib/hooks/useMobile/useMobile';
import { MobileMenu } from 'widgets/MobileMenu';
import { Container } from '../../Container';
import cls from './HeaderAndFooter.module.scss';

const withoutFooterPages = [getRouteRainySpeen(), getRoutePlinko()];

interface HeaderAndFooterProps {
    className?: string;
    children: ReactNode;
}

export const HeaderAndFooter = ({ className, children }: HeaderAndFooterProps) => {
    const { pathname } = useLocation();
    const { isMobile } = useMobile();

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
            {!withoutFooterPages.includes(pathname) && (
                <Header
                    className={classNames(
                        '',
                        {
                            [cls.gamesHeader]: withoutFooterPages.includes(pathname),
                            'px-5 md:px-16': withoutFooterPages.includes(pathname),
                        },
                        [],
                    )}
                />
            )}
            {children}
            {!withoutFooterPages.includes(pathname) && (
                <Footer />
            )}
            {isMobile && !withoutFooterPages.includes(pathname) && <MobileMenu />}
        </Container>
    );
};
