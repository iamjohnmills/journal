const createNode = (options) => {
  const node = document.createElement(options.tag);
  if(options.className) node.setAttribute('class',options.className);
  if(options.innerHTML) node.innerHTML = options.innerHTML;
  if(options.attributes) Object.keys(options.attributes).forEach(key => node.setAttribute(key,options.attributes[key]) );
  if(options.style) Object.keys(options.style).forEach(key => node.style[key] = options.style[key]);
  if(options.event_listeners) Object.keys(options.event_listeners).forEach(key => node.addEventListener(key,options.event_listeners[key]) )
  if(options.root && !options.prepend) options.root.appendChild(node);
  else if(options.root && options.prepend) options.root.prepend(node);
  return node;
}
