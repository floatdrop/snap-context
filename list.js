var Stack = require('just-a-stack');

var Context = function () {
    this.clean = true;
    this.stack = new Stack();
    this.stack.push({});
};

Context.prototype.get = function get(key) {
    var current = this.stack.list.head;
    while (current.next && current.data[key] === undefined) {
        current = current.next;
    }
    return current.data[key];
};

Context.prototype.set = function set(key, value) {
    if (!this.clean) {
        this.stack.push({});
        this.clean = true;
    }
    this.stack.peek()[key] = value;
};

Context.prototype.snapshot = function snapshot() {
    this.clean = false;
};

Context.prototype.restore = function restore() {
    if (this.stack.length > 1) {
        this.stack.pop();
    }
};

module.exports = Context;
