# CSS Notes

### Fundamentals

- Together, a CSS selector and a declaration block are known as a rule or a ruleset.
- Comments -> /\* \*/
- class selector -> using '.class_name'
- id selector -> using '#id_name'
- attribute selector -> using '[attribute_name]'
- Grouping Selectors -> using comma (,)
- Adjacent Sibling Selector -> using 'first_selector + second_selector'
  - It will only apply styles iff the second element selected is directly after the first element selected.
- General Sibling Selector -> using 'first_selector ~ second_selector'
  - It will apply styles to any elements after the first element selected.
- Child selector -> using 'first_selector > second_selector'
  - It only selects elements that are direct children and not like grandchildren or anything.
- Descendant Selector -> using 'first_selector any_level_of_nested_selector'
- Universal Selector -> using '\*{}'
- CSS stands for 'Cascading Style Sheet'
- Cascade is the algrithm that determines which conflicting CSS rule is to be applied on an HTML element. In other words, the Cascade is the process taken by the CSS to resolve the conflicts.
  - This process is divided into 3 factors -> order of appearance, specificity, importance
  - Bracket only compete with bracket which means any attribute only compete with its own kind.
- Best Practices -> Anything you want to style give it a 'class attribute'
- Inheritance -> a property where the child elements inherits from its parent elements.
- 'color' property only applies to text.
- 'body' element applies 'background-color' to the whole page and not just the selected blue area in the developer tools. It's a strange property.
  - Best Practies -> Never apply 'background-color' property to the 'html' element even though it takes priority over the 'body' element. Only apply the 'background-color' to 'body' element if necessary.

### Typography

- Adding fonts using -> 'font-family' property
- font style using -> 'font-style' property
- 'em' element to make text italics
- 'strong' element to make text bold
- select the level of boldness using 'font-weight' property
  - 'font-weight' property is bold by default.
- Change the size of text using 'font-size' property
- Check the default pixel(px) font size of the text using developer tools.
- Change the height of the line relative to the font size of the element using 'line-height' property
  - The most popular 'line-height' value is '1.5'.
  - Typically the 'line-height' between 1.2 to 1.5 is considered to be readable.
- Adding space between each individual letters using 'letter-spacing' property
- Change the capitalization of the text using 'text-transform' property
- Decorate text using 'text-decoration-\*' property
  - 'text-decoration-line' has 'underline', 'overline', 'line-through' values.
  - 'text-decoration-color'
  - 'text-decoration-style' has 'solid'(default), 'double', 'wavy', 'dotted', 'dashed' values.
  - 'text-decoration-thickness'
  - 'text-decoration' shorthand property takes 4 values namely 'line', 'color', 'style', 'thickness'
- Using 'text-align' property to align the text in different ways horizantally.
  - It has 6 possible values namely 'center', 'start', 'end', 'right', 'left', 'justify'
- Character (ch) Unit for typography to be put on 'max-width' property when you want a fix a certain number of characters on one line.

### The Box Model

- Margin is use to push the other elements away, from the element on which it is applied, by creating space that other elements can't occupy.
  - 'margin-\*' has 4 properties namely 'margin-top', 'margin-bottom', 'margin-left', 'margin-right'
  - 'margin' shorthand property takes 2 values namely 'top-bottom', 'left-right'
  - 'margin' shorthand property takes 3 values namely 'top', 'left-right', 'bottom'
  - 'margin' shorthand property takes 4 values namely 'top', 'right', 'bottom', 'left'
- Padding adds space inside the element.
  - 'padding-\*' has 4 properties namely 'padding-top', 'padding-bottom', 'padding-left', 'padding-right'
  - 'padding' shorthand property takes 2 values namely 'top-bottom', 'left-right'
  - 'padding' shorthand property takes 3 values namely 'top', 'left-right', 'bottom'
  - 'padding' shorthand property takes 4 values namely 'top', 'right', 'bottom', 'left'
- 'border' property sets an element's border.
  - 'border' shorthand property takes 3 values namely 'size', 'style', 'color'
  - 'border-style' has 'none', 'hidden', 'dotted', 'dashed', 'solid'(popular), 'double', 'groove', 'ridge', 'inset', 'offset' values.
- 'height' and 'width' property is applied to the content area (or box) of the element.
- Box Model is just a name that encapulates the content, the padding, the border and, the margin.
  - 'box-sizing' property has 'content-box'(default), 'border-box' values.
  - 'border-box' value ensures consistency in all elements.
  - The proper way of giving all of the elements
    the box sizing of border box:
    - \*, \*::before, \*::after { box-sizing: border-box; }
- If you want to centre an element using the margin property of 'auto', your element first needs to be a block level element and, secondly your element needs to have a width property. If your element meets both these criterias, then you can centre it using a margin of 'auto' on the left and right sides.

### CSS Units

- There's two categories of units:
  - Absolute Units (px)
  - Relative Units (em, rem, vh, vw, dvh, dvw, ch)
  - Percentages (%) don't belong to either of the two.
- The problem with pixel unit is that it doesn't scale because it is an absolute unit and, absolute units cannot be scaled up or down when changing the default font-size of the browser.
- 1 rem equals 16px (default font size of the browser)
- Most of the times, the best practice is just to use the 'rem' unit, however 'em' unit can be useful when you know what you're doing.
- Its a bad practice to use 'vw' (viewport width) unit because it just adds horizontal scroll bar.
- You can use 'dvh' (device viewport height) unit instead of 'vh' (viewport height) unit to make it work on mobile devices. 'dvh' is same as 'vh'.
- Percentages (%) are relative to their direct parent.
- Character (ch) Unit for typography to be put on 'max-width' property when you want a fix a certain number of characters on one line.

### Flexbox

- 'display' property has 'block', 'inline', 'inline-block', 'flex', 'grid' values.
  - 'block' level elements are elements that start on their own line and covers the entire viewport width so that other elements appear under them.
  - 'inline' and 'inline-block' elements are elements that do not start on their own line and the difference between 'inline' and 'inline-block' is 'inline-block' elements has access to all of the box model properties such as 'height', 'width', 'padding', 'border' and 'margin' while 'inline' elements do not have access to all of the box model properties.
  - 'h', 'p' tags are 'block' level element.
  - 'strong', 'a' tag is 'inline element'.
  - 'button' is an 'inline-block' element.
- To use a flexbox we need to add a 'display : flex' on the parent element.
- Defining a 'display : flex' creates two invisible axis, a main axis and a cross axis.
  - By default the main axis is horizontal which is why the items are currently laid out horizontally. however we can use the flex direction property to invert the axes.
- 'flex-direction' property has 'row'(default), 'column' values.
- 'justify-content' property aligns items along the main axis.
  - 'justify-content' property has 'flex-start'(default), 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly' values.
- To align items along the cross axis, we can use the 'align-items' property.
  - 'align-items' property has 'stretch'(default), 'flex-start', 'flex-end', 'center', 'baseline' values.
- 'flex-wrap' property has 'wrap', 'nowrap'(default) values.
- 'align-content' property only works when we have 'flex-wrap' property set to 'wrap' and have items wrapping.
  - 'align-content' property has 'flex-start'(default), 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly' values.
- Use 'gap' property to add gaps between each item.
  - 'gap' property takes a unit value namely 'rows-column'
  - 'gap' property takes 2 values namely 'rows', 'column'
- 'flex-grow' is a property that belongs inside an individual flex item rather than belonging on a container element.
  - 'flex-grow' takes in a unitless value that serves as a proportion and what it does is allows the item to grow if there is enough space for it to do so.
- 'flex-shrink' also takes in a unitless value. However, the flex-shrink property defines how fast one item shrinks in comparison to the others.
  - the higher the value, the faster it shrinks in comparison to others.
- The way 'flex-basis' work is it defines a size of our item based on the direction of the main axis.
- 'flex' shorthand property takes 3 values namely 'flex-grow', 'flex-shrink', 'flex-basis'
- 'flex' shorthand property takes 2 values namely 'flex-grow', 'flex-shrink'(unitless)/'flex-basis'(unit)
- 'flex' shorthand property takes 1 value namely 'flex-grow' (1 1 0)
- 'align-self' property only aligns individual items and is a property given to an individual element inside a flex container.
  - 'align-self' property has 'flex-start'(default), 'flex-end', 'baseline', 'center', 'stretch' values.
- 'order' property is use to change the order of the elements.
  - the higher the order the later the element will be placed.
  - CAUTION: the order property messes with semantics and the accessibility of your components, so avoid it as much as you can.

### BEM

- BEM is shorthand for Blocks, Elements and Modifiers.
