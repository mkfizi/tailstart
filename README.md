# Tailstart

Tailstart is a HTML5 and TailwindCSS boilerplate.

[View Demo](https://mkfizi.github.io/tailstart)

### Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
    - [Built-in CLI commands](#built-in-cli-commands)
    - [Dark mode toggle](#dark-mode-toggle)
    - [Viewport fix for mobile browsers](#viewport-fix-for-mobile-browsers)
- [Contributing](#contributing)
- [Special Thanks](#special-thanks)
- [License](#license)

## Installation

Use git command to download Tailstart where `project-name` is the name of your project's directory.
```bash 
git clone https://github.com/mkfizi/tailstart.git project-name
```

Run below command to install dependencies.
```bash
npm install
```

Run below command to build CSS file with TailwindCSS classes.
```bash
npm run build
```

That's it. You may begin to develop your project with Tailstart. Don't forget to remove `.git` folder and then run `git init` should you want to push commits to your own repository.

If you never heard of NPM before, this is the best time to start using it since modern web development work best with NPM. Refer to [NPM](https://www.npmjs.com/) for more informations.

## Usage

Tailstart serves as a starting point for creating web applications or sites. It eliminates the process of setting up base configurations for project that uses TailwindCSS. It can be further customized and integrated with any frameworks according to your project's requirement. 

>Note:
Tailstart does not include bundler tools such as `webpack` or `parcel` since it is a bare-bone boilerplate and we want it to be adaptable with any development stacks.

## Features

Although Tailstart is considered as a skeleton template, we include some features to help quickstart your next project.

### Built-in CLI commands 

Tailstart include some built-in NPM CLI commands which purpose is to build CSS file containing TailwindCSS classes that are present in the project. These commands consists as below:

- `npm run build` ─ Build CSS.
- `npm run build:prod` ─ Build and minify CSS for production.
- `npm run watch` ─ Build CSS and watch for changes in real-time.
- `npm run watch:prod` ─ Build and minift CSS for production and watch for changes in real-time.

These commands are declared in `package.json` and can be customize accordingly.

### Dark mode toggle

Tailstart include a dark mode toggle built using vanilla Javascript to toggle dark mode feature in TailwindCSS. Dark mode theme switches between value of `theme` key stored in browser's `localstorage`. If the key is not existed when the site is loaded for the first time, dark mode theme will uses value according to device's current theme setting.

You may customize dark mode scripts located in `app.js` that suits your need.

### Viewport fix for mobile browsers

Tailstart include a fix for the notorious [viewport issue on mobile browsers](https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser) where it calculate the actual browser's viewport and append the value on targeted classes that use 'vh' unit on it's properties.

Targeted classes are defined in `tailwind.config.js` by adding `calc(var(--vh, 1vh) * [number])` on defined properties where `[number]` is the number of the viewport height. By default Tailstart append this value on `min-h-screen` and `h-screen` classes.

Here is an on how to extend this feature on other existing or custom classes that uses 'vh' unit on it's properties:
```
//tailwind.config.js
...
theme: {
    extend: {
        height: {
            "xl": ["50vh", "calc(var(--vh, 1vh) * 50)"], // new class.
        }
    }
}
...

// CSS output
.h-xl{
    height: 50vh // Fallback value
    height: calc(var(--vh, 1vh) * 50) // This is equivalent to 50vh
}
```

Refer to [TailwindCSS Theme Configuration](https://tailwindcss.com/docs/theme) for more informations on how to further customize `tailwind.config.js`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Special thanks

- This project is hugely inspired by [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate).
- Icons are from [Tabler Icons](https://tablericons.com/).
- And thank you [@adamwathan](https://twitter.com/adamwathan) for creating TailwindCSS!

## License
[MIT](https://github.com/mkfizi/tailstart/blob/main/LICENSE)
