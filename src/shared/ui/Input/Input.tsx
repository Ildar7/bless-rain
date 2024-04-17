import React, { forwardRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Input.scss';
import { Icon } from 'shared/ui/Icon/Icon';

export const Input = forwardRef((props: any, ref) => {
    const {
        className,
        placeholder,
        type = 'text',
        large,
        label,
        flat,
        rightIcon,
        leftIcon,
        checked,
        id,
        ...otherProps
    } = props;

    const getContainerClass = () => {
        const classes = [
            flat ? 'input-flat' : 'input-gradient',
            large ? 'input-lg' : 'input-md',
        ];

        return classes.join(' ');
    };

    return (
        type !== 'checkbox' && type !== 'radio'
            ? (
                <div className={classNames('flex flex-col w-full mb-4', {}, [className])}>
                    {
                        label
                            ? (
                                <div className="caption-lg mb-2 text-icon-secondary">
                                    {label}
                                </div>
                            )
                            : ''
                    }
                    <div className={classNames('w-full', {}, [getContainerClass()])}>
                        <input
                            className="w-full"
                            type={type}
                            placeholder={placeholder}
                            ref={ref}
                            {...otherProps}
                        />
                    </div>
                </div>
            )
            : (
                <div className={classNames('flex items-center gap-3', {}, [className])}>
                    <input
                        className="checkbox-input"
                        type={type}
                        placeholder={placeholder}
                        ref={ref}
                        id={id}
                        {...otherProps}
                    />

                    <label htmlFor={id} className="cursor-pointer">
                        {label}
                    </label>
                </div>
            )
    );
});
