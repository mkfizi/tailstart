"use strict";

// Execute when document DOM is loaded to make sure site contents are rendered.
window.onload = () => {

    /**
     * Add and remove 'transition-none' classes to elements that have any 
     * 'transition' and 'transition-*' classes to avoid any animations effect
     * when toggling dark mode.
     * 
     * NOTE: 
     * For this to work, make sure 'transition-none' is defined after other
     * 'transition' and 'transition-*' classes in CSS output file.
     */
    const toggleTransitionNoneAll = () => {
        let transitions = document.querySelectorAll(".transition, .transition-all, .transition-colors, .transition-opacity, .transition-shadow, .transition-transform");
    
        for (let i = 0; i < transitions.length; i++) {
            transitions[i].classList.add("transition-none");
            setTimeout(() => { transitions[i].classList.remove("transition-none"); }, 1000);
        }
    }

    /**
     * Toggles dark mode. 
     */
     const toggleDarkMode = () => {
        toggleTransitionNoneAll();
        if (localStorage.theme === "light" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: light)").matches)) {
            localStorage.theme = 'dark';
            document.documentElement.classList.add("dark")
        } else if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            localStorage.theme = 'light';
            document.documentElement.classList.remove("dark");
        };
    }
    
    // Set dark mode toggle event listener.
    let darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", toggleDarkMode);
    
    /**
     * Viewport height fix for mobile browser.
     */
    const fixViewportHeight = () => {
        document.documentElement.style.setProperty("--vh", (window.innerHeight * 0.01) + "px");
    }

    // Event listener for viewport fix when resizing from mobile to desktop.
    window.addEventListener("resize", fixViewportHeight);

    // Trigger viewport fix when first time load.
    fixViewportHeight();
}