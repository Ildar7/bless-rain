import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import './Carousel.scss';

interface CarouselProps {
  className?: string;
  children: ReactNode;
}
export const Carousel = ({ className, children }: CarouselProps) => (
    <div className={classNames('carousel relative sm:block', {}, [className])}>
        <div className="carousel-content rounded-md relative">
            <div className="glowing-blue dashed-border rounded-md">
                <span className="dashed-border-top">
                    <span className="dashed-border-bottom" />
                </span>
            </div>
            {children}
        </div>
    </div>
);
