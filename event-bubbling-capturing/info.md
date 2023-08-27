# Event Bubbling and Capturing

- the third argument in addEventListener stands for useCapture value(boolean) which determines the event propagation order (capturing or bubbling).
- event capturing/trickling is like tricking events down from outer-most to inner-most (from where it was called) event or you can think of it like pre-order traversal in dom tree.
- event bubbling is like bubbling events out from where it was called to the outer-most event or you can think of it like post-order traversal in dom tree

- now e.stopPropagation(); stops the event propagation at the callback function in which it is called in that particular event propagation type (bubbling or capturing).
