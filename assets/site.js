// utilities.js
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

// main.js
class App {
  constructor(){
    document.addEventListener('DOMContentLoaded',this.handleReady.bind(this));
    document.addEventListener('click',this.handleDocumentClick.bind(this));
    this.resize_timeout = null;
  }
  handleReady(event){
    window.addEventListener('resize',this.handleWindowResize.bind(this));
    this.els = {};
    this.els.root = document.querySelector('main');
    this.els.nav = document.querySelector('nav');
    this.handleCodeOverflow();
    this.handleCodeIframes();
  }
  handleDocumentClick(event){
    const toggle_nav = event.target.closest('[data-toggle-nav]') && !event.target.closest('nav') || (this.els.nav.classList.contains('on') && !event.target.closest('[data-toggle-nav]') && !event.target.closest('nav') );
    if(toggle_nav) this.els.nav.classList.toggle('on');
  }
  handleWindowResize(event){
    if(this.resize_timeout) clearTimeout(this.resize_timeout);
    this.resize_timeout = setTimeout(() => {
      this.els.nav.classList.remove('on');
      this.handleCodeOverflow();
    },200);
  }
  handleCodeOverflow(){
    const els = document.querySelectorAll('code');
    for(const el of els){
      if(el.scrollWidth !== el.clientWidth) {
        el.classList.add('overflow');
      } else {
        el.classList.remove('overflow');
      }
    }
  }
  async renderIframe(root,html) {
    const el_textarea = createNode({ tag: 'textarea', innerHTML: html });
    const el_iframe = createNode({ root: root, tag: 'iframe' });
    el_iframe.contentWindow.document.open();
    el_iframe.contentWindow.document.write(el_textarea.textContent);
    el_iframe.contentWindow.document.close();
    el_iframe.addEventListener('load',event => {
      el_iframe.style.height = `${el_iframe.contentWindow.document.body.scrollHeight}px`
    })
  }
  createTabs(root){
    const el_tabs = createNode({ root: root, prepend: true, tag: 'div', className: `tabs` });
    const el_tab_run = createNode({ root: el_tabs, tag: 'div', className: `tab active`, innerHTML: `Run` });
    const el_tab_source = createNode({ root: el_tabs, tag: 'div', className: `tab`, innerHTML: `View Source` });
    el_tab_run.addEventListener('click',event => {
      el_tab_source.classList.remove('active');
      event.target.classList.add('active');
      root.classList.remove('view-source');
    });
    el_tab_source.addEventListener('click',event => {
      el_tab_run.classList.remove('active');
      event.target.classList.add('active');
      root.classList.add('view-source');
      this.handleCodeOverflow();
    });
  }
  async handleCodeIframes(){
    const els_data_code = document.querySelectorAll('[data-code]');
    if(!els_data_code.length) return;
    for(const el_data_code of els_data_code){
      await this.renderIframe(el_data_code,decodeURIComponent(el_data_code.dataset.code));
      await this.createTabs(el_data_code);
    }
  }
}
const app = new App();

