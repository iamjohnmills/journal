{{#date}}02-25-2023{{/date}}
# Animated equalizer

I thought I'd try to make a quick CSS only equalizer as part of a prototype for integrating what I'm currently listening to into my site. Here I explore a CSS + SVG equalizer using CSS animations.

{{#preview}}example.html{{/preview}}

The svg is a simple set of three rectangles of varying heights. I place them an equal distance apart to start.

Each rectangle is referenced by the nth-child pseudo selector in order to give each a custom animation duration. I can re-use the same animation keyframes by using a css variable to define the max y position of the rectangle.

During the animation, the position of the y value changes (not actually the height). The overflow of the rectangles is not visible because its out of range of its viewBox.

A further enhancement might be using Javascript to apply a random --y-max value at a certain interval, replacing the CSS animation.
