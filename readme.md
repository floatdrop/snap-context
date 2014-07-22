# proto-context [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url] [![Coveralls Status][coveralls-image]][coveralls-url]

> Manage context with ease

## Usage

```js
var Context = require('proto-context');
var ctx = {};

ctx.value = 'first version';  // console.log(ctx.value) -> 'first version'
ctx = Context.snapshot(ctx);
ctx.value = 'second version'; // console.log(ctx.value) -> 'second version'
ctx = Context.restore(ctx);
console.log(ctx.value); // -> 'first version' 
```

## API

## Context.snapshot(ctx)

Creates new Object and add it to `ctx` prototype.

## Context.restore(ctx)

Removes created Object from prototype chain of ctx.

[npm-url]: https://npmjs.org/package/proto-context
[npm-image]: http://img.shields.io/npm/v/proto-context.svg

[travis-url]: https://travis-ci.org/floatdrop/proto-context
[travis-image]: http://img.shields.io/travis/floatdrop/proto-context.svg

[depstat-url]: https://david-dm.org/floatdrop/proto-context
[depstat-image]: https://david-dm.org/floatdrop/proto-context.svg?theme=shields.io

[coveralls-url]: https://coveralls.io/r/floatdrop/proto-context
[coveralls-image]: http://img.shields.io/coveralls/floatdrop/proto-context/master.svg
