"use strict";

const app = {
    viewportHeight: window.innerHeight * 0.01,

    /**
     * Add and remove 'transition-none' classes to elements that have any 
     * 'transition' and 'transition-*' classes to avoid any animations effect
     * when toggling dark mode.
     * 
     * !!! NOTE: 
     * For this to work, make sure 'transition-none' is defined after other
     * 'transition' and 'transition-*' classes in CSS output file.
     */
    handleTransition: () => {
        let transitions = document.querySelectorAll(".transition, .transition-all, .transition-colors, .transition-opacity, .transition-shadow, .transition-transform");
    
        for (let i = 0; i < transitions.length; i++) {
            transitions[i].classList.add("transition-none");
            setTimeout(() => { transitions[i].classList.remove("transition-none"); }, 1000);
        }
    },

    /**
     * Get theme value from local storage or device's theme settings. 
     * @return (boolean) - Theme value
     */
    getTheme: () => {
        if (localStorage.theme === "light" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: light)").matches) return true;
        if (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) return false;
    },

    /**
     * Toggles dark mode. 
     */
    toggleDarkMode: () => {
        app.handleTransition();
        app.getTheme()
            ? app.enableDarkMode()
            : app.disableDarkMode();
    },
    
    /**
     * Enable dark mode. 
     */
     enableDarkMode: () => {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
    },

    /**
     * Disable dark mode. 
     */
    disableDarkMode: () => {
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark")
    },

    /**
     * Handle viewport issues for mobile browsers.
     * # Refer https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser
     */
    handleViewport: () => {
        document.documentElement.style.setProperty("--vh", app.viewportHeight + "px");
    },

    /**
     * Initialize dark mode.
     */
    initialize: () => {
        window.onload = () => {
            document.getElementById("darkModeToggle").addEventListener("click", () => app.toggleDarkMode());
            app.handleViewport();
        }

        window.onresize = () => {
            app.handleViewport();
        }
    }
}

app.initialize();