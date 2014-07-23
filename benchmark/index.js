/* global suite, bench */

require('should');

function benchStack(stack) {
    return function () {
        stack.set('block', 'html');
        stack.snapshot();
        stack.get('block').should.equal('html');
        stack.restore();
    };
}

suite('Performance', function () {
    var ArrayContext = require('../array.js');
    bench('Stack on array', benchStack(new ArrayContext()));

    var ListContext = require('../list.js');
    bench('Stack on list', benchStack(new ListContext()));

    var ProtoContext = require('../proto.js');
    bench('Stack on object.prototype', benchStack(new ProtoContext()));
});
