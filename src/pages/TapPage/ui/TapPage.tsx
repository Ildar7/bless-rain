import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Tap } from 'entities/Tap';
import { Helmet } from 'react-helmet';
import cls from './TapPage.module.scss';

interface TapPageProps {
    className?: string;
}

const TapPage = memo((props: TapPageProps) => {
    const {
        className,
    } = props;

    return (
        <>
            <Helmet>
                <title>Bless Rain - Tap</title>
            </Helmet>
            <div className={classNames(cls.TapPage, {}, [className, 'mt-[-60px]'])}>
                <Tap />
            </div>
        </>
    );
});

export default TapPage;
