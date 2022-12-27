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
- [Directory Structure](#directory-structure)
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

If you never heard of NPM before, this is the best time to start using it since modern web development work best with NPM. Refer here for more informations:[NPM](https://www.npmjs.com/)

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

Refer [TailwindCSS Theme Configuration](https://tailwindcss.com/docs/theme) for more informations on how to further customize `tailwind.config.js`: 

## Directory structure

By default, Tailstart directory initially looks as below:

```text
tailstart
├── src
│   ├── css
│   │   ├── input.css
│   │   └── style.css
│   └── js
│       └── script.js
├── .editorconfig
├── .gitattributes
├── .gitignore
├── 404.html
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── apple-touch-icon.png
├── browserconfig.xml
├── CHANGELOG.md
├── DIRECTORY.md
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── humans.txt
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── robots.txt
├── site.webmanifest
├── tailwind.config.js
├── tile.png
└── tile-wide.png
```

### `src` subdirectory

This subdirectory contains project's CSSs, Javscript and asset related files. For starter, it contains `css` and `js` directory. The name for `src` can be changed to conventional name for source files such as `assets` and can be further customized according to your project's requirements.

Any asset related files can be included in the subdirectory by creating new directories such as `img` for image files and `fonts` for font files. 

#### src/css

This subdirectory should contain all of your project's CSS files. For starter, this subdirectory contains below files: 

- `input.css` ─ TailwindCSS variable declaration.
- `style.css` ─ Rendered TailwindCSS variable outputs.

#### src/js

This directory should contain all of your project's Javscript files. For starter, this subdirectory contains below file: 

- `script.js` ─ Main Javascript source codes.

### HTML Pages

These are files that render the view for your site's page.

#### index.html

This is the default HTML page for when the site is loaded. It contains the scaffolding code needed to get started with building a web page. You may use this file as a template for creating other pages.

#### 404.html

This is the default error page for when the site URL is not existed.

### Configuration files

These are files which purposes are to provide settings for the project.

#### .editorconfig

This file contains all settings for different editors and IDEs to maintain consistent coding styles.

#### robots.txt

This file contains configuration on how search engine will crawl the page. Refer [Robots.txt](https://moz.com/learn/seo/robotstxt) for more informations.

#### .tailwind.config.js

This file contain properties related to TailwindCSS configurations. Refer [TailwindCSS Configuration](https://tailwindcss.com/docs/configuration) for further customizations.

#### Git Files

These are Git related configuration files:

- `.gitattributes` ─ Track declared files to be pushed to git repository.
- `.gitignore` ─ Prevent declared files from being pushed to git repository.

#### NPM files

These are NPM related configuration file:

- `package-lock.json` ─ Contains record of installed package for nnpm registry.
- `package.json` ─ Contains project informations, scripts and dependancies.

### Favicons and jcons

These files are settings related with Favicon and Tile properties which can be replaced and customize accordingly. Standard favicon and icons that are loaded by default consists as below:

- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`

#### browserconfig.xml

This file contains custom tile settings for Edge Browser. Icons that are used for the properties consists as below:

- `tile.png`
- `tile-wide.png`

#### site.webmanifest

This file contains properties related to Progressive Web Application. Icons that are used for the properties consists as below:

- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

Refer [Web App Manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest) for more informations.

### Miscellaneous

These file are for documentation purposes and provide informations on the project.

#### CHANGELOG.md

This file contains notable changes for each version of a project. Refer [Keep a Changlog](https://keepachangelog.com/en/1.0.0/) for more informations.

#### humans.txt

This file contains information of the team that worked on the project, and technology stacks used. Refer [humanstxt.org](https://humanstxt.org/) for more information:s 

#### LICENSE

This file contains license information of the project. More templates for license can be found here: [Choose a Licesnes](https://choosealicense.com/)

#### README.md

This file contains main information of your project. Refer [About READMEs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) for more informations.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Special thanks

- This project is hugely inspired by [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate).
- Icons are from [Tabler Icons](https://tablericons.com/).
- And thank you [@adamwathan](https://twitter.com/adamwathan) for creating TailwindCSS!

## License
[MIT](https://github.com/mkfizi/tailstart/blob/main/LICENSE)
