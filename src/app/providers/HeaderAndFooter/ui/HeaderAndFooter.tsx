import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';
import './HeaderAndFooter.scss';
import { Container } from '../../Container';

interface HeaderAndFooterProps {
    className?: string;
    children: ReactNode;
}

export const HeaderAndFooter = ({ className, children }: HeaderAndFooterProps) => (
    <Container
        className={
            classNames(
                'relative flex flex-col items-center sm:w-full overflow-x-hidden',
                {},
                [className],
            )
        }
    >
        {/* <AppPreloader /> */}

        <Header />
        {children}
        <Footer />
    </Container>
);
