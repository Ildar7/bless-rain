import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './TextBlock.module.scss';

export enum TextBlockTheme {
    NORMAL = 'normal',
    BLUE = 'blue',
    ORANGE = 'orange',
}
interface TextBlockProps {
    className?: string;
    children: ReactNode;
    theme?: TextBlockTheme;
}
export const TextBlock = (props: TextBlockProps) => {
    const {
        className,
        children,
        theme = TextBlockTheme.NORMAL,
    } = props;

    return (
        <div className={classNames(cls.TextBlock, {}, [className, cls[theme]])}>
            {children}
        </div>
    );
};
