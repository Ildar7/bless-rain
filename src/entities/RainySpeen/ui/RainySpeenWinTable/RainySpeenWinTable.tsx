import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import DropImg from 'shared/assets/icons/png/drop.png';
import TwoDropsImg from 'shared/assets/icons/png/two_drops.png';
import ThreeDropsImg from 'shared/assets/icons/png/three_drops.png';
import LightingImg from 'shared/assets/icons/png/lighting.png';
import UmbrellaImg from 'shared/assets/icons/png/umbrella.png';
import cls from './RainySpeenWinTable.module.scss';

interface RainySpeenWinTableProps {
    className?: string;
}

export const RainySpeenWinTable = memo((props: RainySpeenWinTableProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.RainySpeenWinTable, {}, [className])}>
            <div className={cls.title}>
                Win table
            </div>
            <div className={cls.subtitle}>
                <table className="text-center w-full">
                    <colgroup>
                        <col style={{ width: '33.33333%' }} />
                        <col style={{ width: '33.33333%' }} />
                        <col style={{ width: '33.33333%' }} />
                    </colgroup>

                    <tr>
                        <th>Combination</th>
                        <th>Examples</th>
                        <th>Win</th>
                    </tr>
                    <tr>
                        <th>Any drop</th>
                        <th>
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                    <img className="w-1/4 xs:w-1/6" src={DropImg} alt="1drop" />
                                    <img className="w-1/4 xs:w-1/6" src={DropImg} alt="— 1drop" />
                                    <img className="w-1/4 xs:w-1/6" src={ThreeDropsImg} alt="— 3drops" />
                                </div>
                                <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                    <img className="w-1/4 xs:w-1/6" src={TwoDropsImg} alt="2drops" />
                                    <img className="w-1/4 xs:w-1/6" src={ThreeDropsImg} alt="— 3drops" />
                                    <img className="w-1/4 xs:w-1/6" src={DropImg} alt="— 1drop" />
                                </div>
                            </div>
                        </th>
                        <th>5</th>
                    </tr>
                    <tr>
                        <th>1 drops</th>
                        <th>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <img className="w-1/4 xs:w-1/6" src={DropImg} alt="1drop" />
                                <img className="w-1/4 xs:w-1/6" src={DropImg} alt="— 1drop" />
                                <img className="w-1/4 xs:w-1/6" src={DropImg} alt="— 1drop" />
                            </div>
                        </th>
                        <th>10</th>
                    </tr>
                    <tr>
                        <th>2 drops</th>
                        <th>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <img className="w-1/4 xs:w-1/6" src={TwoDropsImg} alt="2drops" />
                                <img className="w-1/4 xs:w-1/6" src={TwoDropsImg} alt="— 2drops" />
                                <img className="w-1/4 xs:w-1/6" src={TwoDropsImg} alt="— 2drops" />
                            </div>
                        </th>
                        <th>20</th>
                    </tr>
                    <tr>
                        <th>3 drops</th>
                        <th>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <img className="w-1/4 xs:w-1/6" src={ThreeDropsImg} alt="3drops" />
                                <img className="w-1/4 xs:w-1/6" src={ThreeDropsImg} alt="— 3drops" />
                                <img className="w-1/4 xs:w-1/6" src={ThreeDropsImg} alt="— 3drops" />
                            </div>
                        </th>
                        <th>40</th>
                    </tr>
                    <tr>
                        <th>lightnings</th>
                        <th>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <img className="w-1/4 xs:w-1/6" src={LightingImg} alt="lightning" />
                                <img className="w-1/4 xs:w-1/6" src={LightingImg} alt="— lightning" />
                                <img className="w-1/4 xs:w-1/6" src={LightingImg} alt="— lightning" />
                            </div>
                        </th>
                        <th>100</th>
                    </tr>
                    <tr>
                        <th>1 umbrella</th>
                        <th>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <span className="w-1/4 xs:w-1/6" />
                                <img className="w-1/4 xs:w-1/6" src={DropImg} alt="— 1drop" />
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                            </div>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="Umbrella" />
                                <img className="w-1/4 xs:w-1/6" src={ThreeDropsImg} alt="— 3drops" />
                                <img className="w-1/4 xs:w-1/6" src={LightingImg} alt="— lightning" />
                            </div>
                        </th>
                        <th>2</th>
                    </tr>
                    <tr>
                        <th>2 umbrellas</th>
                        <th>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                                <span className="w-1/4 xs:w-1/6" />
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                            </div>
                        </th>
                        <th>10</th>
                    </tr>
                    <tr>
                        <th>Any combination with umbrella – x3</th>
                        <th>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <img className="w-1/4 xs:w-1/6" src={TwoDropsImg} alt="— 2drops" />
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                                <img className="w-1/4 xs:w-1/6" src={DropImg} alt="— 1drop" />
                            </div>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <img className="w-1/4 xs:w-1/6" src={DropImg} alt="— 1drops" />
                                <img className="w-1/4 xs:w-1/6" src={DropImg} alt="— 1drop" />
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                            </div>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                                <img className="w-1/4 xs:w-1/6" src={TwoDropsImg} alt="— 2drops" />
                                <img className="w-1/4 xs:w-1/6" src={TwoDropsImg} alt="— 2drops" />
                            </div>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <img className="w-1/4 xs:w-1/6" src={ThreeDropsImg} alt="— 3drops" />
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                                <img className="w-1/4 xs:w-1/6" src={ThreeDropsImg} alt="— 3drops" />
                            </div>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <img className="w-1/4 xs:w-1/6" src={LightingImg} alt="— lightning" />
                                <img className="w-1/4 xs:w-1/6" src={LightingImg} alt="— lightning" />
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                            </div>
                        </th>
                        <th>
                            <div className="flex items-center justify-center h-[30px] xs:h-[43px]">5 (x3) = 15</div>
                            <div className="flex items-center justify-center h-[30px] xs:h-[43px]">10 (x3) = 30</div>
                            <div className="flex items-center justify-center h-[30px] xs:h-[43px]">20 (x3) = 60</div>
                            <div className="flex items-center justify-center h-[30px] xs:h-[43px]">40 (x3) = 120</div>
                            <div className="flex items-center justify-center h-[30px] xs:h-[43px]">100 (x3) = 300</div>
                        </th>
                    </tr>
                    <tr>
                        <th>Any combination with 2 umbrellas – x9</th>
                        <th>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <img className="w-1/4 xs:w-1/6" src={DropImg} alt="— 1drop" />
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                            </div>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                                <img className="w-1/4 xs:w-1/6" src={TwoDropsImg} alt="— 2drops" />
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                            </div>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                                <img className="w-1/4 xs:w-1/6" src={ThreeDropsImg} alt="— 3drops" />
                            </div>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                                <img className="w-1/4 xs:w-1/6" src={LightingImg} alt="— lightning" />
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                            </div>
                        </th>
                        <th>
                            <div className="flex items-center justify-center h-[30px] xs:h-[43px]">10 (x9) = 90</div>
                            <div className="flex items-center justify-center h-[30px] xs:h-[43px]">20 (x9) = 180</div>
                            <div className="flex items-center justify-center h-[30px] xs:h-[43px]">40 (x9) = 360</div>
                            <div className="flex items-center justify-center h-[30px] xs:h-[43px]">100 (x9) = 900</div>
                        </th>
                    </tr>
                    <tr>
                        <th>3 umbrellas</th>
                        <th>
                            <div className="flex justify-center gap-2 xs:gap-4 items-center w-full h-[30px] xs:h-[43px]">
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                                <img className="w-1/4 xs:w-1/6" src={UmbrellaImg} alt="— umbrella" />
                            </div>
                        </th>
                        <th>
                            <div className="flex items-center justify-center h-[30px] xs:h-[43px]">1200</div>
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    );
});
