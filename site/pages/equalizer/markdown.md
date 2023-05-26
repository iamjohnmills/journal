{{#date}}02-25-2023{{/date}}
# Animated equalizer

I thought I'd try to make a quick CSS only equalizer as part of a prototype for integrating what I'm currently listening to into my site. Here I explore a CSS + SVG equalizer using CSS animations.

{{#preview}}example.html{{/preview}}

The SVG is a simple set of four rectangles, which I place at an equal distance apart to start.

Each rectangle is referenced by the nth-child pseudo selector in order to give each a custom animation delay to create a random visual effect.

During the animation, the position of the y value changes (not the height). The overflow of the rectangles is not visible because its out of range of its viewBox.
