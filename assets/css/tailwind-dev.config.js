const themeDir = __dirname + "/../../";
const defaultTheme = require("tailwindcss/defaultTheme");
const neColors = require("./tailwind-colors"); // ne stands for northeast;
module.exports = {
    content: [
        themeDir + "layouts/**/*.html",
        themeDir + "content/**/*.html",
        themeDir + "content/**/*.html",
        "node_modules/preline/dist/*.js",
        "themes/murshid-starter/layouts/**/*.html",
        "content/**/*.html",
        "exampleSite/layouts/**/*.html",
        "exampleSite/content/**/*.html",
    ],
    theme: {
        extend: {
            // fontFamily: {
            //     sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
            //     serif: ['"PT Serif"', ...defaultTheme.fontFamily.serif],
            //     mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
            // },
            colors: {
                ne: neColors,
            },
        },
    },
    plugins: [
        require('preline/plugin'),
    ],
};
