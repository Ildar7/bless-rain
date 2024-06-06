import React, { memo, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { animated, useSpring } from 'react-spring';
import cls from './AnimatedText.module.scss';

interface AnimatedTextProps {
    className?: string;
    text: string;
}

export const AnimatedText = memo((props: AnimatedTextProps) => {
    const {
        className,
        text,
    } = props;
    const textRef = useRef<HTMLDivElement | null>(null);

    const letters = text.split('');

    const springs = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 50, // Задержка между появлением букв в миллисекундах
        config: { duration: 350 }, // Длительность анимации в миллисекундах
        reset: true,
        onRest: () => {
            if (textRef.current && textRef.current.clientWidth > 0) {
                textRef.current.style.opacity = '1';
            }
        },
    });

    return (
        <div className={classNames(cls.AnimatedText, {}, [className])}>
            <animated.h1 style={springs} ref={textRef}>
                {letters.map((letter, index) => (
                    <animated.span
                        key={index}
                        style={{
                            opacity: springs.opacity.interpolate({
                                range: [index / letters.length - 0.1, index / letters.length + 0.1],
                                output: [0, 1],
                            }),
                        }}
                    >
                        {letter}
                    </animated.span>
                ))}
            </animated.h1>
        </div>
    );
});
