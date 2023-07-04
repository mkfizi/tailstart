/**
 * --------------------------------------------------------------------------
 * Tailstart Kit v1.1.0: app.js
 * Licensed under MIT (https://github.com/mkfizi/tailstart-kit/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

'use strict';

let app = {
    name: 'Tailstart Kit',
    version: '1.1.0',
};

app.elements = {
    navbar: document.getElementById('navbar'),
    navbarMenu: document.getElementById('navbar-menu'),
    darkModeToggle: document.getElementById('dark-mode-toggle'),
    navbarMenuToggle: document.getElementById('navbar-menu-toggle'),
    footerYear: document.getElementById('footer-year'),
    footerAppName: document.getElementById('footer-app-name'),
    footerAppVersion: document.getElementById('footer-app-version'),
};

app.config = {
    navbarMenu: {
        isActive: false,
        breakpointSize: 1024
    }
},

app.init = () => {
    app.view.init();
    app.event.init();
};

app.event = {
    init: () => {
        document.addEventListener('click', app.event.handleDocumentClick);
        window.addEventListener('resize', app.event.handleWindowResize);
    },

    handleDocumentClick: event => {
        const target = event.target;

        if (target.closest('[id="dark-mode-toggle"]')) {
            app.view.darkMode.toggle();
        } else if (target.closest('[id="navbar-menu-toggle"]')) {
            app.view.navbar.menu.toggle();
        }
    },

    handleWindowResize: () => {
        app.view.viewportHeight.toggle();

        if (window.innerWidth >= app.config.navbarMenu.breakpointSize && app.config.navbarMenu.isActive) { 
            app.view.navbar.menu.toggle();
        }
    },

    handleWindowScroll: () => {
        app.view.navbar.toggle();
    }
};

app.view = {
    init: () => {
        app.view.viewportHeight.toggle();
        app.view.footer.toggle();
    },

    viewportHeight: {
        toggle: () => {
            document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
        }
    },

    darkMode: {
        toggle: () => {
            app.util.transition.toggle();

            const isLightMode = localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches);
            localStorage.theme = isLightMode ? 'dark' : 'light';
            document.documentElement.classList.toggle('dark', isLightMode);
        }
    },

    navbar: {
        toggle: () => {
            if (!app.elements.navbar) return;

            const isNavbarScrolled = window.pageYOffset > (app.elements.navbar.offsetHeight - app.elements.navbar.clientHeight);

            app.elements.navbar.classList.toggle('border-neutral-200', isNavbarScrolled);
            app.elements.navbar.classList.toggle('dark:border-neutral-800', isNavbarScrolled);
            app.elements.navbar.classList.toggle('border-transparent', !isNavbarScrolled);
            app.elements.navbar.classList.toggle('dark:border-transparent', !isNavbarScrolled);
        },

        menu: {
            toggle: () => {
                app.util.transition.all.toggle(app.elements.navbarMenu);

                app.elements.navbarMenu.classList.toggle('hidden', app.config.navbarMenu.isActive);
                app.elements.navbarMenu.classList.toggle('flex', !app.config.navbarMenu.isActive);
                app.util.focusable[app.config.isNavbarMenuActive ? 'disable' : 'enable'](app.elements.navbarMenu);
                app.util.static[app.config.isNavbarMenuActive ? 'disable' : 'enable']();
                app.util.focusTrap[app.config.isNavbarMenuActive ? 'disable' : 'enable'](app.elements.navbarMenu);
              
                app.elements.navbarMenuToggle.setAttribute('aria-expanded', !app.config.navbarMenu.isActive);
                app.config.navbarMenu.isActive = !app.config.navbarMenu.isActive;
            }
        }
    },

    footer: {
        toggle: () => {
            if (app.elements.footerYear) {
                app.elements.footerYear.innerHTML = new Date().getFullYear();
            }
    
            if (app.elements.footerAppName) {
                app.elements.footerAppName.innerHTML = app.name;
            }
            
            if (app.elements.footerAppVersion) {
                app.elements.footerAppVersion.innerHTML = app.version;
            }
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

    transition: {
        toggle: () => {
            const transitions = document.querySelectorAll('.transition, .transition-all, .transition-colors, .transition-opacity, .transition-shadow, .transition-transform');
            for (const transition of transitions) {
                transition.classList.add('transition-none');
                setTimeout(() => {
                    transition.classList.remove('transition-none');
                }, 100);
            }
        },

        all: {
            toggle: element => {
                element.classList.add('transition-all');
                setTimeout(() => {
                    element.classList.remove('transition-all'); 
                }, 150);
            }
        }
    }
};

app.init();