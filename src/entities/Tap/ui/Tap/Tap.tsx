import React, {
    memo, useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { TapBoosts } from 'entities/Tap/ui/TapBoosts/TapBoosts';
import { GifLoader } from 'shared/lib/components/GifLoader/GifLoader';
import A1_30 from 'shared/assets/anims/30/A1.png';
import A1_60 from 'shared/assets/anims/60/A1.png';
import A2_30 from 'shared/assets/anims/30/A2.png';
import A2_60 from 'shared/assets/anims/60/A2.png';
import A3_30 from 'shared/assets/anims/30/A3.png';
import A3_60 from 'shared/assets/anims/60/A3.png';
import A4_30 from 'shared/assets/anims/30/A4.png';
import A4_60 from 'shared/assets/anims/60/A4.png';
import A5_30 from 'shared/assets/anims/30/A5.png';
import A5_60 from 'shared/assets/anims/60/A5.png';
import A6_30 from 'shared/assets/anims/30/A6.png';
import A6_60 from 'shared/assets/anims/60/A6.png';
import A7_30 from 'shared/assets/anims/30/A7.png';
import A7_60 from 'shared/assets/anims/60/A7.png';
import A8_30 from 'shared/assets/anims/30/A8.png';
import A8_60 from 'shared/assets/anims/60/A8.png';
import A9_30 from 'shared/assets/anims/30/A9.png';
import A9_60 from 'shared/assets/anims/60/A9.png';
import A10_30 from 'shared/assets/anims/30/A10.png';
import A10_60 from 'shared/assets/anims/60/A10.png';
import A11_30 from 'shared/assets/anims/30/A11.png';
import A11_60 from 'shared/assets/anims/60/A11.png';
import B1_30 from 'shared/assets/anims/30/B1.png';
import B1_60 from 'shared/assets/anims/60/B1.png';
import B2_30 from 'shared/assets/anims/30/B2.png';
import B2_60 from 'shared/assets/anims/60/B2.png';
import B3_30 from 'shared/assets/anims/30/B3.png';
import B3_60 from 'shared/assets/anims/60/B3.png';
import B4_30 from 'shared/assets/anims/30/B4.png';
import B4_60 from 'shared/assets/anims/60/B4.png';
import B5_30 from 'shared/assets/anims/30/B5.png';
import B5_60 from 'shared/assets/anims/60/B5.png';
import B6_30 from 'shared/assets/anims/30/B6.png';
import B6_60 from 'shared/assets/anims/60/B6.png';
import B7_30 from 'shared/assets/anims/30/B7.png';
import B7_60 from 'shared/assets/anims/60/B7.png';
import B8_30 from 'shared/assets/anims/30/B8.png';
import B8_60 from 'shared/assets/anims/60/B8.png';
import B9_30 from 'shared/assets/anims/30/B9.png';
import B9_60 from 'shared/assets/anims/60/B9.png';
import B10_30 from 'shared/assets/anims/30/B10.png';
import B10_60 from 'shared/assets/anims/60/B10.png';
import B11_30 from 'shared/assets/anims/30/B11.png';
import B11_60 from 'shared/assets/anims/60/B11.png';
import C1_30 from 'shared/assets/anims/30/C1.png';
import C1_60 from 'shared/assets/anims/60/C1.png';
import C2_30 from 'shared/assets/anims/30/C2.png';
import C2_60 from 'shared/assets/anims/60/C2.png';
import C3_30 from 'shared/assets/anims/30/C3.png';
import C3_60 from 'shared/assets/anims/60/C3.png';
import C4_30 from 'shared/assets/anims/30/C4.png';
import C4_60 from 'shared/assets/anims/60/C4.png';
import C5_30 from 'shared/assets/anims/30/C5.png';
import C5_60 from 'shared/assets/anims/60/C5.png';
import C6_30 from 'shared/assets/anims/30/C6.png';
import C6_60 from 'shared/assets/anims/60/C6.png';
import C7_30 from 'shared/assets/anims/30/C7.png';
import C7_60 from 'shared/assets/anims/60/C7.png';
import C8_30 from 'shared/assets/anims/30/C8.png';
import C8_60 from 'shared/assets/anims/60/C8.png';
import C9_30 from 'shared/assets/anims/30/C9.png';
import C9_60 from 'shared/assets/anims/60/C9.png';
import C10_30 from 'shared/assets/anims/30/C10.png';
import C10_60 from 'shared/assets/anims/60/C10.png';
import C11_30 from 'shared/assets/anims/30/C11.png';
import C11_60 from 'shared/assets/anims/60/C11.png';
import D1_30 from 'shared/assets/anims/30/D1.png';
import D1_60 from 'shared/assets/anims/60/D1.png';
import D2_30 from 'shared/assets/anims/30/D2.png';
import D2_60 from 'shared/assets/anims/60/D2.png';
import D3_30 from 'shared/assets/anims/30/D3.png';
import D3_60 from 'shared/assets/anims/60/D3.png';
import D4_30 from 'shared/assets/anims/30/D4.png';
import D4_60 from 'shared/assets/anims/60/D4.png';
import D5_30 from 'shared/assets/anims/30/D5.png';
import D5_60 from 'shared/assets/anims/60/D5.png';
import D6_30 from 'shared/assets/anims/30/D6.png';
import D6_60 from 'shared/assets/anims/60/D6.png';
import D7_30 from 'shared/assets/anims/30/D7.png';
import D7_60 from 'shared/assets/anims/60/D7.png';
import D8_30 from 'shared/assets/anims/30/D8.png';
import D8_60 from 'shared/assets/anims/60/D8.png';
import D9_30 from 'shared/assets/anims/30/D9.png';
import D9_60 from 'shared/assets/anims/60/D9.png';
import D10_30 from 'shared/assets/anims/30/D10.png';
import D10_60 from 'shared/assets/anims/60/D10.png';
import D11_30 from 'shared/assets/anims/30/D11.png';
import D11_60 from 'shared/assets/anims/60/D11.png';
import E1_30 from 'shared/assets/anims/30/E1.png';
import E1_60 from 'shared/assets/anims/60/E1.png';
import E2_30 from 'shared/assets/anims/30/E2.png';
import E2_60 from 'shared/assets/anims/60/E2.png';
import E3_30 from 'shared/assets/anims/30/E3.png';
import E3_60 from 'shared/assets/anims/60/E3.png';
import E4_30 from 'shared/assets/anims/30/E4.png';
import E4_60 from 'shared/assets/anims/60/E4.png';
import E5_30 from 'shared/assets/anims/30/E5.png';
import E5_60 from 'shared/assets/anims/60/E5.png';
import E6_30 from 'shared/assets/anims/30/E6.png';
import E6_60 from 'shared/assets/anims/60/E6.png';
import E7_30 from 'shared/assets/anims/30/E7.png';
import E7_60 from 'shared/assets/anims/60/E7.png';
import E8_30 from 'shared/assets/anims/30/E8.png';
import E8_60 from 'shared/assets/anims/60/E8.png';
import E9_30 from 'shared/assets/anims/30/E9.png';
import E9_60 from 'shared/assets/anims/60/E9.png';
import E10_30 from 'shared/assets/anims/30/E10.png';
import E10_60 from 'shared/assets/anims/60/E10.png';
import E11_30 from 'shared/assets/anims/30/E11.png';
import E11_60 from 'shared/assets/anims/60/E11.png';
import F1_30 from 'shared/assets/anims/30/F1.png';
import F1_60 from 'shared/assets/anims/60/F1.png';
import F2_30 from 'shared/assets/anims/30/F2.png';
import F2_60 from 'shared/assets/anims/60/F2.png';
import F3_30 from 'shared/assets/anims/30/F3.png';
import F3_60 from 'shared/assets/anims/60/F3.png';
import F4_30 from 'shared/assets/anims/30/F4.png';
import F4_60 from 'shared/assets/anims/60/F4.png';
import F5_30 from 'shared/assets/anims/30/F5.png';
import F5_60 from 'shared/assets/anims/60/F5.png';
import F6_30 from 'shared/assets/anims/30/F6.png';
import F6_60 from 'shared/assets/anims/60/F6.png';
import F7_30 from 'shared/assets/anims/30/F7.png';
import F7_60 from 'shared/assets/anims/60/F7.png';
import F8_30 from 'shared/assets/anims/30/F8.png';
import F8_60 from 'shared/assets/anims/60/F8.png';
import F9_30 from 'shared/assets/anims/30/F9.png';
import F9_60 from 'shared/assets/anims/60/F9.png';
import F10_30 from 'shared/assets/anims/30/F10.png';
import F10_60 from 'shared/assets/anims/60/F10.png';
import F11_30 from 'shared/assets/anims/30/F11.png';
import F11_60 from 'shared/assets/anims/60/F11.png';
import G1_30 from 'shared/assets/anims/30/G1.png';
import G1_60 from 'shared/assets/anims/60/G1.png';
import G2_30 from 'shared/assets/anims/30/G2.png';
import G2_60 from 'shared/assets/anims/60/G2.png';
import G3_30 from 'shared/assets/anims/30/G3.png';
import G3_60 from 'shared/assets/anims/60/G3.png';
import G4_30 from 'shared/assets/anims/30/G4.png';
import G4_60 from 'shared/assets/anims/60/G4.png';
import G5_30 from 'shared/assets/anims/30/G5.png';
import G5_60 from 'shared/assets/anims/60/G5.png';
import G6_30 from 'shared/assets/anims/30/G6.png';
import G6_60 from 'shared/assets/anims/60/G6.png';
import G7_30 from 'shared/assets/anims/30/G7.png';
import G7_60 from 'shared/assets/anims/60/G7.png';
import G8_30 from 'shared/assets/anims/30/G8.png';
import G8_60 from 'shared/assets/anims/60/G8.png';
import G9_30 from 'shared/assets/anims/30/G9.png';
import G9_60 from 'shared/assets/anims/60/G9.png';
import G10_30 from 'shared/assets/anims/30/G10.png';
import G10_60 from 'shared/assets/anims/60/G10.png';
import G11_30 from 'shared/assets/anims/30/G11.png';
import G11_60 from 'shared/assets/anims/60/G11.png';
import H1_30 from 'shared/assets/anims/30/H1.png';
import H1_60 from 'shared/assets/anims/60/H1.png';
import H2_30 from 'shared/assets/anims/30/H2.png';
import H2_60 from 'shared/assets/anims/60/H2.png';
import H3_30 from 'shared/assets/anims/30/H3.png';
import H3_60 from 'shared/assets/anims/60/H3.png';
import H4_30 from 'shared/assets/anims/30/H4.png';
import H4_60 from 'shared/assets/anims/60/H4.png';
import H5_30 from 'shared/assets/anims/30/H5.png';
import H5_60 from 'shared/assets/anims/60/H5.png';
import H6_30 from 'shared/assets/anims/30/H6.png';
import H6_60 from 'shared/assets/anims/60/H6.png';
import H7_30 from 'shared/assets/anims/30/H7.png';
import H7_60 from 'shared/assets/anims/60/H7.png';
import H8_30 from 'shared/assets/anims/30/H8.png';
import H8_60 from 'shared/assets/anims/60/H8.png';
import H9_30 from 'shared/assets/anims/30/H9.png';
import H9_60 from 'shared/assets/anims/60/H9.png';
import H10_30 from 'shared/assets/anims/30/H10.png';
import H10_60 from 'shared/assets/anims/60/H10.png';
import H11_30 from 'shared/assets/anims/30/H11.png';
import H11_60 from 'shared/assets/anims/60/H11.png';
import I1_30 from 'shared/assets/anims/30/I1.png';
import I1_60 from 'shared/assets/anims/60/I1.png';
import I2_30 from 'shared/assets/anims/30/I2.png';
import I2_60 from 'shared/assets/anims/60/I2.png';
import I3_30 from 'shared/assets/anims/30/I3.png';
import I3_60 from 'shared/assets/anims/60/I3.png';
import I4_30 from 'shared/assets/anims/30/I4.png';
import I4_60 from 'shared/assets/anims/60/I4.png';
import I5_30 from 'shared/assets/anims/30/I5.png';
import I5_60 from 'shared/assets/anims/60/I5.png';
import I6_30 from 'shared/assets/anims/30/I6.png';
import I6_60 from 'shared/assets/anims/60/I6.png';
import I7_30 from 'shared/assets/anims/30/I7.png';
import I7_60 from 'shared/assets/anims/60/I7.png';
import I8_30 from 'shared/assets/anims/30/I8.png';
import I8_60 from 'shared/assets/anims/60/I8.png';
import I9_30 from 'shared/assets/anims/30/I9.png';
import I9_60 from 'shared/assets/anims/60/I9.png';
import I10_30 from 'shared/assets/anims/30/I10.png';
import I10_60 from 'shared/assets/anims/60/I10.png';
import I11_30 from 'shared/assets/anims/30/I11.png';
import I11_60 from 'shared/assets/anims/60/I11.png';
import J1_30 from 'shared/assets/anims/30/J1.png';
import J1_60 from 'shared/assets/anims/60/J1.png';
import J2_30 from 'shared/assets/anims/30/J2.png';
import J2_60 from 'shared/assets/anims/60/J2.png';
import J3_30 from 'shared/assets/anims/30/J3.png';
import J3_60 from 'shared/assets/anims/60/J3.png';
import J4_30 from 'shared/assets/anims/30/J4.png';
import J4_60 from 'shared/assets/anims/60/J4.png';
import J5_30 from 'shared/assets/anims/30/J5.png';
import J5_60 from 'shared/assets/anims/60/J5.png';
import J6_30 from 'shared/assets/anims/30/J6.png';
import J6_60 from 'shared/assets/anims/60/J6.png';
import J7_30 from 'shared/assets/anims/30/J7.png';
import J7_60 from 'shared/assets/anims/60/J7.png';
import J8_30 from 'shared/assets/anims/30/J8.png';
import J8_60 from 'shared/assets/anims/60/J8.png';
import J9_30 from 'shared/assets/anims/30/J9.png';
import J9_60 from 'shared/assets/anims/60/J9.png';
import J10_30 from 'shared/assets/anims/30/J10.png';
import J10_60 from 'shared/assets/anims/60/J10.png';
import J11_30 from 'shared/assets/anims/30/J11.png';
import J11_60 from 'shared/assets/anims/60/J11.png';
import K1_30 from 'shared/assets/anims/30/K1.png';
import K1_60 from 'shared/assets/anims/60/K1.png';
import K2_30 from 'shared/assets/anims/30/K2.png';
import K2_60 from 'shared/assets/anims/60/K2.png';
import K3_30 from 'shared/assets/anims/30/K3.png';
import K3_60 from 'shared/assets/anims/60/K3.png';
import K4_30 from 'shared/assets/anims/30/K4.png';
import K4_60 from 'shared/assets/anims/60/K4.png';
import K5_30 from 'shared/assets/anims/30/K5.png';
import K5_60 from 'shared/assets/anims/60/K5.png';
import K6_30 from 'shared/assets/anims/30/K6.png';
import K6_60 from 'shared/assets/anims/60/K6.png';
import K7_30 from 'shared/assets/anims/30/K7.png';
import K7_60 from 'shared/assets/anims/60/K7.png';
import K8_30 from 'shared/assets/anims/30/K8.png';
import K8_60 from 'shared/assets/anims/60/K8.png';
import K9_30 from 'shared/assets/anims/30/K9.png';
import K9_60 from 'shared/assets/anims/60/K9.png';
import K10_30 from 'shared/assets/anims/30/K10.png';
import K10_60 from 'shared/assets/anims/60/K10.png';
import K11_30 from 'shared/assets/anims/30/K11.png';
import K11_60 from 'shared/assets/anims/60/K11.png';
import useIsOldDevice from 'shared/lib/hooks/useIsOldDevice/useIsOldDevice';
import { TapMain } from '../TapMain/TapMain';
import cls from './Tap.module.scss';

interface TapProps {
    className?: string;
}

const tapAnimsUrls = [
    'assets/anims/grass.gif',
    'assets/anims/rain.gif',
    A1_60,
    A2_60,
    A3_60,
    A4_60,
    A5_60,
    A6_60,
    A7_60,
    A8_60,
    A9_60,
    A10_60,
    A11_60,
    B1_60,
    B2_60,
    B3_60,
    B4_60,
    B5_60,
    B6_60,
    B7_60,
    B8_60,
    B9_60,
    B10_60,
    B11_60,
    C1_60,
    C2_60,
    C3_60,
    C4_60,
    C5_60,
    C6_60,
    C7_60,
    C8_60,
    C9_60,
    C10_60,
    C11_60,
    D1_60,
    D2_60,
    D3_60,
    D4_60,
    D5_60,
    D6_60,
    D7_60,
    D8_60,
    D9_60,
    D10_60,
    D11_60,
    E1_60,
    E2_60,
    E3_60,
    E4_60,
    E5_60,
    E6_60,
    E7_60,
    E8_60,
    E9_60,
    E10_60,
    E11_60,
    F1_60,
    F2_60,
    F3_60,
    F4_60,
    F5_60,
    F6_60,
    F7_60,
    F8_60,
    F9_60,
    F10_60,
    F11_60,
    G1_60,
    G2_60,
    G3_60,
    G4_60,
    G5_60,
    G6_60,
    G7_60,
    G8_60,
    G9_60,
    G10_60,
    G11_60,
    H1_60,
    H2_60,
    H3_60,
    H4_60,
    H5_60,
    H6_60,
    H7_60,
    H8_60,
    H9_60,
    H10_60,
    H11_60,
    I1_60,
    I2_60,
    I3_60,
    I4_60,
    I5_60,
    I6_60,
    I7_60,
    I8_60,
    I9_60,
    I10_60,
    I11_60,
    J1_60,
    J2_60,
    J3_60,
    J4_60,
    J5_60,
    J6_60,
    J7_60,
    J8_60,
    J9_60,
    J10_60,
    J11_60,
    K1_60,
    K2_60,
    K3_60,
    K4_60,
    K5_60,
    K6_60,
    K7_60,
    K8_60,
    K9_60,
    K10_60,
    K11_60,
];
const tapAnimsUrlsOld = [
    'assets/anims/grass.gif',
    'assets/anims/rain.gif',
    A1_30,
    A2_30,
    A3_30,
    A4_30,
    A5_30,
    A6_30,
    A7_30,
    A8_30,
    A9_30,
    A10_30,
    A11_30,
    B1_30,
    B2_30,
    B3_30,
    B4_30,
    B5_30,
    B6_30,
    B7_30,
    B8_30,
    B9_30,
    B10_30,
    B11_30,
    C1_30,
    C2_30,
    C3_30,
    C4_30,
    C5_30,
    C6_30,
    C7_30,
    C8_30,
    C9_30,
    C10_30,
    C11_30,
    D1_30,
    D2_30,
    D3_30,
    D4_30,
    D5_30,
    D6_30,
    D7_30,
    D8_30,
    D9_30,
    D10_30,
    D11_30,
    E1_30,
    E2_30,
    E3_30,
    E4_30,
    E5_30,
    E6_30,
    E7_30,
    E8_30,
    E9_30,
    E10_30,
    E11_30,
    F1_30,
    F2_30,
    F3_30,
    F4_30,
    F5_30,
    F6_30,
    F7_30,
    F8_30,
    F9_30,
    F10_30,
    F11_30,
    G1_30,
    G2_30,
    G3_30,
    G4_30,
    G5_30,
    G6_30,
    G7_30,
    G8_30,
    G9_30,
    G10_30,
    G11_30,
    H1_30,
    H2_30,
    H3_30,
    H4_30,
    H5_30,
    H6_30,
    H7_30,
    H8_30,
    H9_30,
    H10_30,
    H11_30,
    I1_30,
    I2_30,
    I3_30,
    I4_30,
    I5_30,
    I6_30,
    I7_30,
    I8_30,
    I9_30,
    I10_30,
    I11_30,
    J1_30,
    J2_30,
    J3_30,
    J4_30,
    J5_30,
    J6_30,
    J7_30,
    J8_30,
    J9_30,
    J10_30,
    J11_30,
    K1_30,
    K2_30,
    K3_30,
    K4_30,
    K5_30,
    K6_30,
    K7_30,
    K8_30,
    K9_30,
    K10_30,
    K11_30,
];

export const Tap = memo((props: TapProps) => {
    const {
        className,
    } = props;
    const [boostsVisible, setBoostsVisible] = useState(false);
    const isOldDevice = useIsOldDevice();

    const showBoosts = useCallback(() => {
        setBoostsVisible(true);
    }, []);

    const hideBoosts = useCallback(() => {
        setBoostsVisible(false);
    }, []);

    useEffect(() => {
        setBoostsVisible(false);
    }, []);

    return (
        <div className={classNames(cls.Tap, {}, [className])}>
            {!boostsVisible && (
                <TapMain
                    showBoosts={showBoosts}
                />
            )}
            {boostsVisible && (
                <TapBoosts
                    hideBoosts={hideBoosts}
                />
            )}
            <GifLoader gifUrls={isOldDevice ? tapAnimsUrlsOld : tapAnimsUrls} />
        </div>
    );
});
