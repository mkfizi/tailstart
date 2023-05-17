/**
 * --------------------------------------------------------------------------
 * Tailstart (v0.3.2): app.js
 * Licensed under MIT (https://github.com/mkfizi/tailstart/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

"use strict";

let app = {
    version: "0.3.2",

    // Set the events for resizing and scrolling the window, and for toggling dark mode.
    setEvents(){
        window.addEventListener("resize", this.updateViewportHeight);
        window.addEventListener("scroll", this.updateNavbar);

        const darkModeToggle = document.getElementById("darkModeToggle");
        if (darkModeToggle) darkModeToggle.addEventListener("click", this.updateDarkMode.bind(this));
    },

    // Update the height of the viewport.
    updateViewportHeight() {
        document.documentElement.style.setProperty("--vh", (window.innerHeight * 0.01) + "px");
    },

    // Update the navbar's appearance based on window scroll position.
    updateNavbar() {
        const navbar = document.getElementById("navbar");

        if (navbar) {
            // Check if window scroll position is below navbar position.
            window.pageYOffset > (navbar.offsetHeight - navbar.clientHeight)
                ? navbar.classList.add('bg-white', 'dark:bg-neutral-800', 'shadow') 
                : navbar.classList.remove('bg-white', 'dark:bg-neutral-800', 'shadow');
        }
    },

    // Toggle between light and dark mode.
    updateDarkMode() {
        app.util.addRemoveTransition();
        if (localStorage.theme === "light" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: light)").matches)) {
            localStorage.theme = 'dark';
            document.documentElement.classList.add("dark");
        } else if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            localStorage.theme = 'light';
            document.documentElement.classList.remove("dark");
        };
    },

    // Update header current version
    updateHeaderCurrentVersion() {
        const headerCurrentVersion = document.getElementById("headerCurrentVersion");
        if (headerCurrentVersion) headerCurrentVersion.innerHTML = this.version;
    },

    // Update footer current version
    updateFooterCurrentVersion() {
        const footerCurrentVersion = document.getElementById("footerCurrentVersion");
        if (footerCurrentVersion) footerCurrentVersion.innerHTML = this.version;
    },

    // Update footer current year.
    updateFooterCurrentYear() {
        const footerCurrentYear = document.getElementById("footerCurrentYear");
        if (footerCurrentYear) footerCurrentYear.innerHTML = new Date().getFullYear();
    },

    // Initialize app.
    init() {
        this.setEvents();
        this.updateViewportHeight();
        this.updateNavbar();
        this.updateHeaderCurrentVersion();
        this.updateFooterCurrentVersion();
        this.updateFooterCurrentYear();
    },
};

// Helper functions for the app.
app.util = {
    /**
     * Add and then remove a transition effect to prevent FOUC.
     * 
     * Note:
     * For this to work, make sure 'transition-none' is defined after
     * 'transition' and 'transition-*' classes in CSS output file.
     * Initialize app.
     */
    addRemoveTransition() {
        const transitions = document.querySelectorAll(".transition, .transition-all, .transition-colors, .transition-opacity, .transition-shadow, .transition-transform");
        for (const transition of transitions) {
            transition.classList.add("transition-none");
            setTimeout(function(){ 
                transition.classList.remove("transition-none"); 
            }, 50);
        };
    }
}

app.init();