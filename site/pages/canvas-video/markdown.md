{{#date}}03-04-2023{{/date}}
# Video to canvas
Here I explore drawing frames of video to canvas, which exposes more possibilities of manipulating the pixel data to apply cool effects on.

{{#preview}}example.html{{/preview}}

To demonstrate, I'll use some raw footage of the geisha from Bladerunner I converted into an mp4 file. Click the document to initiate the vide playback. Click the document again to pause/resume. Toggle the effect on/off with the button.

```javascript
rgbSplit(imageData, options) {
  // https://hangindev.com/blog/rgb-splitting-effect-with-html5-canvas-and-javascript
  const { rOffset = 0, gOffset = 0, bOffset = 0 } = options;
  const originalArray = imageData.data;
  const newPixels = new Uint8ClampedArray(originalArray);
  for (let i = 0; i < originalArray.length; i += 4) {
    newPixels[i + 0 + rOffset * 4] = originalArray[i + 0]; // 🔴
    newPixels[i + 1 + gOffset * 4] = originalArray[i + 1]; // 🟢
    newPixels[i + 2 + bOffset * 4] = originalArray[i + 2]; // 🔵
  }
  return new ImageData(newPixels, imageData.width, imageData.height);
}
```

In this case, I took some time to find this function which splits the RGB values of image pixel data.

```javascript
this.context.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight);
if(this.effect_on){
  const imageData = this.context.getImageData(0, 0, this.video.videoWidth, this.video.videoHeight);
  const updatedImageData = this.rgbSplit(imageData, { rOffset: 20, gOffset: -10, bOffset: 10 });
  this.context.putImageData(updatedImageData, 0, 0);
}
```

There are a myriad of complex solutions for image manipulation, and I was quite surprised at how easy and fast this solution turned out to be. Using requestAnimationFrame, I draw each frame of the video, get its pixel data, apply the filter, and redraw to the canvas.
