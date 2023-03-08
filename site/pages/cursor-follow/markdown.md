{{#date}}01-19-2023{{/date}}
# Follow mouse cursor

Here's how to use Javascript to follow mouse and touch movements. In this example, I simulate a little fish following the movement of the cursor.

{{#preview}}example.html{{/preview}}

Here I set the current cursor to none, and define the default attributes. The values here ensure that the 'front' of the shape is at the cursor point, otherwise it would be centered over the mouse x and y position.

```css
/* The CSS */
* { cursor: none; }
.cursor { background-repeat: no-repeat; z-index: 1; transform-origin: 100% 50%; position: absolute; background-size: 100%; color: #fff; margin-left: -100px; margin-top: -25px; width: 100px; height: 50px; }
```
Here I use Javascript on the mousemove and touchmove events to determine the x and y position of the mouse (or touch position on mobile). I then apply a calculated value for the rotation of the cursor shape and determine which direction it should be facing.

```javascript
/* The Mousemove Function */
handleMouseMove(event){
  let x = !!event.touches ? event.touches[0].clientX : event.clientX;
  let y = !!event.touches ? event.touches[0].clientY : event.clientY;
  const rect = this.els.cursor.getBoundingClientRect();
  const origin_x = rect.left + (rect.width / 2);
  const origin_y = rect.top + (rect.height / 2);
  let angle = Math.atan2(y - origin_y, x - origin_x);
  angle *= 180 / Math.PI;
  const scaleX = Math.abs(angle) >= 90 ? -1 : 1;
  angle = scaleX === 1 ? angle : (angle + 180) % 360;
  this.els.cursor.style.left = `${x}px`;
  this.els.cursor.style.top = `${y}px`;
  this.els.cursor.style.transform = `rotate(${angle}deg) scaleX(${scaleX})`;
}
```

*I have a more complete example at [github.com/iamjohnmills/ocean](https://github.com/iamjohnmills/ocean) with more fish, background turbulence, and a cool blue whale.*
