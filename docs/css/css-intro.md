---
title: "CSS Intro"
slug: "/css-intro"
---

## Why

So why use CSS? CSS helps you to keep the informational content of a document separate from the details of how to display it. The details of how to display the document are known as its style. You keep the style separate from the content so that you can avoid duplication, make maintenance easier, and use the same content with different styles for different purposes.

Your web site might have thousands of pages that look similar. Using CSS, you store the style information in common files that all the pages share. When a user displays a web page, the user’s browser loads the style information along with the content of the page. When a user prints a web page, you might provide different style information that makes the printed page easier to read.

In general, you use HTML to describe the _content_ of the document, not its style. You use CSS to specify its _style_, not its content. There are exceptions to this rule, of course, and HTML also provides some ways to specify style. For example, in HTML `<b>` tags make text bold by default, `<em>` tags make text italicized by default, etc. When you use CSS, you normally want to customize default styling with CSS.

## What

CSS stands for **Cascading Style Sheets**. **Cascading** refers to the way CSS applies one style on top of another. **Style Sheets** control the look and feel of web documents. **CSS** and **HTML** work hand in hand. HTML sorts out the page structure. CSS defines how HTML elements are displayed. There are 3 types of CSS:

- inline css
- internal css
- external css

### Inline CSS

Using inline style is one of the ways to insert a style sheet. With inline styling, a unique style is applied to a single element. In order to use an inline style, add the `style` attribute to the relevant tag. The example below shows how to create a paragraph with a gray background and white text:

```html
<p style="background-color: gray; color: white;">
  This is a gray paragraph tag with white text
</p>
```

### Embedded/Internal CSS

Internal style sheets are defined within the `<style>` tag, inside the `<head>` section of an HTML page.

For example, the following code styles all paragraph tags:

```html
<head>
  <style>
    p {
      background-color: gray;
      color: white;
    }
  </style>
</head>
```

### External CSS

With this method, all styling rules are contained in a single text file, which is saved with the .css extension. This CSS file is then referenced in the HTML file using the `<link>` tag. The `<link>` element goes inside the head section. Here is an example:

### The HTML

```html
<head>
  <link href="styles.css" />
</head>
```

> NOTE: We will be using External CSS from now on because it is best practice

## How

### CSS Syntax

To create custom CSS for our HTML we must follow the rules for CSS syntax.

```css
selector {
  property-name: value;
}
```

The _selector_ points to the HTML element you want to style. The _declaration block_ contains one or more declarations separated by semicolons. Each declaration includes a CSS property _name_ and a _value_, separated by a colon. Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

```css
p {
  color: red;
  text-align: center;
}
```

- `p` is a selector in CSS (it points to the HTML element you want to style: `<p>`)
- Color is a property, and red is the property value
- Text-align is a property, and center is the property value

### CSS Selectors

CSS selectors are used to “find” (or select) the HTML elements you want to style. We can divide CSS selector into 5 categories:

- Simple selectors (select elements based on _name_, _id_, _class_)
- [Combinator selectors](https://www.w3schools.com/css/css_combinators.asp) (select elements based on a specific relationship between them)
- [Pseudo-class selectors](https://www.w3schools.com/css/css_pseudo_classes.asp) (select elements based on a certain state)
- [Pseudo-elements selectors](https://www.w3schools.com/css/css_pseudo_elements.asp) (select and style a part of an element)
- [Attribute selectors](https://www.w3schools.com/css/css_attribute_selectors.asp) (select elements based on an attribute or attribute value)

(To keep things simple, we will only go over the simple selectors)

#### CSS Element Selector

The element selector selects HTML elements based on the element name. In the example below all `<p>` elements on the page will be center-aligned, with a red text color:

```css
p {
  color: red;
  text-align: center;
}
```

#### CSS ID Selector

The id selector uses the id attribute of an HTML element to select a specific element. The id of an element is unique within a page, so the id selector is used to select **one** unique element. To select an element with a specific id, write a hash (`#`) character, followed by the id of the element. The CSS rule below will be applied to the HTML element with `id="para1"`:

```css
#para1 {
  color: red;
  text-align: center;
}
```

#### CSS Class Selector

The Class selector selects HTML elements with a specific class attribute. To select elements with a specific class, write a period (`.`) character, followed by the class name.

In the example below, all HTML elements with `class="center"` will be red and center-aligned:

```css
.center {
  color: red;
  text-align: center;
}
```

#### CSS Universal Selector

The universal selector (`*`) selects all HTML elements on the page. The CSS rule below will affect every HTML element on the page:

```css
* {
  color: red;
  text-align: center;
}
```

#### CSS Grouping Selector

The grouping selector selects all the HTML elements with the same style definitions. The following CSS code has three identical rulesets that apply to different elements.

```css
h1 {
  color: red;
  text-align: center;
}

p {
  color: red;
  text-align: center;
}

span {
  color: red;
  text-align: center;
}
```

In this example it is better to group the selectors to minimize the code. To group selectors, separate each selector with a comma.

```css
h1,
p,
span {
  color: red;
  text-align: center;
}
```

### Common CSS Properties

| Property | Effect | Example |
| --- | --- | --- |
| color | text color | `black` |
| font-size | text size | `20px` |
| font-weight | text boldness | `800` |
| text-align | text aligment within an element | `center` |
| background-color | background color | `#0094c8` |
| margin | shorthand for margin-top, -right, -bottom, -left | `10px 12px 14px 16px` |
| padding | shorthand for padding-top, -right, -bottom, -left | `10px 12px 14px 16px` |
| border | element border | `1px solid black` |
| width | the width of an element | `50px` | 
| height | the height of an element | `40px` |
| max-width | the maximum width of an element | `600px` |
| max-height | the maximum height of an element | `400px` |
| display | changes the display behavior of an element | `block`, `inline`, `inline-block` |

Visit [w3schools](https://www.w3schools.com/css/) for more css tutorials.

## Takeaways

1. CSS is used to _style_ the content of a webpage
2. CSS can be applied via _inline_, _internal/embedded_, or _external_ css
3. CSS rulesets are made up of _selectors_, _properties_, and _values_
