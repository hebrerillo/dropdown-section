'strict';

(function ()
{
    /** SHOWING AND HIDING THE RIGHT MENU **/
    const navigationMenu = document.querySelector('.navigation-menu');
    const rightMenu = navigationMenu.querySelector('.right-menu-nav');

    document.querySelector('#open-right-menu-button').addEventListener('click', function ()
    {
        navigationMenu.style.display = 'flex';
        rightMenu.offsetHeight;
        rightMenu.classList.add('right-menu-nav--opened');
    });

    document.querySelector('#close-right-menu-button').addEventListener('click', function ()
    {
        rightMenu.classList.remove('right-menu-nav--opened');
    });

    rightMenu.addEventListener('transitionend', function ()
    {
        if (!this.classList.contains('right-menu-nav--opened'))
        {
            navigationMenu.style.display = 'none';
        }
    });

    /** SHOWING AND HIDING SECONDARY MENUS **/
    const submenuTransitionEnd = function ()
    {
        if (!this.style.maxHeight)
        {
            this.style.display = 'none';
            this.removeEventListener('transitionend', submenuTransitionEnd);
        }
    };

    document.querySelector('.menu-links').addEventListener('click', function (event)
    {
        //doing event delegation
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

                subMenu.addEventListener('transitionend', submenuTransitionEnd);
            }
            else
            {
                subMenu.style.maxHeight = null;
            }

            return;
        }
    });
})();
