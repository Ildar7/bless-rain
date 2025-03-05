import { useEffect, useState } from 'react';

export const useMobile = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isBigScreen, setIsBigScreen] = useState(false);

    useEffect(() => {
        if (width >= 1920) {
            setIsBigScreen(true);
        } else {
            setIsBigScreen(false);
        }
    }, [width]);

    useEffect(() => {
        if (width < 1024) {
            setIsTablet(true);
        } else {
            setIsTablet(false);
        }
    }, [width]);

    useEffect(() => {
        if (width <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [width]);

    useEffect(() => {
        const handleResize = (event: Event) => {
            const target = event.target as Window;
            setWidth(target.innerWidth);
            setHeight(target.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        width,
        height,
        isMobile,
        isTablet,
        isBigScreen,
    };
};
