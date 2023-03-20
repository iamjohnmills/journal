{{#date}}03-23-2023{{/date}}
# GifTV
Here I explore making a simulated retro tv with some animated gifs from a few of my favorite movies.

{{#preview}}example.html{{/preview}}

I first went looking for some animated gifs of cool scenes that I want to use on Google Images. I store the filenames for each and asynchronously load them for a specified duration, and a noise effect overlay is applied using mix-blend-mode while each image is waiting to load. I then added two extra overlays of a repeating background image for the CRT effect.

The logo uses two fonts from Google Fonts which are styled with CSS to achieve the retro logo effect.

**Project Assets**
Asset | File | Description
:--- | :--- | :---
`noise.gif` | [Download]({{page_url}}/noise.gif) | Noise image overlay
`rgb-scanlines-black.png` | [Download]({{page_url}}/rgb-scanlines-black.png) | Black scanlines
`rgb-scanlines.png` | [Download]({{page_url}}/rgb-scanlines.png) | RGB scanlines
`permanent-marker.ttf` | [Source](https://fonts.google.com/specimen/Permanent+Marker) | Permanent Marker font
`righteous.ttf` | [Source](https://fonts.google.com/specimen/Righteous) | Righteous font
