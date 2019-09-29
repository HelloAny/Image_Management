// app/extend/response.js
module.exports = {
    set foo(value) {
        this.set('x-response-foo', value);
    },
};