{{#date}}03-05-2024{{/date}}
# Orthographic Image Projection with D3
In this example, I take a flat image and simulate a 3D effect onto a spherical projection with D3.

{{#preview}}example.html{{/preview}}

I used D3 previously to add SVG paths to an orthographic project, but what about an image? I first set out to find some quality map flat map images. For my example, I use an assortment of planetary projections, but any image will work. 

I first load the image data from file, and on each rAF interval, the pixel data is manipulated to fit onto the projection. Its not very performant with large images, but is effective for its simplicity. Lastly, a CSS starfield in the background for a nice touch.

**Project Assets**
Asset | File | Description
:--- | :--- | :---
`earth.png` | [Download]({{page_url}}/earth.png) | Earth
`mars.jpeg` | [Download]({{page_url}}/mars.jpeg) | Mars
`moon.jpg` | [Download]({{page_url}}/moon.jpg) | Moon
`spongebob.jpeg` | [Download]({{page_url}}/spongebob.jpeg) | Spongebob
`d3.v3.min.js` | [Download]({{page_url}}/d3.v3.min.js) | D3
`d3-geo.v1.min.js` | [Download]({{page_url}}/d3-geo.v1.min.js) | D3 Geo (for creating the orthographic projection)
`versor.js` | [Download]({{page_url}}/versor.js) | Versor.js (for panning the globe)