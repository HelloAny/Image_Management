'use strict';

const Controller = require('egg').Controller;

class getImageController extends Controller {
    async getImage() {
        const {
            ctx,
            service
        } = this;

        try {
            var image = await service.getImageUrl.getUrl();
        } catch (err) {
            console.log(err)
        }
        ctx.body = image;
    }
}

module.exports = getImageController;