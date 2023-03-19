{{#date}}03-07-2023{{/date}}
# Spinning N64 logo
Here I explore using WebGL to display a rotating Nintendo 64 logo using three.js

{{#preview}}example.html{{/preview}}

The first thing I did was look on Sketchfab for a model to use. There's quite a few n64 logos, and this one was the most accurate except for the hue of the colors which I tweaked a bit.

Once the 3d model is ready, it gets loaded using the three.js GLTFLoader module. This is another large function which I've minified. After loading, it is rendered to the canvas using requestAnimationFrame. At each interval, the camera rotates around a calculated center point of the object.

**Project Assets**
Asset | File | Description
:--- | :--- | :---
`n64.bin` | [Download]({{page_url}}/n64.bin) | n64 3D model
`n64.gltf` | [Download]({{page_url}}/n64.gltf) | GLTF metadata for n64 3D model
`n64-blue.png` | [Download]({{page_url}}/n64-blue.png) | Blue texture for 3D model
`n64-green.png` | [Download]({{page_url}}/n64-green.png) | Green texture for 3D model
`n64-red.png` | [Download]({{page_url}}/n64-red.png) | Red texture for 3D model
`n64-yellow.png` | [Download]({{page_url}}/n64-yellow.png) | Yellow texture for 3D model
`three.0.87.1.min.js` | [Download]({{page_url}}/three.0.87.1.min.js) | Minified three.js v0.87.1
`three.0.87.1.gltfloader.min.js` | [Download]({{page_url}}/three.0.87.1.gltfloader.min.js) | Minified GLTF Loader for three.js v0.87.1

***3d model credit:** This work is based on [N64DD - N64 Logo](https://sketchfab.com/3d-models/n64dd-n64-logo-03c95d97f95b4184ad3623d91b5e5f8b) by [julianbebout75](https://sketchfab.com/julianbebout75) licensed under [CC-BY-SA-4.0](http://creativecommons.org/licenses/by-sa/4.0/)*
