{{#date}}01-03-2023{{/date}}
# My one-function JS framework

Ok so its not a framework... but it is a really useful function I wrote that easily creates HTML nodes.

I use this mostly in small apps and games and maybe some *light-weight prototyping*. Its great to quickly inject some HTML into a document, and its fun to see how little code is really needed to get something done without relying on an entire framework. **Anyway, let's break it down**.

```javascript
const createNode = (options) => {
  const node = document.createElement(options.tag);
  if(options.className) node.setAttribute('class',options.className);
  if(options.innerHTML) node.innerHTML = options.innerHTML;
  if(options.attributes) Object.keys(options.attributes).forEach(key => node.setAttribute(key,options.attributes[key]) );
  if(options.style) Object.keys(options.style).forEach(key => node.style[key] = options.style[key]);
  if(options.event_listeners) Object.keys(options.event_listeners).forEach(key => node.addEventListener(key,options.event_listeners[key]) )
  if(options.root) options.root.appendChild(node);
  return node;
}
```
The options are an object of the following:

Option | Definition
:--- | :---
`root` | An HTML node element to append the newly created node into.
`tag` | The HTML tag of the node
`className` | A class to add to the node. Also can be set in the attributes object.
`innerHTML` | Any HTML string to add into the node
`attributes` | An object of key-value pairs for any tag attribute and its value
`style` | An object of key-value pairs for any style attribute and its value
`event_listeners` | An object of event listeners defined by key as the listener with its callback function.

I think most of these are self-explanatory, but attributes, styles, and event listeners are more interesting to discuss. You can set any attribute and value for the node easily.

`Object.keys` pulls out the keys of the object as an array to loop over with `forEach` to be set on the node from the options value. The same logic is used to set styles, attributes, and event listeners

```javascript
// Usage example
const root = document.body;
const el_img = createNode({
  root: root,
  tag: 'img',
  className: 'img',
  style: {
    display: 'none'
  },
  attributes: {
    src: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Half-Life_2_Logo.svg/740px-Half-Life_2_Logo.svg.png?20090427193755`
  },
  event_listeners: {
    load: event => {
      event.target.style.display = 'block';
    }
  }
});
```

And that's really all there is to it. So the next time you want to manually code up those HTML tags like a chump, try it this way instead. ;)
