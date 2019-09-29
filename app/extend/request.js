// app/extend/request.js
module.exports = {
    get foo() {
        return this.get('x-request-foo');
    },
};