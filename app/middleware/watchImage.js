module.exports = (options, app) => {
    return async function middleWare(ctx, next) {
        const {
            service
        } = this

        await next()
    }
}