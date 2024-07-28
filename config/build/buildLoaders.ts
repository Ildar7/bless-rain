import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = buildBabelLoader(options);

    const scssLoader = buildCssLoader(isDev);

    const cssLoader = {
        test: /\.css$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(mp3|atlas)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    outputPath: 'assets',
                },
            },
        ],
    };

    const pngLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    return [
        svgLoader,
        pngLoader,
        babelLoader,
        typescriptLoader,
        fileLoader,
        scssLoader,
        cssLoader,
    ];
}
