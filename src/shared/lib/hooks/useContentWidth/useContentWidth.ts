import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getChatOpened } from 'entities/ChatBox';
import { useMobile } from 'shared/lib/hooks/useMobile/useMobile';

export const useContentWidth = (contentWidth: number, ref: any) => {
    const [contentColumn, setContentColumn] = useState(false);
    const chatOpened = useSelector(getChatOpened);
    const { width } = useMobile();

    useEffect(() => {
        setTimeout(() => {
            if (ref.current) {
                if (ref.current.offsetWidth <= contentWidth) {
                    setContentColumn(true);
                } else {
                    setContentColumn(false);
                }
            }
        }, 100);
    }, [ref, chatOpened, width]);

    return contentColumn;
};
