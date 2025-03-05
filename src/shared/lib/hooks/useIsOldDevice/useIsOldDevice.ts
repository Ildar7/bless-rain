import { useEffect, useState } from 'react';

const useIsOldDevice = (): boolean => {
    const [isOldDevice, setIsOldDevice] = useState<boolean>(false);

    useEffect(() => {
        const { userAgent } = navigator;

        // @ts-ignore
        const getBrowserVersion = (regex: RegExp): number | NaN => {
            const match = userAgent.match(regex);
            return match ? parseInt(match[1], 10) : NaN;
        };

        const checkBrowserVersion = (): boolean => {
            if (userAgent.includes('MSIE ') || userAgent.includes('Trident/')) {
                // Internet Explorer
                const version = getBrowserVersion(/MSIE (\d+)/) || getBrowserVersion(/rv:(\d+)/);
                return version && version < 10;
            } if (userAgent.includes('Edge/')) {
                // Microsoft Edge (до Chromium)
                const version = getBrowserVersion(/Edge\/(\d+)/);
                return version && version < 12;
            } if (userAgent.includes('Chrome/')) {
                // Google Chrome
                const version = getBrowserVersion(/Chrome\/(\d+)/);
                return version && version < 50;
            } if (userAgent.includes('Firefox/')) {
                // Mozilla Firefox
                const version = getBrowserVersion(/Firefox\/(\d+)/);
                return version && version < 40;
            } if (userAgent.includes('Safari/') && !userAgent.includes('Chrome/')) {
                // Apple Safari
                const version = getBrowserVersion(/Version\/(\d+)/);
                return version && version < 9;
            } if (userAgent.includes('Opera/') || userAgent.includes('OPR/')) {
                // Opera
                const version = getBrowserVersion(/Opera\/(\d+)/) || getBrowserVersion(/OPR\/(\d+)/);
                return version && version < 40;
            }
            return false;
        };

        const checkModernFeatures = (): boolean =>
            // Проверка поддержки важных современных API
            (
                'IntersectionObserver' in window
                && 'fetch' in window
                && 'Promise' in window
                && 'requestAnimationFrame' in window
                && 'WebAssembly' in window
            );
        const checkPerformance = (): boolean => {
            const start = performance.now();
            for (let i = 0; i < 1000000; i++) {
                // Некоторое бессмысленное вычисление для тестирования производительности
                Math.sqrt(i);
            }
            const duration = performance.now() - start;
            return duration > 50; // Задержка больше 50 мс может указывать на слабое устройство
        };

        const isOld = checkBrowserVersion() || !checkModernFeatures() || checkPerformance();
        setIsOldDevice(isOld);
    }, []);

    return isOldDevice;
};

export default useIsOldDevice;
