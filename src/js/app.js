/**
 * --------------------------------------------------------------------------
 * Tailstart (v0.3.0): app.js
 * Licensed under MIT (https://github.com/mkfizi/tailstart/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

"use strict";

const app = {
    /**
     * Set the events for resizing and scrolling the window, and for toggling dark mode.
     */
    setEvents(){
        window.addEventListener("resize", this.updateViewportHeight);
        window.addEventListener("scroll", this.updateNavbar);

        const darkModeToggle = document.getElementById("darkModeToggle");
        darkModeToggle.addEventListener("click", this.updateDarkMode.bind(this));
    },

    /**
     * Update the height of the viewport.
     */
    updateViewportHeight() {
        document.documentElement.style.setProperty("--vh", (window.innerHeight * 0.01) + "px");
    },

    /**
     * Update the navbar's appearance based on window scroll position.
     */
    updateNavbar() {
        const navbar = document.getElementById("navbar");

        // Check if window scroll position is below navbar position.
        (window.pageYOffset > (navbar.offsetHeight - navbar.clientHeight)) 
            ? navbar.classList.add('bg-white', 'dark:bg-neutral-800', 'shadow') 
            : navbar.classList.remove('bg-white', 'dark:bg-neutral-800', 'shadow');
    },

    /**
     * Toggle between light and dark mode.
     */
    updateDarkMode() {
        if (localStorage.theme === "light" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: light)").matches)) {
            localStorage.theme = 'dark';
            document.documentElement.classList.add("dark");
        } else if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            localStorage.theme = 'light';
            document.documentElement.classList.remove("dark");
        };
    },

    /**
     * Update footer current year.
     */
    updateFooterCurrentYear() {
        const footerCurrentYear = document.getElementById("footerCurrentYear");
        footerCurrentYear.innerHTML = new Date().getFullYear();
    },

    /**
     * Initialize app.
     */
    init() {
        this.setEvents();
        this.updateViewportHeight();
        this.updateNavbar();
        this.updateFooterCurrentYear();
    },

};

app.init();