'use strict';

const Controller = require('egg').Controller;
const fs = require('fs')

class deleteImgController extends Controller {
    async deleteImg() {
        const {
            ctx,
            service
        } = this;
        var image = ctx.request.body.filename
        fs.unlink(`app/public/img/${image}`, (err) => {
            if (err) throw err;
            console.log("delete ok")
        })
        try {
            var data = await service.deleteImage.delete(image);
        } catch (err) {
            console.log(err)
        }
        ctx.body = data;
    }
}

module.exports = deleteImgController;