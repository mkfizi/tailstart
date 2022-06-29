const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: [
        "./*.html",
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {
            minHeight: {
                "screen": [defaultTheme.minHeight.screen, "calc(var(--vh, 1vh) * 100)"],
            },
            height: {
                "screen": [defaultTheme.height.screen, "calc(var(--vh, 1vh) * 100)"],
            }
        }
    },
    plugins: [],
}
