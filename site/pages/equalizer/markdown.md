{{#date}}02-25-2023{{/date}}
# Animated equalizer

I thought I'd try to make a quick CSS only equalizer as part of a prototype for integrating what I'm currently listening to into my site. Here I explore a CSS + SVG equalizer using CSS animations.

{{#preview}}example.html{{/preview}}

The svg is a simple set of three rectangles of varying heights. I place them an equal distance apart to start.

```html
<!-- The SVG HTML -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16">
  <rect fill="currentColor" x="0" y="8" width="4" height="16"/>
  <rect fill="currentColor" x="5" y="0" width="4" height="16"/>
  <rect fill="currentColor" x="10" y="6" width="4" height="16"/>
</svg>
```

Each rectangle is referenced by the nth-child pseudo selector in order to give each a custom animation duration. I can re-use the same animation keyframes by using a css variable to define the max y position of the rectangle.

During the animation, the position of the y value changes (not actually the height). The overflow of the rectangles is not visible because its out of range of its viewBox.

```css
/* The CSS */
@keyframes eq-bar { 0% { y: var(--y-max); } 50% { y: 12; } 100% { y: var(--y-max); } }
svg { width: 50px; height: 50px; }
rect:nth-child(1) { --y-max: 5; animation: eq-bar 0.4s linear infinite; }
rect:nth-child(2) { --y-max: 0; animation: eq-bar 0.5s linear infinite; }
rect:nth-child(3) { --y-max: 8; animation: eq-bar 0.6s linear infinite; }
html,body { margin: 0; width: 100%; height: 100%; }
body { display: flex; align-items: center; justify-content: center; color: #fff; background: #00ffee }
```

A further enhancement might be using Javascript to apply a random --y-max value at a certain interval, replacing the CSS animation.
