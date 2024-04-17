import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, useMemo } from 'react';
import { FilterSwitcher } from 'widgets/FilterSwitcher';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './GamesHistoryContainer.module.scss';

interface GamesHistoryContainerProps {
  className?: string;
  children: ReactNode;
}

export const GamesHistoryContainer = ({ className, children }: GamesHistoryContainerProps) => {
    const filtersList = useMemo(() => [
        {
            id: 1,
            name: 'All games',
        },
        {
            id: 2,
            name: 'One game',
        },
        {
            id: 3,
            name: 'Two games',
        },
        {
            id: 4,
            name: 'Three games',
        },
        {
            id: 5,
            name: 'Four games',
        },
    ], []);

    return (
        <div className={classNames(cls.GamesHistoryContainer, {}, [className])}>
            <div className={classNames(cls.titleBlock, {}, ['flex justify-between items-center'])}>
                <div className="h2">Game history</div>
                <div className={classNames(cls.titleSettings, {}, ['flex gap-2'])}>
                    <FilterSwitcher
                        className={cls.titleSwitcher}
                        filtersList={filtersList}
                    />
                    <div
                        className="flex gap-1
                        items-center px-1 rounded-lg text-icon-secondary text-xl"
                    >
                        <button
                            type="button"
                            className={classNames(
                                cls.arrow,
                                {},
                                ['bg-surface flex items-center justify-center rounded-lg'],
                            )}
                        >
                            <Icon name="chevron-left" className={cls.arrowIcon} />
                        </button>
                        <button
                            type="button"
                            className={classNames(
                                cls.arrow,
                                {},
                                ['bg-surface flex items-center justify-center rounded-lg'],
                            )}
                        >
                            <Icon name="chevron-right" className={cls.arrowIcon} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={classNames(cls.content, {}, [])}>
                {children}
            </div>
        </div>
    );
};
