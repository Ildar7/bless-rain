import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { TaskItem } from 'widgets/TaskItem';
import { Helmet } from 'react-helmet';
import cls from './EarnPage.module.scss';

interface EarnPageProps {
    className?: string;
}

const EarnPage = memo((props: EarnPageProps) => {
    const {
        className,
    } = props;

    return (
        <>
            <Helmet>
                <title>Bless Rain - Earn</title>
            </Helmet>
            <div className={classNames(cls.EarnPage, {}, [className, 'mt-[-36px] mb-[130px]'])}>
                <div className={cls.title}>
                    Earn more
                    <br />
                    coins
                </div>
                <div className="mt-8">
                    <div className="title-sm text-icon-secondary">Daily tasks</div>
                    <div className="mt-4 flex flex-col gap-4">
                        <TaskItem
                            iconName="check-list-boxed"
                            taskName="Daily reward"
                            taskDescr="+1000 coins"
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <div className="title-sm text-icon-secondary">Tasks list</div>
                    <div className="mt-4 flex flex-col gap-4">
                        <TaskItem
                            iconName="telegram-plane"
                            taskName="Join our TG channel"
                            taskDescr="+1000 coins"
                        />
                        <TaskItem
                            iconName="social-x"
                            taskName="Follow our X account"
                            taskDescr="+1000 coins"
                            disabled
                        />
                        <TaskItem
                            iconName="social-x"
                            taskName="Support our tweet"
                            taskDescr="+1000 coins"
                            withCheckName="Open Telegram"
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <div className="title-sm text-icon-secondary">Completed</div>
                    <div className="mt-4 flex flex-col gap-4">
                        <TaskItem
                            iconName="telegram-plane"
                            taskName="Join our TG channel"
                            taskDescr="+1000 coins"
                            completed
                        />
                        <TaskItem
                            iconName="instagram"
                            taskName="Follow our X account"
                            taskDescr="+1000 coins"
                            completed
                        />
                        <TaskItem
                            iconName="youtube"
                            taskName="Support our tweet"
                            taskDescr="+1000 coins"
                            completed
                        />
                    </div>
                </div>
            </div>

        </>
    );
});

export default EarnPage;
