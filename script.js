'strict';
(function ()
{
    function SnapApp()
    {
        this.navigationMenu = document.querySelector('.navigation-menu'); //The nav item.
        this.rightMenu = document.querySelector('.right-menu-nav'); //The right menu.
        this.openRightMenuButton = document.querySelector('.open-menu-img'); //The button to open the right menu.
        this.closeRightMenuButton = document.querySelector('.close-menu-img'); //The button to close the right menu.
        this.menuLinks = document.querySelector('.menu-links'); //The container of the menu links in the header. It will be used to do event delegation.
        this.submenuTransitionEndCB = this.submenuTransitionEnd.bind(this);
        this.setInitialEvents();
    }

    /**
     * Listen for some events.
     */
    SnapApp.prototype.setInitialEvents = function ()
    {
        this.openRightMenuButton.addEventListener('click', this.openRightMenu.bind(this));
        this.closeRightMenuButton.addEventListener('click', this.closeRightMenu.bind(this));
        this.rightMenu.addEventListener('transitionend', this.rightMenuOnTransitionEnd.bind(this));
        this.menuLinks.addEventListener('click', this.menuItemClick.bind(this));
        this.submenuTransitionEndCB = this.submenuTransitionEnd.bind(this);
        window.addEventListener('click', this.handleWindowClick.bind(this));
    };

    /**
     * Handles the click event in the whole window object.
     *
     * @param {Event} event The event
     */
    SnapApp.prototype.handleWindowClick = function (event)
    {
        this.closeSubmenus(event.target.closest('.secondary-menu-container'));
    };

    /**
     * Closes all submenus, except the one passed as paramenter
     * 
     * @param {Object} The submenu that will not be closed. 
     */
    SnapApp.prototype.closeSubmenus = function (submenuException)
    {
        this.menuLinks.querySelectorAll('.secondary-menu-container').forEach(submenu =>
        {
            if (submenu !== submenuException)
            {
                submenu.style.maxHeight = null;
            }
        });
    };

    /**
     * Will be triggered when clicking on the whole container of links. Such a container has the class '.menu-links'.
     *
     * @param {Event} event The event triggered when performing the click. It will be used to do event delegation
     */
    SnapApp.prototype.menuItemClick = function (event)
    {
        event.stopPropagation();
        let clickedElement = event.target.closest('.menu-item-title[data-opensecundary]');
        if (clickedElement)
        {
            const menuItem = clickedElement.closest('.menu-item');
            const subMenu = menuItem.querySelector('.secondary-menu-container');
            if (!subMenu.style.maxHeight)
            {
                subMenu.style.transition = 'none';
                menuItem.classList.add('secondary-menu-container--show');
                subMenu.style.transition = '';
                subMenu.offsetHeight;
                subMenu.style.maxHeight = subMenu.scrollHeight + 'px';

                subMenu.addEventListener('transitionend', this.submenuTransitionEndCB);
                this.closeSubmenus(subMenu);
            }
            else
            {
                subMenu.style.maxHeight = null;
            }

            return;
        }
    };

    /**
     * Will be executed once the transition of the submenu ends. It will set to 'display:none' the submenu.
     * 
     * @param {Event} event The event triggered when the transition ends.
     */
    SnapApp.prototype.submenuTransitionEnd = function (event)
    {
        event.stopPropagation();
        let subMenu = event.target;
        if (!subMenu.style.maxHeight)
        {
            subMenu.closest('.menu-item').classList.remove('secondary-menu-container--show');
            subMenu.removeEventListener('transitionend', this.submenuTransitionEndCB);
        }
    };

    /**
     * Open the right menu. Only for mobile devices.
     */
    SnapApp.prototype.openRightMenu = function ()
    {
        this.navigationMenu.classList.add('navigation-menu--show');
        this.rightMenu.offsetHeight; //Flush Css animation changes.
        this.rightMenu.classList.add('right-menu-nav--opened');
    };

    /**
     * Close the right menu. Only for mobile devices.
     */
    SnapApp.prototype.closeRightMenu = function ()
    {
        this.rightMenu.classList.remove('right-menu-nav--opened');
    };

    /**
     * This callback will be executed once the transition to hide the right menu ends. It will hide the whole navigation menu.
     */
    SnapApp.prototype.rightMenuOnTransitionEnd = function ()
    {
        if (!this.rightMenu.classList.contains('right-menu-nav--opened'))
        {
            this.navigationMenu.classList.remove('navigation-menu--show');
        }
    };

    new SnapApp();

})();