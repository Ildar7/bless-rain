import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollEffect = (targetRef: any, neededHash: string, timeout: number) => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash === neededHash) {
            setTimeout(() => {
                targetRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }, timeout);
        }
        // eslint-disable-next-line
    }, [hash, neededHash, pathname, targetRef.current, targetRef]);
};
