import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Input } from 'shared/ui/Input/Input';
import { ChangeEvent, useCallback } from 'react';
import cls from './SearchInput.module.scss';

interface SearchInputProps {
    className?: string;
    register: any;
    setValue: any;
    registerName: string;
    placeholder?: string;
}
export const SearchInput = (props: SearchInputProps) => {
    const {
        className,
        register,
        setValue,
        registerName,
        placeholder,
    } = props;

    const onChangeValue = useCallback((value: string) => {
        setValue(registerName, value);
    }, [registerName, setValue]);

    return (
        <div className={classNames(cls.SearchInput, {}, [className, 'surface gradient p-3 rounded-xl'])}>
            <Icon name="magnifier" className="text-2xl text-icon-secondary" />
            <Input
                placeholder={placeholder}
                className="!mb-0"
                {...register(registerName)}
                onChange={(e: ChangeEvent<HTMLInputElement>) => { onChangeValue(e.target.value); }}
            />
        </div>
    );
};
