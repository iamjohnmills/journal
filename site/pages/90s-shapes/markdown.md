{{#date}}03-03-2023{{/date}}
# 90s abstract shapes
Here I create some inspired aesthetic art by randomly placing shapes to look like something from Saved By The Bell.

{{#preview}}example.html{{/preview}}

```javascript
this.shapes = {
  circle: {
    svg: `<svg width="16" height="16" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M7.5 0a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z" /></svg>`,
    amount: 3
  }
}
```

In this example, I found some random SVG paths around the internet for use here. I put mine in a shapes object that keeps track of the svg as a string, as well as how many I want to render it.

```javascript
createShape(svg){
  let left = Math.floor(Math.random() * this.width);
  let top = Math.floor(Math.random() * this.height);
  let scale = Math.floor(Math.random() * 10);
  const rotate = Math.floor(Math.random() * 360);
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const el_shape = createNode({ root: this.els.root, tag: 'div', className: `shape`, style: { left: `${left}px`, top: `${top}px` } });
  const el_svg = createNode({ root: el_shape, tag: 'div', className: `svg`, innerHTML: svg, style: { color: `rgb(${r},${g},${b})`, transform: `scale(${scale}) rotate(${rotate}deg)` } });
  this.reserved.push({ left: left, top: top, size: scale * 16 });
}
```

I then loop through them and use the random function heavily. Math.random generates a random decimal number between 0 and 1. By multiplying by a max amount we can get a number between 0 and the max. I use two container tags to store the shape and the svg elements in order to apply a drop-shadow that isn't affected by the rotation.
