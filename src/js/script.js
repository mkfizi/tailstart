"use strict";

// Main app object.
const app = {
    /**
     * Initialize app.
     */
    initialize : function() {
        app.setDarkModeEvent();
        app.setResizeEvent();
        app.updateViewportHeight();
    },

    /**
     * Set dark mode event.
     */
    setDarkModeEvent : function() {
        let darkModeToggle = document.getElementById("darkModeToggle");
        darkModeToggle.addEventListener("click", function() {
            app.updateDarkMode();
        });
    },

    /**
     * Set resize event for viewport height fix.
     */
    setResizeEvent : function() {
        window.addEventListener("resize", function() {
            app.updateViewportHeight;
        });
    },

    /**
     * Update dark mode.
     */
    updateDarkMode : function() {
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
     * Update viewport height.
     */
    updateViewportHeight : function() {
        document.documentElement.style.setProperty("--vh", (window.innerHeight * 0.01) + "px");
    }

}

// Utility funcition.
app.util = {
     /**
     * Add and remove 'transition-none' classes to elements that have any 
     * 'transition' and 'transition-*' classes to avoid any animations effect
     * when toggling dark mode.
     * 
     * NOTE: 
     * For this to work, make sure 'transition-none' is defined after other
     * 'transition' and 'transition-*' classes in CSS output file.
     */
    addRemoveTransition : function() {
        let transitions = document.querySelectorAll(".transition, .transition-all, .transition-colors, .transition-opacity, .transition-shadow, .transition-transform");

        for (let i = 0; i < transitions.length; i++) {
            transitions[i].classList.add("transition-none");
            setTimeout(() => { transitions[i].classList.remove("transition-none"); }, 1000);
        }
    }
}

// Execute when document DOM is loaded to make sure all elements have been
// completely rendered.
document.addEventListener("DOMContentLoaded", function() {
    app.initialize();
});