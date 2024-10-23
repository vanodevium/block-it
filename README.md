# block-it

block-it is the simplest, responsive, vanilla JavaScript blocker.

## Installation

Add the css and the script to your project:

```html
<html>
  <head>
    ...
    <link href="/path/to/block-it.min.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    ...
    <script src="/path/to/block-it.min.js" type="text/javascript"></script>
  </body>
</html>
```

## Usage

### Basic

```javascript
// block the UI
BlockIT.block();

// unblock the UI
BlockIT.unBlock();
```

### Examples

```js
BlockIT.block(); // To simply block the whole body
BlockIT.block(".class"); // block a certain element by class selector
BlockIT.block("#id"); // block a certain element by id selector
BlockIT.block(".selector", "Loading..."); // block a certain element with custom text
BlockIT.unBlock(); // Will unblock any and all options from above
```

## License

**block-it** is open-sourced software licensed under the [MIT license](./LICENSE.md).

[Vano Devium](https://github.com/vanodevium/)

---

Made with ❤️ in Ukraine
