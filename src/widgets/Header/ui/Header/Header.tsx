import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Header.module.scss';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

interface HeaderProps {
  className?: string;
}
export const Header = memo((props: HeaderProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.HeaderWrapper, {}, [className])}>
            <HeaderMenu />
        </div>
    );
});
