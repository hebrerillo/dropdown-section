'strict';

class SnapApp
{
    #navigationMenu = document.querySelector('.navigation-menu'); //The nav item.
    #rightMenu = document.querySelector('.right-menu-nav'); //The right menu.
    #openRightMenuButton = document.querySelector('[data-open-right-menu]'); //The button to open the right menu.
    #closeRightMenuButton = document.querySelector('[data-close-right-menu]'); //The button to close the right menu.
    #menuLinks = document.querySelector('.menu-links'); //The container of the menu links in the header. It will be used to do event delegation.
    #submenuTransitionEndCB;
    constructor()
    {
        this.#setInitialEvents();
    }

    /**
     * Listen for some events.
     */
    #setInitialEvents()
    {
        this.#openRightMenuButton.addEventListener('click', this.#openRightMenu.bind(this));
        this.#closeRightMenuButton.addEventListener('click', this.#closeRightMenu.bind(this));
        this.#rightMenu.addEventListener('transitionend', this.#rightMenuOnTransitionEnd.bind(this));
        this.#menuLinks.addEventListener('click', this.#menuItemClick.bind(this));
        this.#submenuTransitionEndCB = this.#submenuTransitionEnd.bind(this);
    }

    /**
     * Will be triggered when clicking on the whole container of links. Such a container has the class '.menu-links'.
     *
     * @param {Event} event The event triggered when performing the click. It will be used to do event delegation
     */
    #menuItemClick(event)
    {
        let clickedElement = event.target.closest('.menu-item-title[data-opensecundary]');
        if (clickedElement)
        {
            const menuItem = clickedElement.closest('.menu-item');
            const subMenu = menuItem.querySelector('.secondary-menu-container');
            if (!subMenu.style.maxHeight)
            {
                subMenu.style.transition = 'none';
                subMenu.style.display = 'block';
                subMenu.style.transition = '';
                subMenu.offsetHeight;
                subMenu.style.maxHeight = subMenu.scrollHeight + 'px';

                subMenu.addEventListener('transitionend', this.#submenuTransitionEndCB);
            }
            else
            {
                subMenu.style.maxHeight = null;
            }

            return;
        }
    }

    /**
     * Will be executed once the transition of the submenu ends. It will set to 'display:none' the submenu.
     * 
     * @param {Event} event The event triggered when the transition ends.
     */
    #submenuTransitionEnd(event)
    {
        let subMenu = event.target;
        if (!subMenu.style.maxHeight)
        {
            subMenu.style.display = 'none';
            subMenu.removeEventListener('transitionend', this.#submenuTransitionEndCB);
        }
    }

    /**
     * Open the right menu. Only for mobile devices.
     */
    #openRightMenu()
    {
        this.#navigationMenu.style.display = 'flex';
        this.#rightMenu.offsetHeight; //Flush Css animation changes.
        this.#rightMenu.classList.add('right-menu-nav--opened');
    }

    /**
     * Close the right menu. Only for mobile devices.
     */
    #closeRightMenu()
    {
        this.#rightMenu.classList.remove('right-menu-nav--opened');
    }

    /**
     * This callback will be executed once the transition to hide the right menu ends. It will hide the whole navigation menu.
     */
    #rightMenuOnTransitionEnd()
    {
        if (!this.#rightMenu.classList.contains('right-menu-nav--opened'))
        {
            this.#navigationMenu.style.display = 'none';
        }
    }
}

new SnapApp();

