# Tailstart

Tailstart is a HTML5 and TailwindCSS boilerplate.

[View Demo](https://mkfizi.github.io/tailstart)

### Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
    * [Dark mode toggle](#dark-mode-toggle)
    * [Navbar handler](#navbar-handler)
    * [Style presets](#style-presets)
    * [Viewport height fix](#viewport-height-fix)
* [Contributing](#contributing)
* [Special Thanks](#special-thanks)
* [License](#license)

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

Alternatively, you may run below commands:
* `npm run build:prod` ─ Build and minify for production.
* `npm run watch` ─ Build and watch for changes in real time.
* `npm run watch:prod` ─ Build and minify for production and watch for changes in real time.

That's it. You may begin to develop your project with Tailstart. Don't forget to remove `.git` folder and then run `git init` should you want to push commits to your own repository.

If you never heard of NPM before, this is the best time to start using it since modern web development work best with NPM. Refer to [NPM](https://www.npmjs.com/) for more informations.

## Usage

Tailstart serves as a starting point for creating web applications or sites. It eliminates the process of setting up base configurations for project that uses TailwindCSS. It can be further customized and integrated with any frameworks according to your project's requirement. 

>Note:
Tailstart does not include bundler tools such as `webpack` or `parcel` since it is a bare-bone boilerplate and we want it to be adaptable with any development stacks.

## Features

Although Tailstart is a skeleton template, we include some features to help quickstart your next project.

### Dark mode toggle

Tailstart include a dark mode toggle built using vanilla Javascript to toggle dark mode feature in TailwindCSS. Dark mode theme switches between value of `theme` key stored in browser's `localstorage`. If the key is not existed when the site is loaded for the first time, dark mode theme will create a value according to device's current theme setting.

### Navbar handler

Tailstart include a navbar handler built using vanilla Javascript to handle navbar appearance. This handler uses window `onscroll` event to toggle navbar classes based on window's current scroll position.

### Style presets

Tailstart include style preset preferences to help jumpstart your project. Current style preset are as below:
* Text
* Title
* Heading
* Link
* List
* Blockquote
* Badge
* Button

### Viewport height fix

Tailstart include a fix for the notorious [viewport height issue on mobile browsers](https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser) where it calculate actual browser's viewport and append the value on targeted classes that use 'vh' unit on it's properties.

Targeted classes are defined in `tailwind.config.js` by adding `calc(var(--vh, 1vh) * [number])` on defined properties where `[number]` is the number of the viewport height. By default Tailstart append this value on `min-h-screen` and `h-screen` classes.

Here is an example on how to extend this feature on other existing or custom classes that uses 'vh' unit on it's properties:

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

## Credits

* This project is hugely inspired by [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate).
* Icons are from [Tabler Icons](https://tablericons.com/).
* And thank you [@adamwathan](https://twitter.com/adamwathan) for creating TailwindCSS!

## License
[MIT](https://github.com/mkfizi/tailstart/blob/main/LICENSE)
