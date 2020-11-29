`highlight.js` syntax definition for SPARQL.

For more about highlight.js, see https://highlightjs.org/

For more about SPARQL, see https://www.w3.org/TR/sparql11-query/

### Usage

Simply include the `highlight.js` script package in your webpage or node app, load up this module and apply it to `hljs`.

If you're not using a build system and just want to embed this in your webpage:

```html
<script type="text/javascript" src="/path/to/highlight.pack.js"></script>
<script type="text/javascript" src="/path/to/highlightjs-sparql/src/languages/sparql.js"></script>
<script type="text/javascript">
    hljs.registerLanguage('sparql', window.hljsDefineSparql);
    hljs.initHighlightingOnLoad();
</script>
```

If you're using webpack / rollup / browserify / node:
   
```javascript
var hljs = require('highlightjs');
var hljsDefineSparql = require('highlightjs-sparql');

hljsDefineSparql(hljs);
hljs.initHighlightingOnLoad();
```

### Advanced

This is a pretty simple package, the only thing you might want to do differently is name the language something other than `sparql`. If you want to do this, simply `import { definer } from 'highlightjs-sparql';` and use it like: `hljs.registerLanguage('othername', definer);`.

### About the author

Redmer KRONEMEIJER is an information modeller. Read more about him at https://rdmr.eu.

The code for SPARQL was taken from two unmaintained repositories:
- Mark Ellis, at https://github.com/ellismarkf/highlight.js
- Vladimir Alexiev, at https://github.com/VladimirAlexiev/highlight.js
