var Context = function () {
    this.clean = true;
    this.stack = [{}];
};

Context.prototype.get = function get(key) {
    var i = this.stack.length - 1;
    while (i > 0 && this.stack[i][key] === undefined) {
        i--;
    }
    return this.stack[i][key];
};

Context.prototype.set = function set(key, value) {
    if (!this.clean) {
        this.stack.push({});
        this.clean = true;
    }
    this.stack[this.stack.length - 1][key] = value;
};

Context.prototype.snapshot = function snapshot(ctx) {
    this.clean = false;
};

Context.prototype.restore = function restore(ctx) {
    if (this.stack.length > 1) {
        this.stack.pop();
    }
};

module.exports = Context;
