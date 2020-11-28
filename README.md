`highlight.js` syntax definition for Turtle.

For more about highlight.js, see https://highlightjs.org/

For more about Turtle, see https://www.w3.org/TR/turtle/

### Usage

Simply include the `highlight.js` script package in your webpage or node app, load up this module and apply it to `hljs`.

If you're not using a build system and just want to embed this in your webpage:

```html
<script type="text/javascript" src="/path/to/highlight.pack.js"></script>
<script type="text/javascript" src="/path/to/highlightjs-turtle/turtle.js"></script>
<script type="text/javascript">
    hljs.registerLanguage('turtle', window.hljsDefineTurtle);
    hljs.initHighlightingOnLoad();
</script>
```

If you're using webpack / rollup / browserify / node:
   
```javascript
var hljs = require('highlightjs');
var hljsDefineTurtle = require('highlightjs-turtle');

hljsDefineTurtle(hljs);
hljs.initHighlightingOnLoad();
```

### Advanced

This is a pretty simple package, the only thing you might want to do differently is name the language something other than `turtle`. If you want to do this, simply `import { definer } from 'highlightjs-turtle';` and use it like: `hljs.registerLanguage('othername', definer);`.

### About the author

The code for Turtle was taken from the non-merged pull request by Mark Ellis, at https://github.com/ellismarkf/highlight.js/blob/c65ea836b3785a5b2ee2078461edaf38c005247d/src/languages/sparql.js
