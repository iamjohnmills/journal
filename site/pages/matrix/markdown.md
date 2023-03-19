{{#date}}01-22-2023{{/date}}
# Matrix
Here I explore creating a performant falling green code animation from the Matrix using canvas.

{{#preview}}example.html{{/preview}}

The first step is to find the font used, because without it, it doesn't look quite right. Each glyph is then defined in an array and a random one is chosen to be placed at a coordinate derived from the canvas width and height and glyph size.

Once the matrix is generated, the requestAnimationFrame is triggered and on each iteration, each column has a current position value that is updated. By applying an RGB color based on column drop speed and current position values, a simulated movement effect is created.

**Project Assets**
Asset | File | Description
:--- | :--- | :---
`matrix.ttf` | [Download]({{page_url}}/matrix.ttf) | Font used to make the glyphs look nice.
