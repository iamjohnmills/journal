{{#date}}03-05-2023{{/date}}
# Chat bubbles
Here I explore re-creating the Apple chat speech bubbles using flexbox and use an interesting technique with pseudo selectors to generate the directional flourishes.

{{#preview}}example.html{{/preview}}

What makes this technique interesting is the use of pseudo selectors to place empty blocks at the left and right of each bubble to generate the little flourish using border radius.

```css
.bubble:before { content: ''; z-index: 1; background: #fff; position: absolute; top: 10px; bottom: 0; left: -14px; width: 14px; border-bottom-right-radius: 14px; border-bottom-left-radius: 14px;}
.bubble:after { content: ''; background: #f1f1f1; position: absolute; top: 10px; bottom: 0; left: -7px; width: 14px; border-bottom-right-radius: 14px; border-bottom-left-radius: 14px;}
.message.me .bubble { background: blue; color: #fff; }
.message.me .bubble:before { left: unset; right: -14px; }
.message.me .bubble:after { background: blue; left: unset; right: -7px; }
```

By placing the before and after blocks on top of each other and shifting to either side, a seamless effect is achieved.
