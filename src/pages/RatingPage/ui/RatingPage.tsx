import React, { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './RatingPage.scss';
import { appActions } from 'entities/App';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Sidebar } from 'widgets/Sidebar';
import GirlImg from 'shared/assets/icons/png/rating-img.png';
import { SidebarItems } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { Helmet } from 'react-helmet';
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
                    points: 7312.46,
                    place: 2,
                    name: 'Iréné Codjo',
                },
                {
                    id: 3,
                    img: GirlImg,
                    points: 7222.55,
                    place: 3,
                    name: 'Kowiou Akplogan',
                },
                {
                    id: 4,
                    img: GirlImg,
                    points: 6879.11,
                    place: 4,
                    name: 'Wilfrid Codjo',
                },
                {
                    id: 5,
                    img: GirlImg,
                    points: 6324.89,
                    place: 5,
                    name: 'Roland Yarigo',
                },
                {
                    id: 6,
                    img: GirlImg,
                    points: 6283.08,
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
                <title>Bless Rain - Rating</title>
            </Helmet>
            <div className={classNames(
                'flex flex-col sm:flex-row items-start gap-6 '
                + 'justify-start sm:justify-between relative h-full md:mt-0',
                {},
                [],
            )}
            >
                <Sidebar
                    items={sidebarItems}
                    setItems={setSidebarItems}
                />

                <div
                    className="surface relative lobby-bless-item lobby-bless-item-linear-bg p-2 !w-full sm:flex-1"
                >
                    <div className="relative z-10 py-5 px-[2px] sm:px-3.5">
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
                                            className={classNames(cls.rowContentSurface, {}, ['surface'])}
                                        >
                                            <div className={classNames(cls.row, {}, [cls.rowContentRow, 'inner'])}>
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
                                                    {activeItem.points.toFixed(2)}
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
            </div>
        </>
    );
};

export default RatingPage;
