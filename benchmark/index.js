/* global suite, bench */

require('should');

function benchStack(stack, depth) {
    return function () {
        stack.set('block', 'html');
        for (var i = 0; i < depth; i ++) {
            stack.snapshot();
        }
        stack.get('block').should.equal('html');
        for (var i = 0; i < depth; i ++) {
            stack.restore();
        }
    };
}

suite('Short stack', function () {
    var ArrayContext = require('../array.js');
    bench('Stack on array', benchStack(new ArrayContext(), 1));

    var ListContext = require('../list.js');
    bench('Stack on list', benchStack(new ListContext(), 1));

    // var ProtoContext = require('../proto.js');
    // bench('Stack on object.prototype', benchStack(new ProtoContext(), 1));
});


suite('Long stack', function () {
    var ArrayContext = require('../array.js');
    bench('Stack on array', benchStack(new ArrayContext(), 100));

    var ListContext = require('../list.js');
    bench('Stack on list', benchStack(new ListContext(), 100));

    // var ProtoContext = require('../proto.js');
    // bench('Stack on object.prototype', benchStack(new ProtoContext(), 100));
});

suite('Very long stack', function () {
    var ArrayContext = require('../array.js');
    bench('Stack on array', benchStack(new ArrayContext(), 1000));

    var ListContext = require('../list.js');
    bench('Stack on list', benchStack(new ListContext(), 1000));

    // var ProtoContext = require('../proto.js');
    // bench('Stack on object.prototype', benchStack(new ProtoContext(), 1000));
});
