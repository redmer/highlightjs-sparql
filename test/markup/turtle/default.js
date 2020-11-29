const assert = require('assert');
const parse5 = require('parse5');

const hljs = require('highlightjs');
const defineTurtle = require('../../../src/languages/turtle');

defineTurtle(hljs);

// Receives a Turtle snippet and returns an array of [type, text] tuples.
// Type is the detected token type, and text the corresponding source text.
function getTokens(source) {
  const { value } = hljs.highlight('turtle', source);
  const frag = parse5.parseFragment(value);

  return frag.childNodes.map(function (node) {
    if (node.nodeName === '#text') {
      return ['none', node.value];
    } else {
      const type = node.attrs.find(a => a.name === 'class').value.replace(/^hljs-/, '');
      assert(
        node.childNodes.length === 1 && node.childNodes[0].nodeName === '#text',
        'Unexpected nested tags',
      );
      return [type, node.childNodes[0].value];
    }
  });
}

// Taken from the Solidity repo.
it('numbers', function () {
  const ok = [
    '-5',
    '-5.0',
    '4.2E9',
  ];

  const fail = [
    '1-5',
    '5,0',
  ];

  for (const n of ok) {
    assert.deepStrictEqual(getTokens(n), [['number', n]]);
  }

  for (const n of fail) {
    assert.notDeepStrictEqual(getTokens(n), [['number', n]]);
  }
});

// it('namespaces', function () {
//   assert.deepStrictEqual(getTokens(':local'), [['symbol', ':local']]);
//   assert.deepStrictEqual(getTokens('_:local'), [['template-variable', '_:local']]);
//   assert.deepStrictEqual(getTokens('ns1:hello'), [['symbol', 'ns1:hello']]);
//   assert.notDeepStrictEqual(getTokens('ns1:ns2:wrong'), [['symbol', 'ns1:ns2:wrong']]);
// });

it('strings', function () {
  assert.deepStrictEqual(getTokens('"hello"@en'), [['string', '"hello"'], ['type', '@en']]);
  assert.deepStrictEqual(getTokens('"daar"@nl-NL'), [['string', '"daar"'], ['type', '@nl-NL']]);
});
