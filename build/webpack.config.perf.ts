import * as CopyWebpackPlugin from 'copy-webpack-plugin'
import { webpack as lernaAliases } from 'lerna-alias'
import * as webpack from 'webpack'

import config from '../config'

const { paths } = config
const { __DEV__, __PROD__ } = config.compiler_globals

const webpackConfig: any = {
  name: 'client',
  target: 'web',
  mode: __DEV__ ? 'development' : 'production',
  entry: {
    app: paths.perfSrc('index'),
    vendor: config.compiler_vendor,
  },
  output: {
    filename: `[name].js`,
    path: paths.perfDist(),
    pathinfo: true,
    publicPath: config.compiler_public_path,
  },
  devtool: config.compiler_devtool,
  node: {
    fs: 'empty',
    module: 'empty',
    child_process: 'empty',
    net: 'empty',
    readline: 'empty',
  },
  module: {
    noParse: [/anchor-js/],
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        options: {
          useCache: true,
          configFileName: paths.base('build/tsconfig.perf.json'),
          errorsAsWarnings: __DEV__,
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(config.compiler_globals),
    new CopyWebpackPlugin([
      {
        from: paths.perfSrc('index.html'),
        to: paths.perfDist(),
      },
    ]),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      ...lernaAliases(),
      docs: paths.base('docs'),
      src: paths.packageSrc('react'),

      // We are React in production mode with tracing.
      // https://gist.github.com/bvaughn/25e6233aeb1b4f0cdb8d8366e54a3977
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    },
  },
  performance: {
    hints: false, // to (temporarily) disable "WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit")
  },
}

if (__PROD__) {
  webpackConfig.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  )
}

export default webpackConfig
