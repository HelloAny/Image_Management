'use strict';

const Controller = require('egg').Controller;

class ChangeImageNameController extends Controller {
    async changeName() {
        const {
            ctx,
            service
        } = this;
        const data = ctx.request.body
        const states = await service.getImageUrl.getSpecifiedId(data)
        // console.log(states.affectedRows)
        if (states.affectedRows === 1) {
            ctx.response.body = 'success'
        } else {
            ctx.response.body = "false"
        }

    }
}

module.exports = ChangeImageNameController;