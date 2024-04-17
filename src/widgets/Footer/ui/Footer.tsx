import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import './Footer.scss';
import FooterLogo from 'shared/assets/icons/png/footer-logo.png';

interface FooterProps {
  className?: string;
}
export const Footer = ({ className }: FooterProps) => (
    <footer className={classNames('mt-10 md:mt-20 w-full', {}, [className])}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
            <div className="flex justify-between md:justify-start w-full md:w-auto
            items-center gap-[75px] md:gap-[125px]"
            >
                <div className="footer__logo">
                    <img src={FooterLogo} alt="bless" />
                </div>

                <div className="flex gap-3">
                    <a className="surface p-1" href="https://twitter.com">
                        <div className="inner px-3 py-2 flex items-center justify-center h-[40px]">
                            <Icon name="twitter" />
                        </div>
                    </a>
                    <a className="surface p-1" href="https://discord.com">
                        <div className="inner px-3 py-2 flex items-center justify-center h-[40px]">
                            <Icon name="discord" />
                        </div>
                    </a>
                </div>
            </div>
            <div className="text-xs">Copyright © 2024 Bless. All rights reserved.</div>
        </div>

    </footer>
);
