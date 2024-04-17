import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import './ChatMessage.scss';
import { useSelector } from 'react-redux';
import { getUserName } from 'entities/User';

interface ChatMessageProps {
    className?: string;
    children: ReactNode;
    from: string;
    at: number;
    avatar?: string;
    role?: string;
}
export const ChatMessage = memo((props: ChatMessageProps) => {
    const {
        className,
        children,
        from,
        at,
        avatar,
        role,
    } = props;

    const userName = useSelector(getUserName);

    const getSentTime = () => {
        const sent = new Date(at);
        return sent.toTimeString().split(':').slice(0, 2).join(':');
    };

    return (
        <div className={classNames('message rounded-lg py-3 pl-3 pr-1.5 relative', {}, [className])}>
            <div className="absolute right-2.5 top-2 text-icon-secondary text-sm">
                {getSentTime()}
            </div>
            <div className="flex">
                {avatar
                    ? (
                        <div className="flex items-start mr-3" style={{ flex: '0 0 32px' }}>
                            <img
                                src={avatar}
                                width="32"
                                height="32"
                                className="bg-icon-secondary rounded-full glowing-blue"
                                alt={from}
                            />
                        </div>
                    )
                    : ''}

                <div className="flex flex-col gap-2">
                    <div className={
                        classNames(
                            'font-medium',
                            {},
                            [from === userName ? 'text-primary' : 'text-white'],
                        )
                    }
                    >
                        {from}
                        {role
                            ? (
                                <span
                                    className="bg-secondary text-black
                                    ml-1 rounded-md text-xs px-1 py-0.5 capitalize inline-block"
                                >
                                    {role}
                                </span>
                            )
                            : ''}
                    </div>

                    <div className="text-icon-secondary text-body-sm">
                        {children}
                    </div>

                </div>
            </div>
        </div>
    );
});
