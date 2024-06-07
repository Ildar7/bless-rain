import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import './Icon.scss';

export type IconName = 'animation'
    | 'arrow-box-down' | 'arrow-box-up'
    | 'arrow-down' | 'arrow-left' | 'arrow-right'
    | 'arrow-up' | 'ball' | 'ban' | 'bell' | 'bless' | 'book'
    | 'bot' | 'chatbox' | 'check-circle' | 'check' | 'chevron-down'
    | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'clock'
    | 'cog' | 'coin' | 'coins' | 'copy' | 'coupon' | 'diamond-outline'
    | 'diamond' | 'dice' | 'discord' | 'dots' | 'equal' | 'exclamation-circle'
    | 'exit' | 'face' | 'gamepad' | 'grid' | 'headphones' | 'history'
    | 'home' | 'info' | 'kick' | 'loading-circle' | 'lock' | 'lootbox'
    | 'magnifier' | 'menu-arrow-left' | 'menu-close' | 'menu-open'
    | 'microphone-muted' | 'nft' | 'open-side-menu' | 'play' | 'plus'
    | 'question' | 'rakeback' | 'reply-arrow' | 'rocket' | 'send'
    | 'shield-check' | 'sound-off' | 'sound-on' | 'staking' | 'star-smile'
    | 'star' | 'trash' | 'trend' | 'triangle-circle' | 'triangle-down' | 'triangle-up'
    | 'twitter' | 'user' | 'users' | 'warning' | 'xmark' | 'edit' | 'retweet' | 'comment'
    | 'telegram' | 'social-x' | 'check-list' | 'percents' | 'xbox-gamepad' | 'table';

export type IconGlow = 'pink' | 'primary' | 'green' | 'orange' | 'blue';
interface IconProps {
    name?: IconName;
    glow?: IconGlow;
    mirrored?: boolean;
    className?: string;
}
export const Icon = memo(({
    name, glow, mirrored, className,
}: IconProps) => {
    const getIconClass = () => {
        const classes = [`icon-${name}`];

        glow ? classes.push(`glow-${glow}`) : null;
        mirrored ? classes.push('-scale-x-100') : null;

        return classes.join(' ');
    };

    return (
        <i className={classNames('duration-100', {}, [className, getIconClass()])} style={{ lineHeight: 1 }} />
    );
});
