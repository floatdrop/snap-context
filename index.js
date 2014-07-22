var Context = Object.create(null);

Context.snapshot = function snapshot(ctx) {
    var newCtx = {};
    newCtx.prototype = ctx;
    return newCtx;
};

Context.restore = function restore(ctx) {
    return ctx.prototype;
};

module.exports = Context;
