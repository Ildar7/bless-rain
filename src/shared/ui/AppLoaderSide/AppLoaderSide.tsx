import { classNames } from 'shared/lib/classNames/classNames';
import './AppLoaderSide.scss';

interface AppLoaderSideProps {
  className?: string;
}
export const AppLoaderSide = ({ className }: AppLoaderSideProps) => (
    <div
        className={classNames(
            'h-screen w-screen pointer-events-none z-50 bg-dark flex items-center justify-center relative',
            {},
            [className],
        )}
    >
        <div
            className="absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2 z-50 scale-150 bg-dark py-5 px-4 rounded-full"
        >
            <svg
                width="34"
                height="26"
                viewBox="0 0 34 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="scale-150"
            >
                <g filter="url(#filter0_d_187_20218)">
                    <path
                        d="M25.9916 10.8135C27.2305 10.8135
                        28.1233 11.2507 28.6699 12.1252C29.2287
                        12.9997 29.2833 14.0564 28.8339 15.2953L28.014
                        17.5179C27.5646 18.7568 26.7447 19.8135 25.5543
                        20.688C24.3639 21.5625 23.1493 21.9997 21.9103
                        21.9997H4L10.5046 4.09082H23.9509C25.1899 4.09082
                        26.0827 4.52807 26.6293 5.40256C27.188 6.27706 27.2427
                        7.33374 26.7933 8.5726L25.9734 10.8135H25.9916ZM13.3469
                        8.59082L12.5452 10.8135H20.3798C20.6956 10.8135 20.9993
                        10.7042 21.2908 10.4856C21.5945 10.2669 21.801 10.0058
                        21.9103 9.70216C22.0196 9.38637 22.0014 9.11916 21.8556
                        8.90054C21.722 8.68191 21.5034 8.5726 21.1997 8.5726H13.3651V8.59082H13.3469ZM23.9509
                        16.4066C24.0603 16.0908 24.042 15.8297 23.8963 15.6232C23.7627 15.4046
                        23.544 15.2953 23.2404 15.2953H10.9054L10.1037 17.5179H22.4205C22.7363
                        17.5179 23.0399 17.4086 23.3315 17.19C23.6351 16.9714 23.8416 16.7103
                        23.9509 16.4066Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_187_20218"
                        x="0"
                        y="0.0908203"
                        width="33.1348"
                        height="25.9087"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.34902 0 0 0 0 0.803922 0 0 0 0 0.945098 0 0 0 1 0"
                        />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_187_20218" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_187_20218" result="shape" />
                    </filter>
                </defs>
            </svg>

        </div>

        <div className="h-screen w-12 absolute left-1/2 -translate-x-1/2 bg-surface-dark top-0 flex justify-center">
            <div className="w-6 h-full bg-surface relative">
                <div className="fade-on-end">
                    <div className="vertical-line" />
                </div>
            </div>
        </div>

        <div className="w-1/2 h-12 bg-surface-dark absolute top-1/2 -translate-y-1/2 left-0 flex items-center">
            <div className="w-full h-6 bg-surface shine-horizontal-left relative" />
        </div>

        <div className="w-1/2 h-12 bg-surface-dark absolute top-1/2 -translate-y-1/2 right-0 flex items-center">
            <div className="w-full h-6 bg-surface relative shine-horizontal-right" />
        </div>
        <div className="bg-surface p-2 rounded-full flex items-center justify-center z-30">
            <div className="bg-surface p-1 rounded-full flex items-center justify-center z-30">
                <div className="relative fade-on-end">
                    <div className="relative">
                        <svg
                            className="progress-ring-left"
                            width="120"
                            height="120"
                        >
                            <circle
                                className="left-arc"
                                stroke="#B6E9F9"
                                strokeWidth="2"
                                fill="transparent"
                                r="52"
                                cx="60"
                                cy="60"
                            />
                        </svg>
                    </div>

                    <div className="absolute top-0">
                        <svg
                            className="progress-ring-left"
                            width="120"
                            height="120"
                        >
                            <circle
                                className="right-arc"
                                stroke="#B6E9F9"
                                strokeWidth="2"
                                fill="transparent"
                                r="52"
                                cx="60"
                                cy="60"
                            />
                        </svg>
                    </div>

                    <div className="absolute top-0 scale-125">
                        <svg
                            className="progress-ring-left"
                            width="120"
                            height="120"
                        >
                            <circle
                                className="left-arc-outer"
                                stroke="#B6E9F9"
                                strokeWidth="2"
                                fill="transparent"
                                r="52"
                                cx="60"
                                cy="60"
                            />
                        </svg>
                    </div>

                    <div className="absolute top-0 scale-125">
                        <svg
                            className="progress-ring-left"
                            width="120"
                            height="120"
                        >
                            <circle
                                className="right-arc-outer"
                                stroke="#B6E9F9"
                                strokeWidth="2"
                                fill="transparent"
                                r="52"
                                cx="60"
                                cy="60"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
