/* global suite, bench */

var Context = require('..');

suite('Performance', function () {
    // bench('Handwritten version', function () {
    // });

    bench('Object.create', function () {
        var ctx = {};
        ctx = Context.snapshot(ctx);
        ctx.key = 'value';
        ctx = Context.restore(ctx);
    });
});
