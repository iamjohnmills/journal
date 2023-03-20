{{#date}}01-10-2023{{/date}}
# Game of life
Here I make a performant game of life clone in Javascript on canvas.

{{#preview}}example.html{{/preview}}

"If the cell is alive, then it stays alive if it has either 2 or 3 live neighbors. If the cell is dead, then it springs to life only in the case that it has 3 live neighbors."

Here the rules for the algorithm are defined. The pixels are first randomized and the logic is applied on each requestAnimationFrame. Each pixel is represented in a repeating series of 4 indexes of a Uint8Array.

Each draw to the canvas negatively effects performance, so what makes this performant is the simplicity of the colors and manipulating the array of pixels before drawing to the canvas.
