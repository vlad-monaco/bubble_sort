'use strict'
function bubbleSort (callback, context) {
    if (!Array.isArray(this)) {
        throw new TypeError('this is not array');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function');
    }

    if (this.length === 1) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < (this.length - 1); j++) {
            const result = callback.call(context, this[j], this[j + 1]);

            if (result) {
                let tmp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = tmp;
            }
        }
    }

    return this
}
module.exports = {bubbleSort};
