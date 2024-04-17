import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { Icon, IconName } from 'shared/ui/Icon/Icon';
import { useCallback } from 'react';
import cls from './GamesTabs.module.scss';

export interface GamesTabsInterface {
    id: number;
    name: string;
    active: boolean;
    icon?: IconName;
}

interface GamesTabsProps {
    className?: string;
    tabsClassName?: string;
    disabled?: boolean;
    tabsSize?: ButtonSize;
    tabs: GamesTabsInterface[];
    setTabs: (tabs: GamesTabsInterface[]) => void;
}
export const GamesTabs = (props: GamesTabsProps) => {
    const {
        className,
        tabsClassName,
        disabled,
        tabsSize,
        tabs,
        setTabs,
    } = props;

    const onChangeTab = useCallback((tabId: number) => {
        const deactiveTabs = tabs.map((tab) => (
            {
                ...tab,
                active: false,
            }
        ));

        const withActiveTab = deactiveTabs.map((tab) => (
            tab.id === tabId
                ? {
                    ...tab,
                    active: true,
                } : {
                    ...tab,
                }
        ));

        setTabs(withActiveTab);
    }, [setTabs, tabs]);

    return (
        <div className={classNames(cls.GamesTabs, {}, [className])}>
            {
                tabs.map((tab) => (
                    <Button
                        key={tab.id}
                        size={tabsSize}
                        theme={tab.active ? 'tab' : 'none'}
                        className={classNames(
                            cls.tab,
                            { },
                            [tabsClassName, 'rounded-lg'],
                        )}
                        onClick={() => { onChangeTab(tab.id); }}
                        disabled={disabled}
                    >
                        {tab.icon && (
                            <Icon
                                name={tab.icon}
                                className="text-2xl"
                            />
                        )}
                        {tab.name}
                    </Button>
                ))
            }
        </div>
    );
};
