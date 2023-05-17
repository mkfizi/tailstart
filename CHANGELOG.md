# Changelog
All notable changes to this project will be documented chronologically ordered
in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and versioning adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Types of changes:
* `Added` for new features.
* `Changed` for changes in existing functionality.
* `Deprecated` for soon-to-be removed features.
* `Removed` for now removed features.
* `Fixed` for any bug fixes.
* `Security` in case of vulnerabilities.

## [Unreleased]
Put unreleased changes here.

## [0.3.2] - 2023-05-17

### Added
* Responsive `<nav>` padding.
* Responsive `<main>` padding
* App versioning.

### Changed
* Navbar position from `sticky` to `fixed`.

## [0.3.1] - 2023-05-12

### Changed
* Tailstart description.
* Hero section `margin` sizing.
* Hero section `<h2>` font size.
* Tailwind CSS input from `style.css` to `tailwind.css`.

### Fixed
* npm run command `build:prod` and `watch:prod` output to `app.min.js`.

## [0.3.1] - 2023-05-15

### Added
* Re-add `addRemoveTransition()` utility method to handle FOUC.

### Changed
* All `rounded` classes changed to `rounded-md`.

### Fixed
* Error handling in `setEvents()` and `updateFooterCurrentYear()`  methods.

## [0.3.0] - 2023-04-12

### Changed
* Hero section to use `header` tag.
* Increase breakpoints from `sm:` to `md:` and `lg:` to `xl:`.
* Rename `script` subdirectory to `scripts`.
* Change base colour from using `gray` to `neutral`.
* Call `app.js` at the bottom of `index.html`.
* Put `updateFooterCurrentYear` inside `app.js`.
* Revert to using regular function for more concise code readibility.

### Fixed
* `404.html` view.

### Removed
* Title UI preset.
* Features decsription in `README.md`.

## [0.2.3] - 2023-03-27
### Changed
* Regular function to arrow function in favor of minimalist codes.
* `input.css` to `style.css` and css output filename as `app.css`.
* `script.js` to `app.js`.

### Fixed
* `updateDarkMode` method call from `this` to `app`.

## [0.2.2] - 2023-03-07
### Added
* Line height classes on h2.

### Changed
* h1 text.
* Tailstart description.
* Switch breakpoint from `md:` to `sm:` and from `xl:` to `lg:`.
* Switch element margin rule priority from `margin-bottom` to `margin-top`.

## [0.2.1] - 2023-02-08
### Added
* Script to create Tailstart archive file.
* Tailstart zip file.
* Tailstart download link in `index.html`.

### Changed
* `README.md` to include Tailstart zip file.
* Refine code and comments in `script.js`.

### Removed
* Readme link in `index.html`.

## [0.2.0] - 2023-02-04
### Added
* Smooth scroll behaviour.
* Navbar handler.
* Style presets.

### Changed
* Content width from using `container` to `max-w-screen-md`.
* Base theme color from "gray" to "blue".
* 404 page content to follow style presets.
* Update `readme.md` to include new features descriptions.

## [0.1.4] - 2022-12-16
### Changed
* Switch method calls to object method call.
* Scripts to build CSS files.

## [0.1.3] - 2022-11-11
### Changed
* Method of calling script after document DOM is loaded.
* Call to action links point to Github readme page.

## [0.1.2] - 2022-11-05
### Changed
* Background color in dark mode.
* Rename fix viewport height function.

## [0.1.1] - 2022-09-23
### Added
* Font family default and fallbacks.

## [0.1.0] - 2022-06-21
### Added
* First release.