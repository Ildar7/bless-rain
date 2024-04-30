import { classNames } from 'shared/lib/classNames/classNames';
import GameCreditIcon from 'shared/assets/icons/game-credit-icon.svg';
import { Input } from 'shared/ui/Input/Input';
import { ChangeEvent, useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import ArrowAmount from 'shared/assets/icons/coin-flip-page/arrow-amount.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ToastCustom } from 'shared/ui/ToastCustom/ToastCustom';
import cls from './GamesInput.module.scss';

export enum GamesInputTheme {
    NORMAL = 'normal',
    DARK = 'dark',
}
interface GamesInputProps {
    className?: string;
    register?: any;
    watch?: any;
    setValue?: any;
    maxValue?: number;
    minValue?: number;
    withMax?: boolean;
    withIcon?: boolean;
    registerName?: string;
    placeholder?: string;
    theme?: GamesInputTheme;
    disabled?: boolean;
    changeArrowsHidden?: boolean;
    canCopy?: boolean;
    copyValue?: string;
    type?: string;
    additionToValue?: string;
}
export const GamesInput = (props: GamesInputProps) => {
    const {
        className,
        register,
        watch,
        setValue,
        maxValue,
        minValue = 0,
        withMax,
        withIcon,
        registerName,
        placeholder,
        disabled,
        changeArrowsHidden,
        canCopy,
        copyValue,
        additionToValue,
        type = 'number',
        theme = GamesInputTheme.NORMAL,
    } = props;

    const onChangeAmountValue = useCallback((amount: string) => {
        if (type === 'text' && additionToValue) {
            const changeAmount = Number(amount.replace(/%/g, ''));

            if (typeof changeAmount !== 'undefined' && !Number.isNaN(changeAmount)) {
                if (Number(changeAmount) < minValue) {
                    setValue(registerName, `${minValue}${additionToValue}`);
                } else if (Number(changeAmount) > maxValue!) {
                    setValue(registerName, `${maxValue}${additionToValue}`);
                } else {
                    setValue(registerName, `${changeAmount}${additionToValue}`);
                }
            } else {
                setValue(registerName, watch(registerName));
            }
        } else if (amount) {
            if (Number(amount) < minValue) {
                setValue(registerName, `${minValue}`);
            } else if (Number(amount) > maxValue!) {
                setValue(registerName, `${maxValue}`);
            } else {
                setValue(registerName, amount);
            }
        } else {
            setValue(registerName, amount);
        }
    }, [additionToValue, maxValue, minValue, registerName, setValue, type, watch]);

    const onSetMaxValue = useCallback(() => {
        setValue(registerName, `${maxValue}`);
    }, [maxValue, registerName, setValue]);

    const onUpAmount = useCallback(() => {
        if (type === 'text' && additionToValue) {
            const changeAmount = Number(watch(registerName).replace(/%/g, ''));

            if (changeAmount < maxValue!) {
                setValue(registerName, `${changeAmount + 1}${additionToValue}`);
            } else if (changeAmount === maxValue) {
                setValue(registerName, `${maxValue}${additionToValue}`);
            } else {
                setValue(registerName, `0${additionToValue}`);
            }
        } else if (watch(registerName) && Number(watch(registerName)) < maxValue!) {
            setValue(registerName, `${Number(watch(registerName)) + 1}`);
        } else if (watch(registerName) && Number(watch(registerName)) === maxValue) {
            setValue(registerName, `${maxValue}`);
        } else {
            setValue(registerName, '0');
        }
    }, [additionToValue, maxValue, registerName, setValue, type, watch]);

    const onDownAmount = useCallback(() => {
        if (type === 'text' && additionToValue) {
            const changeAmount = Number(watch(registerName).replace(/%/g, ''));

            if (changeAmount > minValue) {
                setValue(registerName, `${changeAmount - 1}${additionToValue}`);
            } else if (changeAmount === minValue) {
                setValue(registerName, `${minValue}${additionToValue}`);
            } else {
                setValue(registerName, `0${additionToValue}`);
            }
        } else if (watch(registerName) && (Number(watch(registerName)) > minValue)) {
            setValue(registerName, `${Number(watch(registerName)) - 1}`);
        } else if (watch(registerName) && (Number(watch(registerName)) === minValue)) {
            setValue(registerName, `${minValue}`);
        } else {
            setValue(registerName, '0');
        }
    }, [additionToValue, minValue, registerName, setValue, type, watch]);

    const onCopyHandler = useCallback(async () => {
        await navigator.clipboard.writeText(copyValue!);
        ToastCustom.success('Successfully copied');
    }, [copyValue]);

    return (
        <div
            className={classNames(cls.GamesInput, {}, [className, cls[theme], 'surface gradient p-1 pl-3 rounded-xl'])}
        >
            {
                withIcon && (
                    <div className={cls.creditIcon}>
                        <GameCreditIcon />
                    </div>
                )
            }
            {canCopy && (
                <Input
                    type="text"
                    className={classNames(cls.copyInput, {}, ['!mb-0 caption-md'])}
                    readOnly
                    value={copyValue}
                />
            )}
            {!canCopy && (
                <Input
                    type={type}
                    placeholder={placeholder}
                    className="!mb-0"
                    min={minValue}
                    readOnly={disabled}
                    {...register(registerName)}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => { onChangeAmountValue(e.target.value); }}
                />
            )}
            <div className={cls.betAmountSettings}>
                {
                    withMax && (
                        <Button
                            theme="tertiary"
                            type="button"
                            className={classNames(cls.maxButton, {}, ['caption-sm rounded-lg'])}
                            onClick={onSetMaxValue}
                            disabled={disabled}
                        >
                            Max
                        </Button>
                    )
                }
                {
                    canCopy && (
                        <Button
                            theme="tertiary"
                            type="button"
                            className={classNames(cls.copyButton, {}, ['caption-sm rounded-lg'])}
                            onClick={onCopyHandler}
                        >
                            <Icon name="copy" />
                        </Button>
                    )
                }
                {!changeArrowsHidden && (
                    <div className={cls.changeAmountBtns}>
                        <Button
                            theme="tertiary"
                            type="button"
                            className={classNames(cls.changeAmountBtn, {}, [cls.arrowUp, 'rounded-t-lg'])}
                            onClick={onUpAmount}
                            disabled={disabled}
                        >
                            <ArrowAmount />
                        </Button>
                        <Button
                            theme="tertiary"
                            type="button"
                            className={classNames(cls.changeAmountBtn, {}, [cls.arrowDown, 'rounded-b-lg'])}
                            onClick={onDownAmount}
                            disabled={disabled}
                        >
                            <ArrowAmount style={{ rotate: '180deg' }} />
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
