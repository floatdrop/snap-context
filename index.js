var Context = Object.create(null);

Context.snapshot = function snapshot(ctx) {
    return Object.create(ctx);
};

Context.restore = function restore(ctx) {
    return ctx.prototype || ctx;
};

module.exports = Context;
