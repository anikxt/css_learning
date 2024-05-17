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
  - Bracket ony comepete with bracket which means any attribute only compete with its own kind.
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
