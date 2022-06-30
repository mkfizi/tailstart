# Tailstart

Tailstart is a HTML5 and TailwindCSS boilerplate.

[View Demo](https://mkfizi.github.io/tailstart)

## Installation

Use git command to download Tailstart:
```bash 
git clone https://github.com/mkfizi/tailstart.git project-name
```
`project-name` is the name of your project's directory.

Use NPM CLI command to install TailwindCSS dependancies:
```bash
npm install
```

Use built-in CLI command to build CSS file with TailwindCSS classes.
```bash
npm run tailwind-watch
```

If you never heard of NPM before, this is the best time to start using it since
modern web development work best with NPM. Refer here for more informations:
[NPM](https://www.npmjs.com/)

That's it. You may begin develop your project with Tailstart. Dont forget to
remove `.git` folder and then run `git init` should you want to push commits to
your own repository.

## Usage

Tailstart serves as a starting point for creating web applications or sites. It
eliminates the process of setting up base configurations for project that uses
TailwindCSS.

Tailstart does not include bundler tools such as `webpack` or `parcel` since it
is a bare-bone boilerplate and we want it to be adaptable with any development
stacks.

Tailstart can be further customize and integrated with any frameworks according
to your project's requirement.

You may refer here for more information about Tailstart's directory structure:
[Tailstart Directory](./DIRECTORY.md)

## Features

Although Tailstart is considered as a skeleton template, we include some
features to help quickstart your next project.

### Built-in CLI Command

Tailstart include some built-in NPM CLI commands which purpose is to build CSS
file containing TailwindCSS classes that are present in the project. These 
commands consists as below:

* `npm run tailwind` ─ Run Tailwind CLI and build CSS.
* `npm run tailwind-watch` ─ Run Tailwind CLI and build CSS in watch mode.
* `npm run tailwind-build` ─ Run Tailwind CLI and build CSS for production.

These commands are declared in `package.json` and can be customize according to
project's path preferences.

### Dark Mode Toggle

Tailstart include a dark mode toggle built using vanilla Javascript which 
utilizes dark mode feature in TailwindCSS. 

Dark mode theme switches between value of `theme` key stored in browser's local
storage. If the key is not existed when the site is loaded for the first time, 
dark mode theme will uses value according to device's current theme setting.

You may customize dark mode scripts located in `app.js` that suits your need.

### Viewport Fix for Mobile Browsers

Tailstart include a fix for the notorious [viewport issue on mobile browsers](https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser)
where is calculate the actual browser's viewport and append the value on
targeted classes that use 'vh' unit on it's properties.

Targeted classes are defined in `tailwind.config.js` by adding `calc(var(--vh, 1vh) * [number])`
on defined properties where `[number]` is the number of the viewport height. 
By default Tailstart append this value on `min-h-screen` and `h-screen` classes.

Here is an on how to extend this feature on other existing or custom classes
that uses 'vh' unit on it's properties:
```
//tailwind.config.js
...
    theme: {
        extend: {
            height: {
                "xl": "calc(var(--vh, 1vh) * 50)",
            }
        }
    }
...

// CSS output
.h-xl{
    height: calc(var(--vh, 1vh) * 50) // This is equivalent to 50vh
}
```

Refer here on how to further customize `tailwind.config.js`:
[TailwindCSS Theme Configuration](https://tailwindcss.com/docs/theme)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

Please make sure to update tests as appropriate.

## Special Thanks

This project is hugely inspired by 
[HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate).

And thank you [@adamwathan](https://twitter.com/adamwathan) for creating
TaildwindCSS!

## License
[MIT](https://choosealicense.com/licenses/mit/)
