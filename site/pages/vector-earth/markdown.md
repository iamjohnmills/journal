{{#date}}10-01-2023{{/date}}
# Vector Earth 3D
Here I make a spinning globe with some retro flair. I wanted to recreate the aesthetic of the Domination Game from the movie Never Say Never.

{{#preview}}example.html{{/preview}}

I use D3 for the orthographic projection, and then overlay 3 world geojson dataset layers onto the SVG. Using requestAnimationFrame, I update the projection with an incrementing value, and apply a Math.tan() and an offset value for the position of each layer. 

The end result is an interesting simulated 3D projection that should look like a spinning top. Check out the full example at [github.com/iamjohnmills/globe](https://github.com/iamjohnmills/globe).