{{#date}}03-05-2023{{/date}}
# Chat bubbles
Here I explore re-creating the Apple chat speech bubbles using flexbox and use an interesting technique with pseudo selectors to generate the directional flourishes.

{{#preview}}example.html{{/preview}}

What makes this technique interesting is the use of pseudo selectors to place empty blocks at the left and right of each bubble to generate the little flourish using border radius.

By placing the before and after blocks on top of each other and shifting to either side, a seamless effect is achieved.
