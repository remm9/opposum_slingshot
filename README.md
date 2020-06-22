<<<<<<< HEAD
1. create your new project directory and `cd` into it 
2. `git init`
3. create a simple `.gitignore`
        
        # .gitignore

        /node_modules/
4. `npm init` and follow prompts
5. install dev dependencies
   
        npm install @babel/core @babel/preset-env autoprefixer babel-loader css-loader fibers file-loader mini-css-extract-plugin node-sass postcss-loader sass sass-loader style-loader url-loader webpack webpack-cli webpack-dev-server webpack-merge --save-dev

6. create basic `/src` subdirectory file structure

        - src/
            - index.js
            styles/
                - index.scss
            scripts/

7. In your root directory, create `webpack.common.js`

    ```JavaScript
    // webpack.common.js

    const path = require("path");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    const outputDir = "./dist";

    module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"), //
    output: {
        path: path.join(__dirname, outputDir),
        filename: "[name].js",
        publicPath: "/dist/"
    },
    resolve: {
        extensions: [".js"] // if we were using React.js, we would include ".jsx"
    },
    module: {
        rules: [
        {
            test: /\.js$/, // if we were using React.js, we would use \.jsx?$/
            use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: ["@babel/plugin-proposal-optional-chaining"],
                exclude: /node_modules/
            } // if we were using React.js, we would include "react"
            }
        },
        {
            test: /\.css$/,
            use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: "../",
                hmr: process.env.NODE_ENV === "development"
                }
            },
            "css-loader",
            "postcss-loader"
            ]
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
            {
                loader: "file-loader",
                options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                name: "[name].[ext]",
                outputPath: "images/",
                publicPath: "images/"
                }
            }
            ]
        },
        {
            test: /\.scss/,
            use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: "../",
                hmr: process.env.NODE_ENV === "development"
                }
            },
            "css-loader",
            "sass-loader",
            "postcss-loader"
            ]
        }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
        ignoreOrder: false // Enable to remove warnings about conflicting order
        }),
        require("autoprefixer")
    ]
    };

    ```

8. Create `webpack.dev.js`

    ```JavaScript
    // wepack.dev.js
    const merge = require("webpack-merge");
    const common = require("./webpack.common.js");

    module.exports = merge(common, {
        mode: "development",
        devtool: "inline-source-map",
        devServer: {
            contentBase: "./",
            watchContentBase: true,
            open: "Google Chrome"
        }
    });
    ```

9. Create `webpack.prod.js`

    ```JavaScript
    // webpack.prod.js
    const merge = require("webpack-merge");
    const common = require("./webpack.common.js");

    module.exports = merge(common, {
        mode: "production",
        devtool: "source-map"
    });
    ```

10. create `postcss.config.js`

    ```JavaScript
    // postcss.config.js
    module.exports = {
        plugins: {
            autoprefixer: {}
        }
    };
    ```

11. add `browserlist` key and update `scripts` in `package.json`

    ```JavaScript
    // package.json
    "browserslist": [
        "last 1 version",
        "> 1%",
        "maintained node versions",
        "not dead"
    ],
    "scripts": {
        "start": "webpack-dev-server --config webpack.dev.js",
        "webpack:watch": "webpack --watch --config webpack.dev.js",
        "webpack:build": "webpack --config webpack.prod.js  --optimize-minimize"
    },
    ```

12. create `index.scss` in `/src/styles`

13. create `index.js` in `/src` directory and import style `/src/styles/index.scss`

14. create `index.html` and import `dist/main.css` and `dist/main.js` appropriately
=======
# Opposum Slingshot

Opposum Slingshot is an slilngshot game inspired by Ice Age movie and Micro Olympics. The objective of the game is to shot the opposum as far as possible by choosing vector and sling pull strength.

<img width="644" alt="Screen Shot 2020-06-21 at 18 02 32" src="https://user-images.githubusercontent.com/59717705/85236192-9c583600-b3e9-11ea-8a98-94e1f393e351.png">

## Functionality MVPs

  ### the user will be able 
  - start a game 
  - choose vector by stopping vector arrow automatically going between 0 and 90 degrees
  - choose power by stopping power indicator automatically going between 0 and 100 on x axis
  - abort game
  
  ### will be given three attempts 
  - first attempt (slow speed)
  - second attempt (medium speed)
  - third attempt (high speed)
  
  ### in addition: as opposum is shot
  - backgroud will move to mimic flying 
  - add audio: "I believe I can fly"
  
## Wireframes && File Structure
![IMG_0329](https://user-images.githubusercontent.com/59717705/85240003-768c5a80-b404-11ea-9a06-70c276245e56.JPG)

## Technology employed 
  - JavaScript for game logic
  - HTML5 canvas for background scrolling
  - CSS animation for slingshot vector and power controls
  
## Implementation Timeline
  - day 1: seting up js project, creating game logic
  - day 2: working on vector/power indicator
  - day 3: working on trajectory vector logic
  - day 4: canvas background 
  - day 5: readme
  
## Bonus 
  - add splash page with account creation and score board
  
  
 
>>>>>>> ea728d53379249639c0c045874959428dd0618b6
