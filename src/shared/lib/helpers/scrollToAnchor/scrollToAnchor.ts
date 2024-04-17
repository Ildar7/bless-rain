import React from 'react';

export const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, anchorId: string) => {
    e.preventDefault();
    const anchor = document.getElementById(anchorId);
    if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', anchor.id);
    }
};
