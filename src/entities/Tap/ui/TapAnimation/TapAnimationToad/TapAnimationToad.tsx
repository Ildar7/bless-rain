import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import useIsOldDevice from 'shared/lib/hooks/useIsOldDevice/useIsOldDevice';
import cls from './TapAnimationToad.module.scss';

interface TapAnimationToadProps {
    className?: string;
    toadAnimPosition: string;
}

export const TapAnimationToad = memo((props: TapAnimationToadProps) => {
    const {
        className,
        toadAnimPosition,
    } = props;
    const isOldDevice = useIsOldDevice();

    return (
        <div className={classNames(cls.TapAnimationToadWrapper, {}, [className])}>
            <div
                className={classNames(
                    cls.toad,
                    {
                        // IDLE ANIM
                        [cls.TapAnimationToadIdle]: toadAnimPosition === 'idle' && !isOldDevice,
                        [cls.TapAnimationToadIdleOld]: toadAnimPosition === 'idle' && isOldDevice,

                        // A1 ANIM
                        [cls.TapAnimationToadA1]: toadAnimPosition === 'A1' && !isOldDevice,
                        [cls.TapAnimationToadA1Old]: toadAnimPosition === 'A1' && isOldDevice,

                        // A2 ANIM
                        [cls.TapAnimationToadA2]: toadAnimPosition === 'A2' && !isOldDevice,
                        [cls.TapAnimationToadA2Old]: toadAnimPosition === 'A2' && isOldDevice,

                        // A3 ANIM
                        [cls.TapAnimationToadA3]: toadAnimPosition === 'A3' && !isOldDevice,
                        [cls.TapAnimationToadA3Old]: toadAnimPosition === 'A3' && isOldDevice,

                        // A4 ANIM
                        [cls.TapAnimationToadA4]: toadAnimPosition === 'A4' && !isOldDevice,
                        [cls.TapAnimationToadA4Old]: toadAnimPosition === 'A4' && isOldDevice,

                        // A5 ANIM
                        [cls.TapAnimationToadA5]: toadAnimPosition === 'A5' && !isOldDevice,
                        [cls.TapAnimationToadA5Old]: toadAnimPosition === 'A5' && isOldDevice,

                        // A6 ANIM
                        [cls.TapAnimationToadA6]: toadAnimPosition === 'A6' && !isOldDevice,
                        [cls.TapAnimationToadA6Old]: toadAnimPosition === 'A6' && isOldDevice,

                        // A7 ANIM
                        [cls.TapAnimationToadA7]: toadAnimPosition === 'A7' && !isOldDevice,
                        [cls.TapAnimationToadA7Old]: toadAnimPosition === 'A7' && isOldDevice,

                        // A8 ANIM
                        [cls.TapAnimationToadA8]: toadAnimPosition === 'A8' && !isOldDevice,
                        [cls.TapAnimationToadA8Old]: toadAnimPosition === 'A8' && isOldDevice,

                        // A9 ANIM
                        [cls.TapAnimationToadA9]: toadAnimPosition === 'A9' && !isOldDevice,
                        [cls.TapAnimationToadA9Old]: toadAnimPosition === 'A9' && isOldDevice,

                        // A10 ANIM
                        [cls.TapAnimationToadA10]: toadAnimPosition === 'A10' && !isOldDevice,
                        [cls.TapAnimationToadA10Old]: toadAnimPosition === 'A10' && isOldDevice,

                        // A11 ANIM
                        [cls.TapAnimationToadA11]: toadAnimPosition === 'A11' && !isOldDevice,
                        [cls.TapAnimationToadA11Old]: toadAnimPosition === 'A11' && isOldDevice,

                        // B1 ANIM
                        [cls.TapAnimationToadB1]: toadAnimPosition === 'B1' && !isOldDevice,
                        [cls.TapAnimationToadB1Old]: toadAnimPosition === 'B1' && isOldDevice,

                        // B2 ANIM
                        [cls.TapAnimationToadB2]: toadAnimPosition === 'B2' && !isOldDevice,
                        [cls.TapAnimationToadB2Old]: toadAnimPosition === 'B2' && isOldDevice,

                        // B3 ANIM
                        [cls.TapAnimationToadB3]: toadAnimPosition === 'B3' && !isOldDevice,
                        [cls.TapAnimationToadB3Old]: toadAnimPosition === 'B3' && isOldDevice,

                        // B4 ANIM
                        [cls.TapAnimationToadB4]: toadAnimPosition === 'B4' && !isOldDevice,
                        [cls.TapAnimationToadB4Old]: toadAnimPosition === 'B4' && isOldDevice,

                        // B5 ANIM
                        [cls.TapAnimationToadB5]: toadAnimPosition === 'B5' && !isOldDevice,
                        [cls.TapAnimationToadB5Old]: toadAnimPosition === 'B5' && isOldDevice,

                        // B6 ANIM
                        [cls.TapAnimationToadB6]: toadAnimPosition === 'B6' && !isOldDevice,
                        [cls.TapAnimationToadB6Old]: toadAnimPosition === 'B6' && isOldDevice,

                        // B7 ANIM
                        [cls.TapAnimationToadB7]: toadAnimPosition === 'B7' && !isOldDevice,
                        [cls.TapAnimationToadB7Old]: toadAnimPosition === 'B7' && isOldDevice,

                        // B8 ANIM
                        [cls.TapAnimationToadB8]: toadAnimPosition === 'B8' && !isOldDevice,
                        [cls.TapAnimationToadB8Old]: toadAnimPosition === 'B8' && isOldDevice,

                        // B9 ANIM
                        [cls.TapAnimationToadB9]: toadAnimPosition === 'B9' && !isOldDevice,
                        [cls.TapAnimationToadB9Old]: toadAnimPosition === 'B9' && isOldDevice,

                        // B10 ANIM
                        [cls.TapAnimationToadB10]: toadAnimPosition === 'B10' && !isOldDevice,
                        [cls.TapAnimationToadB10Old]: toadAnimPosition === 'B10' && isOldDevice,

                        // B11 ANIM
                        [cls.TapAnimationToadB11]: toadAnimPosition === 'B11' && !isOldDevice,
                        [cls.TapAnimationToadB11Old]: toadAnimPosition === 'B11' && isOldDevice,

                        // C1 ANIM
                        [cls.TapAnimationToadC1]: toadAnimPosition === 'C1' && !isOldDevice,
                        [cls.TapAnimationToadC1Old]: toadAnimPosition === 'C1' && isOldDevice,

                        // C2 ANIM
                        [cls.TapAnimationToadC2]: toadAnimPosition === 'C2' && !isOldDevice,
                        [cls.TapAnimationToadC2Old]: toadAnimPosition === 'C2' && isOldDevice,

                        // C3 ANIM
                        [cls.TapAnimationToadC3]: toadAnimPosition === 'C3' && !isOldDevice,
                        [cls.TapAnimationToadC3Old]: toadAnimPosition === 'C3' && isOldDevice,

                        // C4 ANIM
                        [cls.TapAnimationToadC4]: toadAnimPosition === 'C4' && !isOldDevice,
                        [cls.TapAnimationToadC4Old]: toadAnimPosition === 'C4' && isOldDevice,

                        // C5 ANIM
                        [cls.TapAnimationToadC5]: toadAnimPosition === 'C5' && !isOldDevice,
                        [cls.TapAnimationToadC5Old]: toadAnimPosition === 'C5' && isOldDevice,

                        // C6 ANIM
                        [cls.TapAnimationToadC6]: toadAnimPosition === 'C6' && !isOldDevice,
                        [cls.TapAnimationToadC6Old]: toadAnimPosition === 'C6' && isOldDevice,

                        // C7 ANIM
                        [cls.TapAnimationToadC7]: toadAnimPosition === 'C7' && !isOldDevice,
                        [cls.TapAnimationToadC7Old]: toadAnimPosition === 'C7' && isOldDevice,

                        // C8 ANIM
                        [cls.TapAnimationToadC8]: toadAnimPosition === 'C8' && !isOldDevice,
                        [cls.TapAnimationToadC8Old]: toadAnimPosition === 'C8' && isOldDevice,

                        // C9 ANIM
                        [cls.TapAnimationToadC9]: toadAnimPosition === 'C9' && !isOldDevice,
                        [cls.TapAnimationToadC9Old]: toadAnimPosition === 'C9' && isOldDevice,

                        // C10 ANIM
                        [cls.TapAnimationToadC10]: toadAnimPosition === 'C10' && !isOldDevice,
                        [cls.TapAnimationToadC10Old]: toadAnimPosition === 'C10' && isOldDevice,

                        // C11 ANIM
                        [cls.TapAnimationToadC11]: toadAnimPosition === 'C11' && !isOldDevice,
                        [cls.TapAnimationToadC11Old]: toadAnimPosition === 'C11' && isOldDevice,

                        // D1 ANIM
                        [cls.TapAnimationToadD1]: toadAnimPosition === 'D1' && !isOldDevice,
                        [cls.TapAnimationToadD1Old]: toadAnimPosition === 'D1' && isOldDevice,

                        // D2 ANIM
                        [cls.TapAnimationToadD2]: toadAnimPosition === 'D2' && !isOldDevice,
                        [cls.TapAnimationToadD2Old]: toadAnimPosition === 'D2' && isOldDevice,

                        // D3 ANIM
                        [cls.TapAnimationToadD3]: toadAnimPosition === 'D3' && !isOldDevice,
                        [cls.TapAnimationToadD3Old]: toadAnimPosition === 'D3' && isOldDevice,

                        // D4 ANIM
                        [cls.TapAnimationToadD4]: toadAnimPosition === 'D4' && !isOldDevice,
                        [cls.TapAnimationToadD4Old]: toadAnimPosition === 'D4' && isOldDevice,

                        // D5 ANIM
                        [cls.TapAnimationToadD5]: toadAnimPosition === 'D5' && !isOldDevice,
                        [cls.TapAnimationToadD5Old]: toadAnimPosition === 'D5' && isOldDevice,

                        // D6 ANIM
                        [cls.TapAnimationToadD6]: toadAnimPosition === 'D6' && !isOldDevice,
                        [cls.TapAnimationToadD6Old]: toadAnimPosition === 'D6' && isOldDevice,

                        // D7 ANIM
                        [cls.TapAnimationToadD7]: toadAnimPosition === 'D7' && !isOldDevice,
                        [cls.TapAnimationToadD7Old]: toadAnimPosition === 'D7' && isOldDevice,

                        // D8 ANIM
                        [cls.TapAnimationToadD8]: toadAnimPosition === 'D8' && !isOldDevice,
                        [cls.TapAnimationToadD8Old]: toadAnimPosition === 'D8' && isOldDevice,

                        // D9 ANIM
                        [cls.TapAnimationToadD9]: toadAnimPosition === 'D9' && !isOldDevice,
                        [cls.TapAnimationToadD9Old]: toadAnimPosition === 'D9' && isOldDevice,

                        // D10 ANIM
                        [cls.TapAnimationToadD10]: toadAnimPosition === 'D10' && !isOldDevice,
                        [cls.TapAnimationToadD10Old]: toadAnimPosition === 'D10' && isOldDevice,

                        // D11 ANIM
                        [cls.TapAnimationToadD11]: toadAnimPosition === 'D11' && !isOldDevice,
                        [cls.TapAnimationToadD11Old]: toadAnimPosition === 'D11' && isOldDevice,

                        // E1 ANIM
                        [cls.TapAnimationToadE1]: toadAnimPosition === 'E1' && !isOldDevice,
                        [cls.TapAnimationToadE1Old]: toadAnimPosition === 'E1' && isOldDevice,

                        // E2 ANIM
                        [cls.TapAnimationToadE2]: toadAnimPosition === 'E2' && !isOldDevice,
                        [cls.TapAnimationToadE2Old]: toadAnimPosition === 'E2' && isOldDevice,

                        // E3 ANIM
                        [cls.TapAnimationToadE3]: toadAnimPosition === 'E3' && !isOldDevice,
                        [cls.TapAnimationToadE3Old]: toadAnimPosition === 'E3' && isOldDevice,

                        // E4 ANIM
                        [cls.TapAnimationToadE4]: toadAnimPosition === 'E4' && !isOldDevice,
                        [cls.TapAnimationToadE4Old]: toadAnimPosition === 'E4' && isOldDevice,

                        // E5 ANIM
                        [cls.TapAnimationToadE5]: toadAnimPosition === 'E5' && !isOldDevice,
                        [cls.TapAnimationToadE5Old]: toadAnimPosition === 'E5' && isOldDevice,

                        // E6 ANIM
                        [cls.TapAnimationToadE6]: toadAnimPosition === 'E6' && !isOldDevice,
                        [cls.TapAnimationToadE6Old]: toadAnimPosition === 'E6' && isOldDevice,

                        // E7 ANIM
                        [cls.TapAnimationToadE7]: toadAnimPosition === 'E7' && !isOldDevice,
                        [cls.TapAnimationToadE7Old]: toadAnimPosition === 'E7' && isOldDevice,

                        // E8 ANIM
                        [cls.TapAnimationToadE8]: toadAnimPosition === 'E8' && !isOldDevice,
                        [cls.TapAnimationToadE8Old]: toadAnimPosition === 'E8' && isOldDevice,

                        // E9 ANIM
                        [cls.TapAnimationToadE9]: toadAnimPosition === 'E9' && !isOldDevice,
                        [cls.TapAnimationToadE9Old]: toadAnimPosition === 'E9' && isOldDevice,

                        // E10 ANIM
                        [cls.TapAnimationToadE10]: toadAnimPosition === 'E10' && !isOldDevice,
                        [cls.TapAnimationToadE10Old]: toadAnimPosition === 'E10' && isOldDevice,

                        // E11 ANIM
                        [cls.TapAnimationToadE11]: toadAnimPosition === 'E11' && !isOldDevice,
                        [cls.TapAnimationToadE11Old]: toadAnimPosition === 'E11' && isOldDevice,

                        // F1 ANIM
                        [cls.TapAnimationToadF1]: toadAnimPosition === 'F1' && !isOldDevice,
                        [cls.TapAnimationToadF1Old]: toadAnimPosition === 'F1' && isOldDevice,

                        // F2 ANIM
                        [cls.TapAnimationToadF2]: toadAnimPosition === 'F2' && !isOldDevice,
                        [cls.TapAnimationToadF2Old]: toadAnimPosition === 'F2' && isOldDevice,

                        // F3 ANIM
                        [cls.TapAnimationToadF3]: toadAnimPosition === 'F3' && !isOldDevice,
                        [cls.TapAnimationToadF3Old]: toadAnimPosition === 'F3' && isOldDevice,

                        // F4 ANIM
                        [cls.TapAnimationToadF4]: toadAnimPosition === 'F4' && !isOldDevice,
                        [cls.TapAnimationToadF4Old]: toadAnimPosition === 'F4' && isOldDevice,

                        // F5 ANIM
                        [cls.TapAnimationToadF5]: toadAnimPosition === 'F5' && !isOldDevice,
                        [cls.TapAnimationToadF5Old]: toadAnimPosition === 'F5' && isOldDevice,

                        // F6 ANIM
                        [cls.TapAnimationToadF6]: toadAnimPosition === 'F6' && !isOldDevice,
                        [cls.TapAnimationToadF6Old]: toadAnimPosition === 'F6' && isOldDevice,

                        // F7 ANIM
                        [cls.TapAnimationToadF7]: toadAnimPosition === 'F7' && !isOldDevice,
                        [cls.TapAnimationToadF7Old]: toadAnimPosition === 'F7' && isOldDevice,

                        // F8 ANIM
                        [cls.TapAnimationToadF8]: toadAnimPosition === 'F8' && !isOldDevice,
                        [cls.TapAnimationToadF8Old]: toadAnimPosition === 'F8' && isOldDevice,

                        // F9 ANIM
                        [cls.TapAnimationToadF9]: toadAnimPosition === 'F9' && !isOldDevice,
                        [cls.TapAnimationToadF9Old]: toadAnimPosition === 'F9' && isOldDevice,

                        // F10 ANIM
                        [cls.TapAnimationToadF10]: toadAnimPosition === 'F10' && !isOldDevice,
                        [cls.TapAnimationToadF10Old]: toadAnimPosition === 'F10' && isOldDevice,

                        // F11 ANIM
                        [cls.TapAnimationToadF11]: toadAnimPosition === 'F11' && !isOldDevice,
                        [cls.TapAnimationToadF11Old]: toadAnimPosition === 'F11' && isOldDevice,

                        // G1 ANIM
                        [cls.TapAnimationToadG1]: toadAnimPosition === 'G1' && !isOldDevice,
                        [cls.TapAnimationToadG1Old]: toadAnimPosition === 'G1' && isOldDevice,

                        // G2 ANIM
                        [cls.TapAnimationToadG2]: toadAnimPosition === 'G2' && !isOldDevice,
                        [cls.TapAnimationToadG2Old]: toadAnimPosition === 'G2' && isOldDevice,

                        // G3 ANIM
                        [cls.TapAnimationToadG3]: toadAnimPosition === 'G3' && !isOldDevice,
                        [cls.TapAnimationToadG3Old]: toadAnimPosition === 'G3' && isOldDevice,

                        // G4 ANIM
                        [cls.TapAnimationToadG4]: toadAnimPosition === 'G4' && !isOldDevice,
                        [cls.TapAnimationToadG4Old]: toadAnimPosition === 'G4' && isOldDevice,

                        // G5 ANIM
                        [cls.TapAnimationToadG5]: toadAnimPosition === 'G5' && !isOldDevice,
                        [cls.TapAnimationToadG5Old]: toadAnimPosition === 'G5' && isOldDevice,

                        // G6 ANIM
                        [cls.TapAnimationToadG6]: toadAnimPosition === 'G6' && !isOldDevice,
                        [cls.TapAnimationToadG6Old]: toadAnimPosition === 'G6' && isOldDevice,

                        // G7 ANIM
                        [cls.TapAnimationToadG7]: toadAnimPosition === 'G7' && !isOldDevice,
                        [cls.TapAnimationToadG7Old]: toadAnimPosition === 'G7' && isOldDevice,

                        // G8 ANIM
                        [cls.TapAnimationToadG8]: toadAnimPosition === 'G8' && !isOldDevice,
                        [cls.TapAnimationToadG8Old]: toadAnimPosition === 'G8' && isOldDevice,

                        // G9 ANIM
                        [cls.TapAnimationToadG9]: toadAnimPosition === 'G9' && !isOldDevice,
                        [cls.TapAnimationToadG9Old]: toadAnimPosition === 'G9' && isOldDevice,

                        // G10 ANIM
                        [cls.TapAnimationToadG10]: toadAnimPosition === 'G10' && !isOldDevice,
                        [cls.TapAnimationToadG10Old]: toadAnimPosition === 'G10' && isOldDevice,

                        // G11 ANIM
                        [cls.TapAnimationToadG11]: toadAnimPosition === 'G11' && !isOldDevice,
                        [cls.TapAnimationToadG11Old]: toadAnimPosition === 'G11' && isOldDevice,

                        // H1 ANIM
                        [cls.TapAnimationToadH1]: toadAnimPosition === 'H1' && !isOldDevice,
                        [cls.TapAnimationToadH1Old]: toadAnimPosition === 'H1' && isOldDevice,

                        // H2 ANIM
                        [cls.TapAnimationToadH2]: toadAnimPosition === 'H2' && !isOldDevice,
                        [cls.TapAnimationToadH2Old]: toadAnimPosition === 'H2' && isOldDevice,

                        // H3 ANIM
                        [cls.TapAnimationToadH3]: toadAnimPosition === 'H3' && !isOldDevice,
                        [cls.TapAnimationToadH3Old]: toadAnimPosition === 'H3' && isOldDevice,

                        // H4 ANIM
                        [cls.TapAnimationToadH4]: toadAnimPosition === 'H4' && !isOldDevice,
                        [cls.TapAnimationToadH4Old]: toadAnimPosition === 'H4' && isOldDevice,

                        // H5 ANIM
                        [cls.TapAnimationToadH5]: toadAnimPosition === 'H5' && !isOldDevice,
                        [cls.TapAnimationToadH5Old]: toadAnimPosition === 'H5' && isOldDevice,

                        // H6 ANIM
                        [cls.TapAnimationToadH6]: toadAnimPosition === 'H6' && !isOldDevice,
                        [cls.TapAnimationToadH6Old]: toadAnimPosition === 'H6' && isOldDevice,

                        // H7 ANIM
                        [cls.TapAnimationToadH7]: toadAnimPosition === 'H7' && !isOldDevice,
                        [cls.TapAnimationToadH7Old]: toadAnimPosition === 'H7' && isOldDevice,

                        // H8 ANIM
                        [cls.TapAnimationToadH8]: toadAnimPosition === 'H8' && !isOldDevice,
                        [cls.TapAnimationToadH8Old]: toadAnimPosition === 'H8' && isOldDevice,

                        // H9 ANIM
                        [cls.TapAnimationToadH9]: toadAnimPosition === 'H9' && !isOldDevice,
                        [cls.TapAnimationToadH9Old]: toadAnimPosition === 'H9' && isOldDevice,

                        // H10 ANIM
                        [cls.TapAnimationToadH10]: toadAnimPosition === 'H10' && !isOldDevice,
                        [cls.TapAnimationToadH10Old]: toadAnimPosition === 'H10' && isOldDevice,

                        // H11 ANIM
                        [cls.TapAnimationToadH11]: toadAnimPosition === 'H11' && !isOldDevice,
                        [cls.TapAnimationToadH11Old]: toadAnimPosition === 'H11' && isOldDevice,

                        // I1 ANIM
                        [cls.TapAnimationToadI1]: toadAnimPosition === 'I1' && !isOldDevice,
                        [cls.TapAnimationToadI1Old]: toadAnimPosition === 'I1' && isOldDevice,

                        // I2 ANIM
                        [cls.TapAnimationToadI2]: toadAnimPosition === 'I2' && !isOldDevice,
                        [cls.TapAnimationToadI2Old]: toadAnimPosition === 'I2' && isOldDevice,

                        // I3 ANIM
                        [cls.TapAnimationToadI3]: toadAnimPosition === 'I3' && !isOldDevice,
                        [cls.TapAnimationToadI3Old]: toadAnimPosition === 'I3' && isOldDevice,

                        // I4 ANIM
                        [cls.TapAnimationToadI4]: toadAnimPosition === 'I4' && !isOldDevice,
                        [cls.TapAnimationToadI4Old]: toadAnimPosition === 'I4' && isOldDevice,

                        // I5 ANIM
                        [cls.TapAnimationToadI5]: toadAnimPosition === 'I5' && !isOldDevice,
                        [cls.TapAnimationToadI5Old]: toadAnimPosition === 'I5' && isOldDevice,

                        // I6 ANIM
                        [cls.TapAnimationToadI6]: toadAnimPosition === 'I6' && !isOldDevice,
                        [cls.TapAnimationToadI6Old]: toadAnimPosition === 'I6' && isOldDevice,

                        // I7 ANIM
                        [cls.TapAnimationToadI7]: toadAnimPosition === 'I7' && !isOldDevice,
                        [cls.TapAnimationToadI7Old]: toadAnimPosition === 'I7' && isOldDevice,

                        // I8 ANIM
                        [cls.TapAnimationToadI8]: toadAnimPosition === 'I8' && !isOldDevice,
                        [cls.TapAnimationToadI8Old]: toadAnimPosition === 'I8' && isOldDevice,

                        // I9 ANIM
                        [cls.TapAnimationToadI9]: toadAnimPosition === 'I9' && !isOldDevice,
                        [cls.TapAnimationToadI9Old]: toadAnimPosition === 'I9' && isOldDevice,

                        // I10 ANIM
                        [cls.TapAnimationToadI10]: toadAnimPosition === 'I10' && !isOldDevice,
                        [cls.TapAnimationToadI10Old]: toadAnimPosition === 'I10' && isOldDevice,

                        // I11 ANIM
                        [cls.TapAnimationToadI11]: toadAnimPosition === 'I11' && !isOldDevice,
                        [cls.TapAnimationToadI11Old]: toadAnimPosition === 'I11' && isOldDevice,

                        // J1 ANIM
                        [cls.TapAnimationToadJ1]: toadAnimPosition === 'J1' && !isOldDevice,
                        [cls.TapAnimationToadJ1Old]: toadAnimPosition === 'J1' && isOldDevice,

                        // J2 ANIM
                        [cls.TapAnimationToadJ2]: toadAnimPosition === 'J2' && !isOldDevice,
                        [cls.TapAnimationToadJ2Old]: toadAnimPosition === 'J2' && isOldDevice,

                        // J3 ANIM
                        [cls.TapAnimationToadJ3]: toadAnimPosition === 'J3' && !isOldDevice,
                        [cls.TapAnimationToadJ3Old]: toadAnimPosition === 'J3' && isOldDevice,

                        // J4 ANIM
                        [cls.TapAnimationToadJ4]: toadAnimPosition === 'J4' && !isOldDevice,
                        [cls.TapAnimationToadJ4Old]: toadAnimPosition === 'J4' && isOldDevice,

                        // J5 ANIM
                        [cls.TapAnimationToadJ5]: toadAnimPosition === 'J5' && !isOldDevice,
                        [cls.TapAnimationToadJ5Old]: toadAnimPosition === 'J5' && isOldDevice,

                        // J6 ANIM
                        [cls.TapAnimationToadJ6]: toadAnimPosition === 'J6' && !isOldDevice,
                        [cls.TapAnimationToadJ6Old]: toadAnimPosition === 'J6' && isOldDevice,

                        // J7 ANIM
                        [cls.TapAnimationToadJ7]: toadAnimPosition === 'J7' && !isOldDevice,
                        [cls.TapAnimationToadJ7Old]: toadAnimPosition === 'J7' && isOldDevice,

                        // J8 ANIM
                        [cls.TapAnimationToadJ8]: toadAnimPosition === 'J8' && !isOldDevice,
                        [cls.TapAnimationToadJ8Old]: toadAnimPosition === 'J8' && isOldDevice,

                        // J9 ANIM
                        [cls.TapAnimationToadJ9]: toadAnimPosition === 'J9' && !isOldDevice,
                        [cls.TapAnimationToadJ9Old]: toadAnimPosition === 'J9' && isOldDevice,

                        // J10 ANIM
                        [cls.TapAnimationToadJ10]: toadAnimPosition === 'J10' && !isOldDevice,
                        [cls.TapAnimationToadJ10Old]: toadAnimPosition === 'J10' && isOldDevice,

                        // J11 ANIM
                        [cls.TapAnimationToadJ11]: toadAnimPosition === 'J11' && !isOldDevice,
                        [cls.TapAnimationToadJ11Old]: toadAnimPosition === 'J11' && isOldDevice,

                        // K1 ANIM
                        [cls.TapAnimationToadK1]: toadAnimPosition === 'K1' && !isOldDevice,
                        [cls.TapAnimationToadK1Old]: toadAnimPosition === 'K1' && isOldDevice,

                        // K2 ANIM
                        [cls.TapAnimationToadK2]: toadAnimPosition === 'K2' && !isOldDevice,
                        [cls.TapAnimationToadK2Old]: toadAnimPosition === 'K2' && isOldDevice,

                        // K3 ANIM
                        [cls.TapAnimationToadK3]: toadAnimPosition === 'K3' && !isOldDevice,
                        [cls.TapAnimationToadK3Old]: toadAnimPosition === 'K3' && isOldDevice,

                        // K4 ANIM
                        [cls.TapAnimationToadK4]: toadAnimPosition === 'K4' && !isOldDevice,
                        [cls.TapAnimationToadK4Old]: toadAnimPosition === 'K4' && isOldDevice,

                        // K5 ANIM
                        [cls.TapAnimationToadK5]: toadAnimPosition === 'K5' && !isOldDevice,
                        [cls.TapAnimationToadK5Old]: toadAnimPosition === 'K5' && isOldDevice,

                        // K6 ANIM
                        [cls.TapAnimationToadK6]: toadAnimPosition === 'K6' && !isOldDevice,
                        [cls.TapAnimationToadK6Old]: toadAnimPosition === 'K6' && isOldDevice,

                        // K7 ANIM
                        [cls.TapAnimationToadK7]: toadAnimPosition === 'K7' && !isOldDevice,
                        [cls.TapAnimationToadK7Old]: toadAnimPosition === 'K7' && isOldDevice,

                        // K8 ANIM
                        [cls.TapAnimationToadK8]: toadAnimPosition === 'K8' && !isOldDevice,
                        [cls.TapAnimationToadK8Old]: toadAnimPosition === 'K8' && isOldDevice,

                        // K9 ANIM
                        [cls.TapAnimationToadK9]: toadAnimPosition === 'K9' && !isOldDevice,
                        [cls.TapAnimationToadK9Old]: toadAnimPosition === 'K9' && isOldDevice,

                        // K10 ANIM
                        [cls.TapAnimationToadK10]: toadAnimPosition === 'K10' && !isOldDevice,
                        [cls.TapAnimationToadK10Old]: toadAnimPosition === 'K10' && isOldDevice,

                        // K11 ANIM
                        [cls.TapAnimationToadK11]: toadAnimPosition === 'K11' && !isOldDevice,
                        [cls.TapAnimationToadK11Old]: toadAnimPosition === 'K11' && isOldDevice,

                    },
                    [],
                )}
            />
            <div
                className={classNames(
                    cls.toad,
                    {
                        // E10 ANIM
                        // [cls.TapAnimationToadE10]: true,
                    },
                    [],
                )}
            />
        </div>
    );
});
