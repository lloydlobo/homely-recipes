const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer");

module.exports = {
  mode: "development" /* remove `--mode production` from scripts: build: "webpack ...." package.json config */,
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    // for images
    assetModuleFilename: "[name][ext]",
    /* https://webpack.js.org/guides/asset-management/#output-chunk-filenames */
  },
  devtool: "source-map",
  devServer: {
    // tell it what to serve - static object and directory
    // contentBase: path.resolve(__dirname, "dist"), /* old way */
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    // npm run dev - opens it automatically
    open: true,
    // hot reloading
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        /* any files which end with this extension will be used */
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        // i => case insensitive
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  // devServer: {},
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html",
      // template: path.resolve(__dirname, "src/index.html"),
    }),
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin(),
  ],
};

// -----------------------------------------------------------------------------

// 20220427120703
/* bundle-analyzer
1. npm install -D webpack-bundle-analyzer
2. add to global variables in webpack.config.js
    const BundleAnalyzerPlugin = require("webpack-bundle-analyzer");
3. add in plugins:
    plugins: [
      ...,
          new BundleAnalyzerPlugin.BundleAnalyzerPlugin(),
      ...,
    ]
4. npm run build
5. open http://127.0.0.1:8888/

*/

// 20220427082321
/* Install axios
1. ❯ npm i axios
2. import axios in genrateJokes.js
3. add a config in the genrateJokes()
4. call axios.get("url", config) in generateJokes()
5. add a promise to the call of axios.get()
  axios.get("https://...", config).then((response) => {
    document.getElementById("joke").textContent = response.data.joke
  });
6. In index.js call the function generateJokes()
*/

// 20220426203142
/* images
1. create folder is src/assets
2. add laughing.svg to src/assets
3. in index.js import it ~ index.js
    import laughing from "./assets/laughing.svg";
4. Running npm run build will throw an error because loader is not configured to handle svg files.
5. Add loader in webpack.config.js as webpack comes with asset resource loader
6. Add this in module > rules >
    {
        // i => case insensitive
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
7. Then add under => output:
        assetModuleFilename: "[name][ext]",
8. npm run build
      asset laughing.svg 4.35 KiB [emitted] [from: src/assets/laughing.svg] (auxiliary name: bundle)
9. add a <img> element with id="laughingImg" in template.html
10. In index.js =>
    const laughingImg = document.getElementById("laughingImg");
11. laughingImg.src = laughing;
12. npm run dev
*/

// 20220426201824
/* loaders for backward compatibility with @babel
1. install babel-loader for webpack as Dev dependency
    ❯ npm i -D babel-loader @babel/core @babel/preset-env
    added 88 packages, and audited 929 packages in 12s
2. add it to webpack config under modules under rules in test
     {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
3. npm run build

*/
// 20220426201133
/* Source maps
1. Add => devtool: "source-map" to webpack.config.js
2. npm run build - generates a source map too
    bundle.bea95fded53b1696b450.js.map
3.
// 2. Add => devServer: {}, to webpack.config.js
*/
// 20220426200358
/* build adds up duplicate files with unique hash ids in dist folder
    => resolve this issue with this prevention method:
1. Under filename under output:
    clean: true,
2. output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
3.Delete the dist folder before running the build command
4. npm run build
    > npm run build
    asset bundle.5fc9598629e32388fc84.js 26.4 KiB [emitted] [immutable] (name: bundle)
    asset index.html 515 bytes [emitted]
    runtime modules 937 bytes 4 modules
    cacheable modules 11.8 KiB

*/

// 20220426194439
/* devServer (runs from memory not dist folder)
1.  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
2. port 3000 for frontend stuff || port 8080 for backend stuff?
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    // npm run dev - opens it automatically
    open: true,
    // hot reloading
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
3. Run npm dev server - opens it automatically
    > npm run dev
    > webpack serve

    <i> [webpack-dev-server] Project is running at:
    <i> [webpack-dev-server] Loopback: http://localhost:3000/
    <i> [webpack-dev-server] On Your Network (IPv4): http://192.168.29.78:3000/
    <i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:3000/
    <i> [webpack-dev-server] 404s will fallback to '/index.html'
    <i> [webpack-dev-middleware] wait until bundle finished: /
    asset bundle.40b40341f618f94f9a7e.js 265 KiB [emitted] [immutable] (name: bundle)
    asset index.html 515 bytes [emitted]
4. Now stop Live Server - disposed
5. In the localhost:3000, you can see in the console
    [HMR] Waiting for update signal from WDS...
    index.js:551 [webpack-dev-server] Hot Module Replacement enabled.
    index.js:551 [webpack-dev-server] Live Reloading enabled.
// 4. npm run build - creates a production build
*/

// 20220426193634
/* auto-reload
1. Go to package.json
2. Add the following to scripts:
    "dev": "webpack serve",
3. Run `npm run dev` =>
    [webpack-cli] You need to install 'webpack-dev-server' for running 'webpack serve'.
    Error: Cannot find module 'webpack-dev-server/bin/cli-flags'
4. ❯ npm i -D webpack-dev-server
5. ❯ npm run dev
   > webpack serve

   <i> [webpack-dev-server] Project is running at:
   <i> [webpack-dev-server] Loopback: http://localhost:8080/
6. Stop it with `Ctrl+C`
    ^C<i> [webpack-dev-server] Gracefully shutting down.
    To force exit, press ^C again. Please wait...

 */

// 20220426193043
/* caching
 https://webpack.js.org/guides/caching/
 result => example ~ bundle.wt3t34t34t3443443t43.js
 a hash gets created - helps with caching
 it changes everytie the file changes

1. BEFORE: filename: "[name].js",
2. AFTER: filename: "[name].[contenthash].js",
3. Delete the whole dist folder and run the build again
4. The hash will change => bundle.5fc9598629e32388fc84.js
5. In the dist/index.html - automatically ts added =>
    <script defer src="bundle.5fc9598629e32388fc84.js"></script></head>
6. Now on to auto reload server
*/

// 20220426191902
/* templating
1. create src/template.html => call it whatever you want
2. plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html", // Add this now!!!!!
    }),
3. generate boiler plate in html
4. in the <title> tag add `<%= htmlWebpackPlugin.options.title %>`
5. run `npm run build`
6. dist/index.html gets generated with template.html
*/

// 20220426190935
/* plugins
// 2.❯ npm i -D mini-css-extract-plugin
1.❯ npm i -D html-webpack-plugin
2. Add to webpack.config.js ~ const HtmlWebpackPlugin = require("html-webpack-plugin");
3. plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
    }),
  ],
4. Delete the dist folder
5. Run webpack `npm run build`
6. dist folder gets created BUT
7. Adding something gets rid of it so we NEED a template in the src/ folder

*/

// 20220426182425
/* loaders
1. ❯ npm i -D sass style-loader css-loader sass-loader
2. before adding loaders, create a sass file => src/styles/main.scss
3. import "./styles/main.scss";  You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
4. module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
*/

// 20220426182421
/* __dirname is current directory */
/* since bundle is introduced, output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  rename "bundel.js" to "[name].js",
=> Therefore
entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  whatever the name of entry is - in this case bundle, the output will be bundle.js

  if
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },

    output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js", // [name] is the name of entry => !!! main.js !!!
    },
  */
