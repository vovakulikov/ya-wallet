/**
 * Created by Not Igor on 31.05.2017.
 */
module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules(?!\/webpack-dev-server)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['es2015', { modules: false }],
                  'react'
                ],
                plugins: [
				  ["emotion", { "extractStatic": true  }],
                  'syntax-dynamic-import',
                  'react-hot-loader/babel',
				 ["import", {libraryName: "antd", style: "css"}]
                ],
              },
            }],
        }
      ],
    },
  };
};
