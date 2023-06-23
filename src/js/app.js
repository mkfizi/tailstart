/**
 * --------------------------------------------------------------------------
 * Tailwind Starter Kit v1.0.0: app.js
 * Licensed under MIT (https://github.com/mkfizi/tailwind-starter-kit/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

'use strict';

let app = {
    name: 'Tailwind Starter Kit',
};

app.elements = {
    navbar: document.getElementById('navbar'),
    navbarMenu: document.getElementById('navbarMenu'),
    darkModeToggle: document.getElementById('darkModeToggle'),
    navbarMenuToggle: document.getElementById('navbarMenuToggle'),
    footerCurrentYear: document.getElementById('footerCurrentYear'),
    footerAppName: document.getElementById('footerAppName'),
};

app.config = {
    isMenuActive: false,
    breakpointSize: 640
}

app.init = () => {
    app.view.init();
    app.event.init();
};

app.event = {
    init: () => {
        document.addEventListener('click', app.event.handleDocumentClick);
        window.addEventListener('resize', app.event.handleWindowResize);
        window.addEventListener('scroll', app.event.handleWindowScroll);
    },

    handleDocumentClick: event => {
        const target = event.target;

        if (target.closest('[id="darkModeToggle"]')) {
            app.view.updateDarkMode();
        } else if (target.closest('[id="navbarMenuToggle"]')) {
            app.view.toggleNavbarMenu();
        }
    },

    handleWindowResize: () => {
        app.view.updateViewportHeight();
        app.view.updateNavbarMenu();
    },

    handleWindowScroll: () => {
        app.view.updateNavbar();
    }
};

app.view = {
    init: () => {
        app.view.updateViewportHeight();
        app.view.updateAppInfo();
    },

    // Update the height of the viewport. This is a workaround fix for [viewport height issue on mobile browsers](https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser) 
    updateViewportHeight: () => {
        document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
    },

    // Update navbar appearance based on window scroll position
    updateNavbar: () => {
        if (!app.elements.navbar) return;

        const isNavbarScrolled = window.pageYOffset > (app.elements.navbar.offsetHeight - app.elements.navbar.clientHeight);

        app.elements.navbar.classList.toggle('border-neutral-200', isNavbarScrolled);
        app.elements.navbar.classList.toggle('dark:border-neutral-800', isNavbarScrolled);
        app.elements.navbar.classList.toggle('border-transparent', !isNavbarScrolled);
        app.elements.navbar.classList.toggle('dark:border-transparent', !isNavbarScrolled);
    },

    // Update dark mode based on value in 'localStorage.theme'
    updateDarkMode: () => {
        app.util.toggleTransition();

        if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
        } else if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark');
        }
    },

    // Update the footer with current year, app name, and version
    updateAppInfo: () => {
        if (app.elements.footerCurrentYear) {
            app.elements.footerCurrentYear.innerHTML = new Date().getFullYear();
        }

        if (app.elements.footerAppName) {
            app.elements.footerAppName.innerHTML = app.name;
        }
    },

    // Toggle the navbar menu visibility and update related elements
    toggleNavbarMenu: () => {
        app.util.toggleTransitionAll(app.elements.navbarMenu);

        app.elements.navbarMenu.classList.toggle('hidden', app.config.isNavbarMenuActive);
        app.elements.navbarMenu.classList.toggle('flex', !app.config.isNavbarMenuActive);
        app.util.focusable[app.config.isNavbarMenuActive ? 'disable' : 'enable'](app.elements.navbarMenu);
        app.util.static[app.config.isNavbarMenuActive ? 'disable' : 'enable']();
        app.util.focusTrap[app.config.isNavbarMenuActive ? 'disable' : 'enable'](app.elements.navbarMenu);
      
        app.elements.navbarMenuToggle.setAttribute('aria-expanded', !app.config.isNavbarMenuActive);
        app.config.isNavbarMenuActive = !app.config.isNavbarMenuActive;
    },

    // Update navbar menu to handle state when switching pass breakpoint size
    updateNavbarMenu: () => {
        if (window.innerWidth >= app.config.breakpointSize && app.config.isNavbarMenuActive) {
            app.view.toggleNavbarMenu();
        }
    }
};

app.util = {
    static: {
        enable: () => {
            document.getElementsByTagName("BODY")[0].classList.add('overflow-hidden');
        },

        disable: () => {
            document.getElementsByTagName("BODY")[0].classList.remove('overflow-hidden');
        }
    },

    focusable: {
        selector: `a, button, input, textarea, select, details, [contenteditable="true"]`,

        // Enable focus on the specified element and its focusable child elements
        enable: element => {
            for (const focusableElement of element.querySelectorAll(app.util.focusable.selector)) {
                focusableElement.classList.remove("invisible");
            }
        },

        // Disable focus on the specified element and its focusable child elements
        disable: element => {
            for (const focusableElement of element.querySelectorAll(app.util.focusable.selector)) {
                focusableElement.classList.add("invisible");
            }
        },
    },

    focusTrap: {
        active: {},
        selector: `a:not([tabindex="-1"]), button:not([tabindex="-1"]), input:not([tabindex="-1"]), textarea:not([tabindex="-1"]), select:not([tabindex="-1"]), details:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]:not([tabindex="-1"])`,

        // Handle focus trap event
        handleEvent: (event, element) => {
            const focusableElements = element.querySelectorAll(app.util.focusTrap.selector);
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
        
            if (event.type === "keydown" && event.keyCode === 9) {
                if (event.shiftKey && (document.activeElement === firstElement || document.activeElement === document.body)) {
                    event.preventDefault();
                    lastElement.focus();

                } else if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        },

        // Enable focus trap on specified element
        enable: element => {
            const id = element.getAttribute("id");
            app.util.focusTrap.active[id] = event => app.util.focusTrap.handleEvent(event, element)
            window.addEventListener("keydown", app.util.focusTrap.active[id]);
            setTimeout(function() { 
                element.setAttribute("tabindex", 0);
                element.focus();
            }, 50);

            setTimeout(function() { 
                element.removeAttribute("tabindex"); 
                element.blur();
            }, 100);
        },

        // Disable focus trap on specified element
        disable: element => {
            const id = element.getAttribute("id");
            window.removeEventListener("keydown", app.util.focusTrap.active[id]);
            app.util.focusTrap.active[id] = null;
        }
    },

    // Toggle CSS transitions for smoother element transitions
    toggleTransition: () => {
        const transitions = document.querySelectorAll('.transition, .transition-all, .transition-colors, .transition-opacity, .transition-shadow, .transition-transform');
        for (const transition of transitions) {
            transition.classList.add('transition-none');
            setTimeout(() => {
                transition.classList.remove('transition-none');
            }, 150);
        }
    },

    // Toggle CSS transition on the specified element
    toggleTransitionAll: element => {
        element.classList.add('transition-all');
        setTimeout(() => {
            element.classList.remove('transition-all'); 
        }, 150);
    }
};

app.init();