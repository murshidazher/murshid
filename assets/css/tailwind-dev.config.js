const themeDir = __dirname + "/../../";
const defaultTheme = require("tailwindcss/defaultTheme");
const neColors = require("./tailwind-colors"); // ne stands for northeast;
const fs = require('fs');
const lineClamp = require('@tailwindcss/line-clamp');
const typography = require('@tailwindcss/typography');
const animationDelay = require('tailwindcss-animation-delay');
const tailwindScrollbar = require('tailwind-scrollbar');
const preline = require('preline/plugin');

const getDynamicTailwindClasses = () => {
    fs.readFile('../js/preline.min.js', {
        encoding: 'utf8'
    }, data => {
        const regex = new RegExp("^o.classList" + "=(.*)$", "m");

        const settings = data
            .split('\n')
            .reduce((obj, line) => {
                const splits = line.split('=');
                const key = splits[0];
                if (splits.length > 1) {
                    obj[key] = splits.slice(1).join('=');
                }
                return obj;
            }, {});
        // ...
    });
}

module.exports = {
    mode: "jit",
    darkMode: 'class',
    content: [
        themeDir + "{layouts, content}/**/*.html",
        "node_modules/preline/dist/**/*.js",
        "../../themes/murshid-starter/layouts/**/*.html",
        "themes/murshid-starter/layouts/**/*.html",
        "content/**/*.{html, md}",
    ],
    safelist: [
        'backdrop-blur-sm',
        'bg-gray-50',
        'dark:bg-gray-800',
        'dark:bg-opacity-80',
        'bg-opacity-80'
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
            },
            scrollbar: ['rounded', 'dark']
        },
    },
    plugins: [preline, lineClamp, typography, animationDelay, tailwindScrollbar],
    variants: {
        scrollbar: ['dark', 'rounded']
    },
};
