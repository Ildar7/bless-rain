import React, { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { appActions } from 'entities/App';

interface GifLoaderProps {
    gifUrls: string[];
}

export const GifLoader = memo((props: GifLoaderProps) => {
    const {
        gifUrls,
    } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const loadImages = async () => {
            const promises = gifUrls.map((url) => new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = () => resolve(url);
                img.onerror = () => reject(url);
            }));

            try {
                await Promise.all(promises);
                dispatch(appActions.changeLoadingTapGifs(false));
            } catch (error) {
                console.error('Failed to load images:', error);
                dispatch(appActions.changeLoadingTapGifs(false));
            }
        };

        loadImages();
    }, [dispatch, gifUrls]);

    return (<></>);
});
