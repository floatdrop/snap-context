/* global describe, it */

var Context = require('..');
require('should');

describe('Context', function () {
    it('should snapshot and restore object', function() {
        var ctx = Object.create(null);
        ctx.value = 1;
        ctx = Context.snapshot(ctx);
        ctx.value = 2;
        ctx = Context.restore(ctx);
        ctx.value.should.equal(1);
    });
});
