'use strict';

const Service = require('egg').Service;
const fs = require('fs');
const path = require('path')

class getImageUrlService extends Service {
    //图片传入数据库
    async getUrl(fileTarget) {
        const {
            ctx
        } = this;
        const img = await this.app.mysql.select('images', {
            columns: ['images', 'name', 'tag', 'filename'], // 要查询的表字段
        })
        let images = img.map(element => {
            return element
        });
        return images;
    };

    async getSpecifiedId(target) {
        const {
            app
        } = this;
        const row = {
            name: target.name
        }
        const options = {
            where: {
                filename: target.data,
            }
        };
        const states = await app.mysql.update('images', row, options)
        // console.log(target)
        return states;
    }
}

module.exports = getImageUrlService;