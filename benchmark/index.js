/* global suite, bench */

var Context = require('..');

suite('Performance', function () {
    bench('Inlined version', function () {
        var ctx = {};
        var newCtx = {};
        newCtx.prototype = ctx;
        newCtx.key = 'value';
    });

    bench('Context version', function () {
        var ctx = {};
        ctx = Context.snapshot(ctx);
        ctx.key = 'value';
        ctx = Context.restore(ctx);
    });
});
