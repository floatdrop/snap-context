# snap-context [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> Manage context with ease

## Usage

```js
var Context = require('proto-context');
var ctx = new Context();

ctx.set('value', 'first version');  // console.log(ctx.get('value')) -> 'first version'
ctx.snapshot();
ctx.set('value', 'second version'); // console.log(ctx.get('value')) -> 'second version'
ctx.restore();
console.log(ctx.get('value')); // -> 'first version' 
```

## API

## new Context

Creates context object with methods:

### Context.set(key, value)

Sets key for value in current context.

### Context.get(key)

Gets value for key in current (or previous) context.

### Context.snapshot(ctx)

Creates new Object and add it to `ctx` prototype.

### Context.restore(ctx)

Removes created Object from prototype chain of ctx.

## Benchmark results

Benchmarking set -> snapshot -> get -> restore pattern:

```js
                      Performance
       1,133,011 op/s » Stack on array
         668,539 op/s » Stack on list
             645 op/s » Stack on object.prototype
```

[npm-url]: https://npmjs.org/package/snap-context
[npm-image]: http://img.shields.io/npm/v/snap-context.svg

[travis-url]: https://travis-ci.org/floatdrop/snap-context
[travis-image]: http://img.shields.io/travis/floatdrop/snap-context.svg

[depstat-url]: https://david-dm.org/floatdrop/snap-context
[depstat-image]: https://david-dm.org/floatdrop/snap-context.svg?theme=shields.io
