# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: https://github.com/hebrerillo/dropdown-section
- Live Site URL: https://your-live-site-url.com

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learned many things implementing this project, but I want to highlight one of them.

When I tested the site on a small screen of 375 pixels using the responsive design mode of in Firefox, everything was OK. However, when I tested the site on a real smartphone, I realized the footer was pushed below the screen, and was not visible. That was because of the address bar of the browser. To fix that problem and have the footer visible at the bottom of the page, I used this trick:

https://css-tricks.com/the-trick-to-viewport-units-on-mobile/


### Continued development

There is something I am not comfortable with. I had to use 'pictures' and 'sources' to load the mobile or desktop hero image depending on the width of the device. That means using media queries in the HTML, but I want to have all the code related to media queries in the CSS file. Is there a way to achieve the same thing using CSS? I tried background images, but I found it impossible to achieve the same thing as using pictures and sources.

## Author

- Frontend Mentor - [@hebrerillo](https://www.frontendmentor.io/profile/hebrerillo)


## Acknowledgments

I want to thank to the CSS-tricks and Mozilla Development Network for all the help I got from them!!
