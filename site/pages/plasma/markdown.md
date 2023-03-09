{{#date}}02-20-2023{{/date}}
# Plasma
Here I create some mathematical plasmas using canvas and a custom color palette.

{{#preview}}example.html{{/preview}}

The code for this project was adapted from [here](https://lodev.org/cgtutor/plasma.html). I first initialize a pixel array and an RGB color palette to be used. By incrementing the current frame value on each requestAnimationFrame iteration, every pixel is shifted through the array and drawn back to the canvas.

By using variations of mathematical sin waves to choose the next color for each pixel coordinate, different and interesting patterns emerge.
