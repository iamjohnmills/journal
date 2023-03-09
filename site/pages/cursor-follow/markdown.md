{{#date}}01-19-2023{{/date}}
# Follow mouse cursor

Here's how to use Javascript to follow mouse and touch movements. In this example, I simulate a little fish following the movement of the cursor.

{{#preview}}example.html{{/preview}}

In the CSS, I set the current cursor to none, and define the default attributes. The values here ensure that the 'front' of the shape is at the cursor point, otherwise it would be centered over the mouse x and y position.

I use Javascript on the mousemove and touchmove events to determine the x and y position of the mouse (or touch position on mobile). I then apply a calculated value for the rotation of the cursor shape and determine which direction it should be facing.

*I have a more complete example at [github.com/iamjohnmills/ocean](https://github.com/iamjohnmills/ocean) with more fish, background turbulence, and a cool blue whale.*
