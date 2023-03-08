{{#date}}03-07-2023{{/date}}
# N64 Logo
Here I explore using WebGL to display a rotating Nintendo 64 logo using three.js

{{#preview}}example.html{{/preview}}

The first thing I did was look on Sketchfab for a model to use. There's quite a few n64 logos, and this one was the most accurate except for the hue of the colors which I tweaked a bit.

Once the 3d model is ready, it gets loaded using the three.js GLTFLoader module. This is another large function which I've minified and gzipped. After loading, it is rendered to the canvas using requestAnimationFrame. At each interval, the camera rotates around a calculated center point of the object.

I first attempted this without using three.js. However, the amount of code required is too much to attempt for this simple experiment. My hesitation to using three.js is because the minified file is 500kb. At least I was able to gzip it down to ~180kb.

***3d model credit:** This work is based on [N64DD - N64 Logo](https://sketchfab.com/3d-models/n64dd-n64-logo-03c95d97f95b4184ad3623d91b5e5f8b) by [julianbebout75](https://sketchfab.com/julianbebout75) licensed under [CC-BY-SA-4.0](http://creativecommons.org/licenses/by-sa/4.0/)*