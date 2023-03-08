{{#date}}03-08-2023{{/date}}
# WebGL Shaders
Here I explore integrating WebGL fragment shaders into a no-dependancy project. The variation of these community-made shaders is impressive mathematically and visually.

{{#preview}}example.html{{/preview}}

I recently became aware of frament shaders exploring the three.js scene, and was heavily inspired by [GLSL Sandbox](https://glslsandbox.com/) (made by the creator of three.js) and [Shadertoy](https://www.shadertoy.com/). How they work (I think) is by using a mathematical formula to alter the same buffer of pixel data.

Disclaimer, almost all of this code is not mine. I first picked a few of my fav shaders and created them as filename.frag files. I then copied public code used for glslsandbox and cleared it out but all the only the essential pieces of code and tidied up the logic into my usual style of coding. Even so, you can see the amount of methods to integrate it is quite a lot.

The above example reads in the frag files as strings and applies them to a webgl canvas. The glslsandbox code includes boilerplate vertex and fragment shaders needed to apply the custom variants. Using this boilerplate code as a foundation, the custom shaders can be easily swapped out.
