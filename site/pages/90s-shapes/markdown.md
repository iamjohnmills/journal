{{#date}}03-03-2023{{/date}}
# 90s abstract shapes
Here I create some generative aesthetic art by randomly placing shapes to look like something from Saved By The Bell.

{{#preview}}example.html{{/preview}}

In this example, I found some random SVG paths around the internet for use here. I put mine in a shapes object as a string along with how many I want to render.

I then loop through them and use the random function heavily. Math.random generates a random decimal number between 0 and 1. By multiplying by a max amount I can get a number between 0 and the max. I use two container tags to store the shape and the SVG elements in order to apply a drop-shadow that isn't affected by the rotation.
