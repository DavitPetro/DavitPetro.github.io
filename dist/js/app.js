/*
 * Author: Davit Petrosyan
 * Filename: app.js
 * Description: A script file for my website
 */

// DOM settings

var scrollButton = document.getElementById("up-arrow");

window.onscroll = function() {scrollFunction()};

// On-Scroll function that shows/hides the up scroll button
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.opacity = 1;
    }
    else {
        scrollButton.style.opacity = 0;
    }
}