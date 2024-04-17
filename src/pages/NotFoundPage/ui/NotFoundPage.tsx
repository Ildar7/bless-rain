import { classNames } from 'shared/lib/classNames/classNames';
import { Helmet } from 'react-helmet';
import React from 'react';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => (
    <>
        <Helmet>
            <title>Bless Rain - Page not found</title>
        </Helmet>
        <div className={classNames(cls.NotFoundPage, {}, [className, 'font-semibold text-4xl'])}>
            404 Page not found
        </div>
    </>

);
