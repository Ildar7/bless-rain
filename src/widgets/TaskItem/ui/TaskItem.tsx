import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon, IconName } from 'shared/ui/Icon/Icon';
import { Button } from 'shared/ui/Button/Button';
import cls from './TaskItem.module.scss';

interface TaskItemProps {
    className?: string;
    iconName: IconName;
    taskName: string;
    taskDescr: string;
    disabled?: boolean;
    completed?: boolean;
    withCheckName?: string;
    link?: string;
    withoutBtn?: boolean;
    onClick?: () => void;
}

export const TaskItem = memo((props: TaskItemProps) => {
    const {
        className,
        iconName,
        taskName,
        taskDescr,
        disabled,
        completed,
        withCheckName,
        link,
        withoutBtn,
        onClick,
    } = props;
    const [checkIsLoading, setCheckIsLoading] = useState(false);
    const [checkError, setCheckError] = useState(false);

    const onClaim = useCallback(() => {
        console.log('claimed');
    }, []);

    const onChecking = useCallback(() => {
        setCheckIsLoading(true);

        setTimeout(() => {
            setCheckIsLoading(false);
            setCheckError(true);

            setTimeout(() => {
                setCheckError(false);
            }, 4000);
        }, 1500);
    }, []);

    return (
        <div
            className={classNames(
                cls.TaskItem,
                {
                    [cls.TaskItemCompleted]: completed,
                    [cls.TaskItemCheck]: !!withCheckName,
                },
                [className],
            )}
            onClick={onClick}
        >
            <div className={cls.content}>
                <div className="flex items-center gap-4">
                    <Icon className={cls.icon} name={iconName} />
                    <div>
                        <div className={classNames(cls.name, {}, ['text-label-lg'])}>{taskName}</div>
                        <div className={classNames(cls.points, {}, ['text-label-sm'])}>
                            {taskDescr}
                        </div>
                    </div>
                </div>
                {!withoutBtn && (
                    <Button
                        size="xl"
                        theme="primary"
                        className={classNames(cls.btn, { [cls.btnCompleted]: completed }, ['rounded-lg'])}
                        disabled={disabled || completed || checkIsLoading || checkError}
                        onClick={withCheckName ? onChecking : onClaim}
                    >
                        {!withCheckName
                            ? (
                                completed
                                    ? (<Icon name="check" className={cls.checkIcon} />)
                                    : 'Claim'
                            )
                            : (
                                <>
                                    {checkIsLoading && (<span className={cls.loader} />)}
                                    {checkError && (<Icon name="xmark-rounded" className={cls.xmark} />)}
                                    {!checkError && !checkIsLoading && 'Check'}
                                </>
                            )}

                    </Button>
                )}

            </div>
            {withCheckName && (
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className={classNames(cls.openLink, {}, ['text-label-md mt-2'])}
                >
                    {withCheckName}
                </a>
            )}
        </div>
    );
});
