# Tailstart

Tailstart is a HTML5 and TailwindCSS boilerplate.

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

That's it. You may begin develop your project with Tailstart.

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

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)