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
  - Best Practices -> Never apply 'background-color' property to the 'html' element even though it takes priority over the 'body' element. Only apply the 'background-color' to 'body' element if necessary.
- Best Practices -> set {'target: \_blank'; 'rel: noopener noreferrer'} will open a new tab when we click an anchor element.

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
- Best Practies -> \* { margin: 0; padding: 0; line-height: 1.5; }
- If you want to centre an element using the margin property of 'auto', your element first needs to be a block level element and, secondly your element needs to have a width property. If your element meets both these criterias, then you can centre it using a margin of 'auto' on the left and right sides.
- 'margin-inline' is useful if you really don't want to have zero margins on the top and bottom.

### CSS Units

- There's two categories of units:
  - Absolute Units (px)
  - Relative Units (em, rem, vh, vw, dvh, dvw, ch)
  - Percentages (%) don't belong to either of the two.
- The problem with pixel unit is that it doesn't scale because it is an absolute unit and, absolute units cannot be scaled up or down when changing the default font-size of the browser.
- 1 rem equals 16px (default font size of the browser)
- Instead of being relative to the font size of the HTML element, like the rem unit, the relative of em unit is dependent on a few conditions, when the em unit is defined on any other property than the font size property, the em unit becomes relative to the font size of its own element. if the font size of the own element is not present then it will start looking for the nearest parent with relative font size (rem).
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
- A utility class is a class that is reusable multiple times across your website.
- A modifier is used when you want to add a unique style to an element.

### Misc

- using '\<div style="height: 100vh">\</div>' to fix the live server always scrolling up when you save the code.

### Responsiveness

- Responsive web design is the practice of responding to a user's behaviour, screen size, device, and orientation. when you visit a website, the website should automatically accomodate for your envioronment.
- You're not trying to make the entire page responsive but you're trying to make all of the individual components responsive. To think responsively is to think in terms of components.
- A media query is the main tool we use to add responsiveness to our components.
  - syntax -> \@media media-type (property){properties}
  - media types: 'screen', 'print', 'speech', 'all'(default)
- Instead of creating media queries for every breakpoint where you find something broken, just use predefined media queries and make your components responsive on them.
- Mobile First ->

  /\* xs \*/ \
  @media (min-width: 475px) {}

  /\* sm \*/ \
  @media (min-width: 640px) {}

  /\* md \*/ \
  @media (min-width: 768px) {}

  /\* lg \*/ \
  @media (min-width: 1024px) {}

  /\* xl \*/ \
  @media (min-width: 1280px) {}

  /\* 2xl \*/ \
  @media (min-width: 1536px) {}

<br>

- Mobile First Utility Class -

  .container { width: 100%; margin-inline: auto; padding-inline: 0.5rem; }

  /\* xs \*/ \
  @media (min-width: 475px) { .container { max-width: 475px; } }

  /\* sm \*/ \
  @media (min-width: 640px) { .container { max-width: 640px; } }

  /\* md \*/ \
  @media (min-width: 768px) { .container { max-width: 768px; } }

  /\* lg \*/ \
  @media (min-width: 1024px) { .container { max-width: 1024px; } }

  /\* xl \*/ \
  @media (min-width: 1280px) { .container {max-width: 1280px; } }

  /\* 2xl \*/ \
  @media (min-width: 1536px) { .container { max-width: 1536px; } }

<br>

- Desktop First ->

  /\* 2xl \*/ \
  @media (max-width: 1536px) {}

  /\* xl \*/ \
  @media (max-width: 1280px) {}

  /\* lg \*/ \
  @media (max-width: 1024px) {}

  /\* md \*/ \
  @media (max-width: 768px) {}

  /\* sm \*/ \
  @media (max-width: 640px) {}

  /\* xs \*/ \
  @media (max-width: 475px) {}

<br>

- Desktop First Utility Class -

  .container { max-width: 1536px; margin-inline: auto; padding-inline: 0.5rem; }

  /\* 2xl \*/ \
  @media (max-width: 1536px) { .container { max-width: 1280px; } }

  /\* xl \*/ \
  @media (max-width: 1280px) { .container {max-width: 1024px; } }

  /\* lg \*/ \
  @media (max-width: 1024px) { .container { max-width: 768px; } }

  /\* md \*/ \
  @media (max-width: 768px) { .container { max-width: 640px; } }

  /\* sm \*/ \
  @media (max-width: 640px) { .container { max-width: 475px; } }

  /\* xs \*/ \
  @media (max-width: 475px) { .container { width: 100%; } }

### Backgrounds & Images

- 'background-color' property sets the background color of an element.
- 'background-image' sets one or more background images on an element.
  - syntax -> background-image: url("image location");
- 'background-size' sets the size of the element's background image.
  - it takes 'auto', 'contain', 'cover', custom pixels values
- 'background-repeat' sets how background images are repeated.
  - it takes 'repeat'(default), 'no-repeat', 'space', 'round', 'repeat-x', 'repeat-y' values.
- 'background-position' sets the initial position for each background image.
  - it can have 1-value to 4-value syntax
  - it takes 'top', 'left', 'center', 'right', 'bottom'.
- 'background-clip' sets whether an element's background extends underneath its border box, padding box, or content box.
  - it takes 'border-box', 'padding-box', 'content-box', text values.
- 'background-attachment' sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
  - it takes 'fixed', 'local', 'scroll' values.
- Best Practices -> img { display: block; max-width: 100% }
- 'object-fit' is useful when you want a specific width and height on your image that isn't respectful of the default aspect ratio of the image.
  - it takes 'contain', 'cover', 'fill', 'none', 'scale-down' values.
- 'aspect-ratio' allows you to define the desired width-to-height ratio of an element's box.
  - this means that even if the parent container or viewport size changes, the browser will adjust the element's dimensions to maintain the specified width-to-height ratio.
  - it takes one or both of the keyword 'auto' or a \<ratio> values.
- 'object-position' specifies the alignment of the selected replaced element's contents within the element's box.
  - areas of the box which aren't covered by the replaced element's object will show the element's background.
  - it takes keyword, \<percentage>, \<length>, edge offsets, global values.

### Animations

- 'transform' is a CSS property that allows us to rotate, scale, skew, and translate an element.
  - the values that we assign to a transform property are all functions.
  - 'rotate' function use degrees(deg) or turns(turn).
  - 'scale' function takes unitless value.
  - 'skew' function tilts or stretches an element on either the x axis or the y axis. it takes a degree(deg) value. it takes two values namely (x-axis value, y-axis value).
  - 'translate' function allows us to move our element in any direction we want. it takes two values namely (x-axis value, y-axis value).
    - it also has a 'translateX' and 'translateY' functions for separate x-axis and y-axis respectively.
  - when combining 'transform' functions, when you want to overwrite the value of one function, you need to include all of the functions, otherwise you lose them.
  - we also have individual properties like 'translate', 'rotate', 'scale' for more convenience.
- Make transitions using 'transition-\*' property.
  - 'transition-\*' has 4 properties namely 'transition-property', 'transition-duration', 'transition-timing-function', 'transition-delay'.
  - 'transition' shorthand property takes 4 values namely 'property', 'duration', 'timing-function', 'delay'
  - can use 'all' value to apply the same transition on all the properties.
- Make transitions run on its own without any interactions using CSS keyframes and 'animation-\*' property.
  - syntax -> \@keyframes keyframe-name {from{} to{}}
  - 'animation-\*' has 7 properties namely 'animation-name', 'animation-duration', 'animation-timing-function', 'animation-delay', 'animation-iteration-count', 'animation-direction', 'animation-fill-mode'.
  - 'animation' shorthand property takes 7 values namely 'name', 'duration', 'timing-function', 'delay', 'iteration-count', 'direction', 'fill-mode'.

### Positions

- position 'absolute' not only removes the element from the normal flow of the document but it also positions our element relative to the entire page. (to be applied on the element itself)
- position 'relative' positions the element relative to its parent. (to be applied on the parent element)
- position 'static' is the default value of the position property and is also the default position of all elements. (to be applied on the element itself)
- the only difference between position 'static' and position 'relative' (when applied on the element itself) is that 'relative' has the access to the top, right, bottom, left and z-index properties.
  - compared to the position 'absolute' the space allocated to the element is not removed.
- position 'fixed' not only removes the element from the normal flow of the document but it also positions our element relative to the viewport. (to be applied on the element itself)
- unlike the position 'fixed', sticky only works within the confine of its parent element or container.
  - when using the top property with the position of sticky, you're not telling the element where to position itself. instead, the value we put in the top property represents the space between the element and the top of the viewport before the element starts sticking to it.

### Grid

- CSS grid is a two dimensional layout system, it's designed to handle both rows and columns simultaneously.
- While CSS flexbox is a one dimensional layout system, it's designed around distributing items along a single axis, either horizontally or vertically within a container.
- 'grid-template-rows' and 'grid-template-columns' allows us to define rows and columns on our grid.
- 'grid-template-rows' and 'grid-template-columns' start at the index of one rather than zero.
- 'grid-row-start', 'grid-row-end', 'grid-col-start' and 'grid-col-end', these four properties allow us to position our item on our grid instead of each.
  - 'grid-row' and 'grid-column' are shorthand properties.
  - 'grid-area' is a shorthand property for all four of the individual properties. <br> (row-start / col-start / row-end / col-end) in order.
- '-1' represent the last lines on our grid for both the rows and the columns.
- you can layer an item on another item using the 'z-index' property.
- when items are added outside of the explicitly defined grid, this is referred to as an implicit grid.
  - implicit grid doesn't inherit the values that we set in our grid template rows and grid template columns.
  - 'grid-auto-rows' sets the size of the rows on any implicit grid. similar, 'grid-auto-column'
  - change the default behaviour of 'grid-auto-row' using 'grid-auto-flow'
- grid has em, rem, pixel (px), percentage (%) and fractional (fr) units.
- 'minmax(min_sz, max_sz)' function allows us to define a minimum size and maximum size for our rows and columns.
- 'repeat(no of times to repeat, sz)' function repeat a value the number of times that you pass it.
- 'gap' property adds gap between the rows and the columns. (row, column) respectively.
- 'grid-template-areas' allows us to position our items without using line numbers as a value.
- 'justify-items' will align our items horizontally while 'align-items' will align our items vertically.
  - as values we have four options, 'start', 'end', 'center' and 'stretch'.
  - shorthand property -> 'place-items' (single value)
- 'justify-self' and 'align-self' only align one item at a time.
  - as values we have four options, 'start', 'end', 'center' and 'stretch'.
  - shorthand property -> 'place-self' (single value)
- 'justify-content' and 'align-content' will attempt to align the entire grid. essentially our grid needs to be smaller than our container for this to work.
  - as values we have 7 options, 'start', 'end', 'center', 'stretch', 'space-around', 'space-between', and 'space-evenly'.
  - shorthand property -> 'place-content' (single value)
- 'auto-fit' keyword is very similar to 'flex-wrap'.

### Advanced Concepts

- Thinking in CSS (questions to be asked)
  - Is the section one-dimensional or a two-dimensional layout?
  - What's the best tool for the job? Flexbox? Grid? Or no layout tool at all?
  - If we are using a layout tool, how many items are there?
- To create CSS variables at the top of the file, select root pseudo class which has variables starting with the hyphen (--) (eg. --clr-white: #fff)
  - While using it in CSS, use it like eg. color: var(--clr-white)
- Four things to know about margin collapsing -
  - margin collapsing only occurs on block level elements.
  - margin collapsing doesn't happen when using layout tools like flexbox and grid.
  - in the case, where you do have margin collapsing, the highest margin always wins.
  - margin collapsing is bad and you should always avoid it
    - this doesn't mean that you should wrap everything inside a layout tool like flexbox or grid. it only means that if you're working with block level elements, that you should have only one margin in between two elements.
- A CSS reset is a reset that either resets the default styles that the browser assigns to an element, or a CSS reset is a reset that polishes some of the imperfections in the CSS language.

  - Border Box reset ->

    - \*,
      \*::before,
      \*::after {
      box-sizing: border-box;
      }

  - Everything reset ->

    - \* {
      margin: 0;
      padding: 0;
      line-height: 1.5;
      }

  - line height trick:

    - calc(1em + 0.5rem)

  - Smooth Scroll reset -> <br>

    - html { scroll-behaviour: smooth; }

  - Font Family reset -> <br>

    - body { font-family: 'Inter', sans-serif; }

    - input, button, textarea, select { font: inherit; }

  - Media reset -> <br>

    - img, picture, video, canvas, svg { display: block; max-width: 100%; }

  - Button reset ->
    - button { border: none; background: none; color: inherit; cursor: pointer; }

- A utility class is a global class that doesn't belong to any one element. It's a ruleset you create without the intention of selecting a specific element, but instead with the intent of assigning the utility class to different individual elements. (specifically meant to be reusable)
- CSS normalization is just a CSS file that we add or create in our project that makes browsers render all elements more consistently and in line with modern standards.
  - It only targets only the stars that need normalizing.
  - Modern Normalize CSS -> <br>
    https://cdn.jsdelivr.net/npm/modern-normalize/modern-normalize.css
- All 7 pseudo elements (::) ->
  - after
  - before
  - marker
  - selection
  - placeholder
  - first-letter
  - first-line
- All pseudo classes (:) ->
  - hover
  - focus
  - focus-visible
  - first-child
  - last-child
  - nth-child()
  - not()
  - root
  - disabled
  - active
  - checked
  - invalid
  - valid

### Final Project

- Project Setup ->
  - File Structure
  - HTML Boilerplate
  - Adding Fonts
  - CSS Normalization
  - CSS Resets
  - Utility Classes
  - Theming & CSS Variables
- Import CSS Normalization before any other CSS import.
- The 'vertical-align' property is a property that is unlocked to us when an element has a display of inline or inline block. so essentially, this property only works on inline or inline block elements. asthe name suggest, it aligns the inline element vertically.
- You should have only one 'h1' element in the page
- The 'object-fit' of 'contain' scales our image down to maintain its aspect ratio, while fitting it within the width and the height.
