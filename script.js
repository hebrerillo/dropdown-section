'strict';

(function ()
{
    const navigationMenu = document.querySelector('.navigation-menu');
    const rightMenu = document.querySelector('.right-menu-nav');

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

})();
