/* global describe, it */

var Context = require('..');
require('should');

describe('Context', function () {
    it('should preserve previous values after snapshot', function () {
        var json = { block: 'html' };
        var ctx = {};
        ctx.block = json.block;
        ctx = Context.snapshot(ctx);
        ctx.block.should.equal('html');
    });

    it('should return bottom context, if restore called on bottom one', function () {
        var ctx = {};
        ctx = Context.restore(ctx);
        ctx.block = 'html';
        ctx.block.should.equal('html');
    });
});
