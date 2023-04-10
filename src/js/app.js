/**
 * --------------------------------------------------------------------------
 * Tailstart (v0.3.0): script.js
 * Licensed under MIT (https://github.com/mkfizi/tailstart/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

"use strict";

const app = {
    /**
     * Initialize the app by setting events and updating the viewport and navbar.
     */
    init() {
        this.setEvents();
        this.updateViewportHeight();
        this.updateNavbar();
        this.updateFooterCurrentYear();
    },

    /**
     * Set the events for resizing and scrolling the window, and for toggling dark mode.
     */
    setEvents(){
        window.addEventListener("resize", this.updateViewportHeight);
        window.addEventListener("scroll", this.updateNavbar);

        const darkModeToggle = document.getElementById("darkModeToggle");
        darkModeToggle.addEventListener("click", this.updateDarkMode); 
    },

    /**
     * Update the height of the viewport.
     */
    updateViewportHeight() {
        document.documentElement.style.setProperty("--vh", (window.innerHeight * 0.01) + "px");
    },

    /**
     * Update the navbar's appearance based on scrolling.
     */
    updateNavbar() {
        const navbar = document.getElementById("navbar");
        if (window.pageYOffset > (navbar.offsetHeight - navbar.clientHeight)) {
            navbar.classList.add('bg-white', 'dark:bg-neutral-800', 'shadow');
        } else {
            navbar.classList.remove('bg-white', 'dark:bg-neutral-800', 'shadow');
        }
    },

    /**
     * Toggle between light and dark mode.
     */
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

    /**
     * Update footer current year.
     */
    updateFooterCurrentYear() {
        const element = document.getElementById("footerCurrentYear");
        element.innerHTML = new Date().getFullYear();
    }
};

// Helper functions for the app.
app.util = {
    /**
     * Add and then remove a transition effect to prevent FOUC.
     * 
     * Note:
     * For this to work, make sure 'transition-none' is defined after
     * 'transition' and 'transition-*' classes in CSS output file.
     */
    addRemoveTransition() {
        const transitions = document.querySelectorAll(".transition, .transition-all, .transition-colors, .transition-opacity, .transition-shadow, .transition-transform");
        transitions.forEach(function(transition) {
            transition.classList.add("transition-none");
            setTimeout(function(){ 
                transition.classList.remove("transition-none"); 
            }, 50);
        });
    }
};

app.init();