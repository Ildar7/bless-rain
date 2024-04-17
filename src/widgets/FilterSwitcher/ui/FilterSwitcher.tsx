import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { useEffect, useRef, useState } from 'react';
import autoAnimate from '@formkit/auto-animate';
import GameCreditIcon from 'shared/assets/icons/game-credit-icon.svg';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import cls from './FilterSwitcher.module.scss';

export enum ListTheme {
    PRIMARY = 'primary',
    WHITE = 'white',
}
export enum ListSize {
    SMALL = 'small',
    LARGE = 'large',
}
interface FilterSwitcherList {
    id: number;
    name: string;
    value?: number;
}
interface FilterSwitcherProps {
    className?: string;
    filtersList: FilterSwitcherList[];
    withIcon?: boolean;
    listSize?: ListSize;
    listTheme?: ListTheme;
    textWeight?: TextWeight;
}
export const FilterSwitcher = (props: FilterSwitcherProps) => {
    const {
        className,
        filtersList,
        withIcon,
        listSize = ListSize.SMALL,
        listTheme = ListTheme.PRIMARY,
        textWeight = TextWeight.SEMIBOLD,
    } = props;
    const [filtersOpened, setFiltersOpened] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(filtersList[0].name);
    const [selectedFilterValue, setSelectedFilterValue] = useState(
        filtersList.filter((item) => item.name === selectedFilter)[0].value,
    );
    const filterListRef = useRef<HTMLDivElement | null>(null);

    const closeFilters = () => {
        setFiltersOpened(false);
    };

    const toggleFilters = () => {
        setFiltersOpened((prevState) => !prevState);
    };

    const setNewFilter = (filter: string) => {
        setSelectedFilter(filter);
        closeFilters();
    };

    useEffect(() => {
        filterListRef.current && autoAnimate(filterListRef.current, { duration: 200 });
    }, [filterListRef]);

    useEffect(() => {
        setSelectedFilterValue(filtersList.filter((item) => item.name === selectedFilter)[0].value);
    }, [filtersList, selectedFilter]);

    return (
        <div
            className={classNames(
                cls.FilterSwitcher,
                {},
                [className, 'text-label-md'],
            )}
            ref={filterListRef}
        >
            <button
                type="button"
                className={classNames(
                    cls.main,
                    {},
                    [
                        'bg-gradient-to-r from-surface to-surface-dark rounded-lg px-4',
                        cls[listSize],
                        cls[listTheme],
                    ],
                )}
                onClick={toggleFilters}
            >
                <Text
                    className={cls.filterTitle}
                    size={TextSize.M}
                    weight={textWeight}
                >
                    {withIcon && (
                        <GameCreditIcon />
                    )}
                    {selectedFilter}
                </Text>
                <div className={cls.arrowWrapper}>
                    {typeof selectedFilterValue === 'number' && (
                        <div className={classNames(cls.arrowValue, {}, ['text-label-md'])}>
                            {selectedFilterValue.toFixed(2)}
                        </div>
                    )}
                    <Icon
                        name="chevron-down"
                        className={classNames(
                            cls.arrowIcon,
                            { [cls.iconRotated]: filtersOpened },
                            [],
                        )}
                    />
                </div>
            </button>

            {
                filtersOpened && (
                    <div
                        className={
                            classNames(
                                cls.filters,
                                { },
                                ['inner rounded-lg'],
                            )
                        }
                    >
                        {
                            filtersList.map((filterItem) => (
                                filterItem.name !== selectedFilter
                                    ? (
                                        <button
                                            type="button"
                                            className={cls.filter}
                                            key={filterItem.id}
                                            onClick={() => { setNewFilter(filterItem.name); }}
                                        >
                                            {filterItem.name}
                                        </button>
                                    )
                                    : ''
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};
