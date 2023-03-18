{{#date}}03-04-2023{{/date}}
# Video to canvas
Here I explore drawing frames of video to canvas, which exposes more possibilities of manipulating the pixel data to apply cool effects on.

{{#preview}}example.html{{/preview}}

To demonstrate, I'll use some raw footage of the geisha from Bladerunner I converted into an mp4 file. Click the document to initiate the vide playback. Click the document again to pause/resume. Toggle the effect on/off with the button.

In this case, I took some time to find a function which splits the RGB values of image pixel data. There are a myriad of complex solutions for image manipulation, and I was quite surprised at how easy and fast this solution turned out to be.

Using requestAnimationFrame, I draw each frame of the video, get its pixel data, apply the filter, and redraw to the canvas.
