var obj = {}
var jsonpointer = require('jsonpointer.js');
var target = {
    foo: {
        bar: 'foobar'
    },
    baz: [true, false],
    '~': 'tilde',
    '/': 'slash'
};

jsonpointer.set(obj, '/a/b/c', 6);
console.log(obj);
