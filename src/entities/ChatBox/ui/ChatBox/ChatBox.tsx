import { Icon } from 'shared/ui/Icon/Icon';
import { Button } from 'shared/ui/Button/Button';
import Bars from 'shared/assets/icons/bars.svg';
import {
    ChangeEvent, FormEvent, ReactNode, useCallback, useState,
} from 'react';
import './ChatBox.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserIsAuth } from 'entities/User';
import { getChatMessages } from 'entities/ChatBox';
import { classNames } from 'shared/lib/classNames/classNames';
import { chatActions } from '../../model/slice/chatSlice';
import cls from './ChatBox.module.scss';

interface ChatBoxProps {
    children: ReactNode;
    users?: number;
    banned: boolean;
}
export const ChatBox = (props: ChatBoxProps) => {
    const {
        children,
        users = 0,
        banned,
    } = props;
    const userIsAuth = useSelector(getUserIsAuth);
    const chatMessages = useSelector(getChatMessages);
    const [newMessage, setNewMessage] = useState('');
    const dispatch = useAppDispatch();

    const onRulesModalOpen = () => {
        dispatch(chatActions.openModal());
    };

    const onCloseChat = () => {
        dispatch(chatActions.closeChat());
    };

    const sendMessage = () => {
        if (!newMessage) return;

        dispatch(chatActions.addNewMessage([...chatMessages, {
            text: newMessage,
            at: new Date().getTime(),
            from: 'Mishutkin',
            role: '',
        }]));

        setNewMessage('');
    };

    const onChangeNewMessage = useCallback((value: string) => {
        setNewMessage(value);
    }, []);

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendMessage();
    };

    return (
        <>
            <div className="h-screen w-screen bg-dark fixed top-0 left-0 z-60 sm:hidden" />

            <div
                className="flex flex-col items-center md:relative
                md:z-auto fixed sm:absolute right-4 left-4 sm:left-auto
                z-60 top-4 sm:top-auto sm:w-72 lg:w-80"
            >
                <div className="flex surface gap-1 w-full">
                    <button
                        type="button"
                        className="w-10 h-10 grow-0 flex
                        items-center justify-center inner hover:text-effects-blue duration-100"
                        onClick={onRulesModalOpen}
                    >
                        <Icon name="book" className="font-bold text-xl text-icon-secondary" />
                    </button>

                    <div className="flex grow justify-between inner items-center px-3">
                        <div className="title-sm">CHAT</div>

                        <div className="flex gap-0.5 items-center">
                            <Icon name="user" glow="green" />
                            <div className="text-label-sm text-secondary">{users}</div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="w-10 h-10 grow-0 flex items-center
                        justify-center inner text-icon-secondary hover:text-white"
                        onClick={onCloseChat}
                    >
                        <Icon name="menu-arrow-left" mirrored className="font-bold text-xl duration-100" />
                    </button>
                </div>

                <div className="px-5 ">
                    <Bars />
                </div>

                <div className="surface w-full p-1.5">
                    <div
                        className="inner overflow-y-scroll overscroll-contain overflow-x-hidden relative"
                        style={{ height: 500 }}
                    >
                        <div className="sticky w-full top-0 h-12 chat-shadow z-20" />
                        <div className="p-2 -mt-8">
                            {children}
                        </div>
                    </div>

                    {userIsAuth
                        ? (
                            <form className="mt-4" onSubmit={onFormSubmit}>
                                <div
                                    className="textfield bg-gradient-surface"
                                >
                                    <Icon name="face" glow="orange" className="text-2xl grow-0" />
                                    <input
                                        type="text"
                                        className={classNames(cls.chatInput, {}, ['bg-transparent grow'])}
                                        placeholder="Say something"
                                        value={newMessage}
                                        disabled={banned}
                                        onChange={
                                            (e: ChangeEvent<HTMLInputElement>) => {
                                                onChangeNewMessage(e.target.value);
                                            }
                                        }
                                    />
                                    <Button
                                        disabled={banned}
                                        size="square"
                                        className={classNames(cls.sendBtn, {}, ['basis-8'])}
                                        onClick={sendMessage}
                                    >
                                        <Icon name="send" className="text-2xl font-bold" />
                                    </Button>
                                </div>
                            </form>
                        )
                        : ''}
                </div>
            </div>
        </>
    );
};
