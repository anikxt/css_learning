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
  - it takes 'contain', 'cover', 'fill', 'npne', 'scale-down' values.
- 'aspect-ratio' allows you to define the desired width-to-height ratio of an element's box.
  - this means that even if the parent container or viewport size changes, the browser will adjust the element's dimensions to maintain the specified width-to-height ratio.
  - it takes one or both of the keyword 'auto' or a \<ratio> values.
- 'object-position' specifies the alignment of the selected replaced element's contents within the element's box.
  - areas of the box which aren't covered by the replaced element's object will show the element's background.
  - it takes keyword, \<percentage>, \<length>, edge offsets, global values.
