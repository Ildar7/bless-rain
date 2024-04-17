import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import cls from './AnimatedCounter.module.scss';

interface AnimatedCounterProps {
    to: number;
    duration: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ to, duration }) => {
    const [value, setValue] = useState(0);

    const { number } = useSpring({
        number: value,
        from: { number: 0 },
        config: { duration },
        onRest: () => {
            // Анимация завершена
        },
    });

    // Вызовите setValue с желаемым значением to для начала анимации
    // В данном случае, мы сначала устанавливаем значение to после монтирования компонента.
    React.useEffect(() => {
        setValue(to);
    }, [to]);

    return (
        <div className={cls.coef}>
            <animated.div>{number.interpolate((val) => val.toFixed(2))}</animated.div>
            x
        </div>
    );
};
