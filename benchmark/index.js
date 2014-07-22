/* global suite, bench */

var Context = require('..');
require('should');

suite('Performance', function () {
    bench('Object.create', function () {
        var ctx = {};
        ctx.block = 'html';
        var newCtx = Object.create(ctx);
        ctx.block.should.equal('html');
    });

    bench('Stack on array', function () {
        var ctx = new Context();
        ctx.set('block', 'html');
        ctx.snapshot();
        ctx.get('block').should.equal('html');
    });
});
