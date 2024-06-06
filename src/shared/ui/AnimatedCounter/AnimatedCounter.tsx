import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import cls from './AnimatedCounter.module.scss';

interface AnimatedCounterProps {
    from: number;
    to: number;
    duration: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ from, to, duration }) => {
    const [value, setValue] = useState(0);

    const { number } = useSpring({
        number: value,
        from: { number: from },
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
        <animated.div>{number.interpolate((val) => val.toFixed(0))}</animated.div>
    );
};
