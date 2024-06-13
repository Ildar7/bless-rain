import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';

interface ContainerProps {
    className?: string;
    children: ReactNode;
}
export const Container = ({ className, children }: ContainerProps) => (
    <div className={classNames('px-5 md:px-16 w-full h-full min-h-screen', {}, [className])}>
        {children}
    </div>
);
