import React, {
    memo, useCallback, useMemo, useState,
} from 'react';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/User';
import cls from './ReflinkCopy.module.scss';

interface ReflinkCopyProps {
    className?: string;
}

export const ReflinkCopy = memo((props: ReflinkCopyProps) => {
    const {
        className,
    } = props;
    const [copiedAnim, setCopiedAnim] = useState(false);
    const userData = useSelector(getUserData)?.data;

    const refLink = useMemo(() => `https://rain.bless.bet/ref/${userData?.referral_code}`, [userData?.referral_code]);
    // const refLink = useMemo(() => `https://${window.location.host}/ref/${userData?.referral_code}`, [userData?.referral_code]);

    const onCopyHandler = useCallback(async () => {
        setCopiedAnim(true);
        await navigator.clipboard.writeText(refLink);
        setTimeout(() => {
            setCopiedAnim(false);
        }, 4000);
    }, [refLink]);

    return (
        <div className={classNames(cls.ReflinkCopy, {}, [className, 'w-full flex flex-col items-center gap-2'])}>
            <div className={classNames(cls.reflink, {}, ['text-label-md'])}>{refLink}</div>
            <Button
                className={classNames(cls.refBtn, { [cls.refBtnAnim]: copiedAnim }, [])}
                onClick={onCopyHandler}
                disabled={copiedAnim}
            >
                <div className="flex items-center gap-2">
                    <Icon name={copiedAnim ? 'check' : 'copy'} className={cls.copyIcon} />
                    <div className="text-label-md">
                        {copiedAnim ? 'Copied' : 'Reflink'}
                    </div>
                </div>
            </Button>
        </div>
    );
});
