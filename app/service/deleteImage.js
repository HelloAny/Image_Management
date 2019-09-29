'use strict';

const Service = require('egg').Service;



class deleteImageService extends Service {
    //从数据库删除图片
    async delete(filename) {
        const {
            ctx
        } = this;
        try {
            await this.app.mysql.delete('images', {
                filename: filename
            })
        } catch (err) {
            throw err;
        }

        return 'deteleDatabase ok';
    }
}

module.exports = deleteImageService;