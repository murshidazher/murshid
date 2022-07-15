const themeDir = __dirname + "/../../";
const defaultTheme = require("tailwindcss/defaultTheme");
const neColors = require("./tailwind-colors"); // ne stands for northeast;

module.exports = {
    darkMode: 'class',
    content: [
        themeDir + "layouts/**/*.html",
        themeDir + "content/**/*.html",
        "node_modules/preline/dist/**/*.js",
        "themes/murshid-starter/layouts/**/*.html",
        "layouts/**/*.html",
        "content/**/*.html",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Newsreader"', ...defaultTheme.fontFamily.serif],
                mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                ne: neColors,
            },
            backgroundColor: {
                transparent: 'transparent',
            }
        },
    },
    plugins: [
        require('preline/plugin'),
    ],
};
