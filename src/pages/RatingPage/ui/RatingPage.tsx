import React, { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './RatingPage.scss';
import { appActions } from 'entities/App';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Sidebar } from 'widgets/Sidebar';
import GirlImg from 'shared/assets/icons/png/rating-img.png';
import { SidebarItems } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { Helmet } from 'react-helmet';
import UsersIcon from 'shared/assets/icons/users.svg';
import { ReflinkCopy } from 'widgets/ReflinkCopy';
import cls from './RatingPage.module.scss';

export interface RatingItem {
    id: number;
    img: string;
    name: string;
    points: number;
    place: number;
}

const RatingPage = () => {
    const dispatch = useAppDispatch();
    const [sidebarItems, setSidebarItems] = useState<SidebarItems<RatingItem[]>[]>([
        {
            id: 1,
            text: 'For all the time',
            active: true,
            items: [
                {
                    id: 1,
                    img: GirlImg,
                    points: 7564,
                    place: 1,
                    name: 'Sosthène Wlogan',
                },
                {
                    id: 2,
                    img: GirlImg,
                    points: 7312,
                    place: 2,
                    name: 'Iréné Codjo',
                },
                {
                    id: 3,
                    img: GirlImg,
                    points: 7222,
                    place: 3,
                    name: 'Kowiou Akplogan',
                },
                {
                    id: 4,
                    img: GirlImg,
                    points: 6879,
                    place: 4,
                    name: 'Wilfrid Codjo',
                },
                {
                    id: 5,
                    img: GirlImg,
                    points: 6324,
                    place: 5,
                    name: 'Roland Yarigo',
                },
                {
                    id: 6,
                    img: GirlImg,
                    points: 6283,
                    place: 6,
                    name: 'Antony Bessan',
                },
            ],
        },
        {
            id: 2,
            text: 'Last month',
            active: false,
            items: [
                {
                    id: 1,
                    img: GirlImg,
                    points: 9999,
                    place: 1,
                    name: 'Wilfrid Codjo',
                },
                {
                    id: 2,
                    img: GirlImg,
                    points: 8888,
                    place: 2,
                    name: 'Iréné Codjo',
                },
                {
                    id: 3,
                    img: GirlImg,
                    points: 7777,
                    place: 3,
                    name: 'Kowiou Akplogan',
                },
                {
                    id: 4,
                    img: GirlImg,
                    points: 6666,
                    place: 4,
                    name: 'Sosthène Wlogan',
                },
            ],
        },
        {
            id: 3,
            text: 'Last week',
            active: false,
            items: [
                {
                    id: 1,
                    img: GirlImg,
                    points: 9876,
                    place: 1,
                    name: 'Wilfrid Codjo',
                },
                {
                    id: 2,
                    img: GirlImg,
                    points: 8765,
                    place: 2,
                    name: 'Iréné Codjo',
                },
                {
                    id: 3,
                    img: GirlImg,
                    points: 7654,
                    place: 3,
                    name: 'Sosthène Sosthène',
                },
                {
                    id: 4,
                    img: GirlImg,
                    points: 6543,
                    place: 4,
                    name: 'Kowiou Akplogan',
                },
                {
                    id: 5,
                    img: GirlImg,
                    points: 5432,
                    place: 5,
                    name: 'Wlogan Wlogan',
                },
            ],
        },
        {
            id: 4,
            text: 'Last day',
            active: false,
            items: [
                {
                    id: 1,
                    img: GirlImg,
                    points: 9876,
                    place: 1,
                    name: 'Wilfrid Codjo',
                },
                {
                    id: 2,
                    img: GirlImg,
                    points: 8765,
                    place: 2,
                    name: 'Iréné Codjo',
                },
                {
                    id: 3,
                    img: GirlImg,
                    points: 7654,
                    place: 3,
                    name: 'Sosthène Sosthène',
                },
                {
                    id: 4,
                    img: GirlImg,
                    points: 6543,
                    place: 4,
                    name: 'Kowiou Akplogan',
                },
                {
                    id: 5,
                    img: GirlImg,
                    points: 5432,
                    place: 5,
                    name: 'Wlogan Wlogan',
                },
                {
                    id: 6,
                    img: GirlImg,
                    points: 9876,
                    place: 6,
                    name: 'Wilfrid Codjo',
                },
                {
                    id: 7,
                    img: GirlImg,
                    points: 8765,
                    place: 7,
                    name: 'Iréné Codjo',
                },
                {
                    id: 8,
                    img: GirlImg,
                    points: 7654,
                    place: 8,
                    name: 'Sosthène Sosthène',
                },
                {
                    id: 9,
                    img: GirlImg,
                    points: 6543,
                    place: 9,
                    name: 'Kowiou Akplogan',
                },
            ],
        },
    ]);

    useEffect(() => {
        dispatch(appActions.setPlayingMode('rating'));
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Bless Rain - Friends</title>
            </Helmet>
            <div className={classNames(
                'flex flex-col items-start gap-6 '
                + 'justify-start relative h-full mt-[-67px] mb-[140px]',
                {},
                [],
            )}
            >
                <Sidebar
                    items={sidebarItems}
                    setItems={setSidebarItems}
                />

                <div
                    className="relative lobby-bless-item lobby-bless-item-linear-bg !w-full sm:flex-1"
                >
                    <div className="relative z-10 py-5 px-2.5">
                        <div className={cls.row}>
                            <div className={classNames(cls.userName, {}, [cls.rowItem, 'caption-md-semibold'])}>
                                USername
                            </div>
                            <div className={classNames(cls.points, {}, [cls.rowItem, 'caption-md-semibold'])}>
                                points
                            </div>
                            <div className={classNames(cls.place, {}, [cls.rowItem, 'caption-md-semibold'])}>
                                place
                            </div>
                        </div>
                        <div className={cls.rowsContent}>
                            {
                                sidebarItems.map((item) => {
                                    if (!item.active) return '';

                                    return item.items?.map((activeItem) => (
                                        <div
                                            key={activeItem.id}
                                            className={classNames(cls.rowContentSurface, {}, [])}
                                        >
                                            <div className={classNames(cls.row, {}, [cls.rowContentRow])}>
                                                <div
                                                    className={classNames(cls.userName, {}, [cls.rowItem, 'caption-lg'])}
                                                >
                                                    <div className={cls.rowImg}>
                                                        <img src={activeItem.img} alt="girl-avatar" />
                                                    </div>
                                                    <div className="normal-case">
                                                        {activeItem.name}
                                                    </div>
                                                </div>
                                                <div
                                                    className={classNames(cls.points, {}, [cls.rowItem, 'caption-lg'])}
                                                >
                                                    {activeItem.points}
                                                </div>
                                                <div className={classNames(cls.place, {}, [cls.rowItem, 'caption-lg'])}>
                                                    {activeItem.place}
                                                </div>
                                            </div>
                                        </div>
                                    ));
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className={classNames(cls.pointsWrapper, {}, ['flex items-center w-full gap-4'])}>
                    <UsersIcon className={cls.usersIcon} />
                    <div>
                        <div className={classNames(cls.point, {}, ['text-label-lg'])}>
                            10 000 points
                        </div>
                        <div className="caption-sm text-icon-secondary">
                            from 20 referrals
                        </div>
                    </div>
                </div>

                <ReflinkCopy />
            </div>
        </>
    );
};

export default RatingPage;
