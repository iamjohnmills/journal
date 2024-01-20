{{#date}}01-20-2024{{/date}}
# Animated Nav Menu
Anyone else remember when Apple switched their site to be responsive, which was controversial since iPhones were capabale of viewing full-size page content? Here I recreate the other controversy of that launch: the <em>two-line</em> navicon that they still use.

{{#preview}}example.html{{/preview}}

I created the SVG using rectangles, and then setup CSS animations for the transition between states. Binding to the click event, I can toggle the direction of the animation with Javascript by specififying a specific class name.