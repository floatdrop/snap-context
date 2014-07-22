/* global describe, it */

var Context = require('..');
require('should');

describe('Context', function () {
    it('should preserve previous values after snapshot', function () {
        var ctx = new Context();
        ctx.set('block', 'html');
        ctx.snapshot();
        ctx.get('block').should.equal('html');
    });

    it('should return bottom context, if restore called on bottom one', function () {
        var ctx = new Context();
        ctx.restore();
        ctx.set('block', 'html');
        ctx.get('block').should.equal('html');
    });
});
