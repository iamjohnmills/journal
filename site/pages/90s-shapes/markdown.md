{{#date}}03-03-2023{{/date}}
# 90s abstract shapes
Here I create some inspired aesthetic art by randomly placing shapes to look like something from Saved By The Bell.

{{#preview}}example.html{{/preview}}

In this example, I found some random SVG paths around the internet for use here. I put mine in a shapes object that keeps track of the svg as a string, as well as how many I want to render it.

I then loop through them and use the random function heavily. Math.random generates a random decimal number between 0 and 1. By multiplying by a max amount we can get a number between 0 and the max. I use two container tags to store the shape and the svg elements in order to apply a drop-shadow that isn't affected by the rotation.
