'use strict';

const Service = require('egg').Service;
const fs = require('fs');
const path = require('path')
//故名思意 异步二进制 写入流
const awaitWriteStream = require('await-stream-ready').write;
//管道读入一个虫洞。
const sendToWormhole = require('stream-wormhole');


class insertImgService extends Service {
    //图片传入数据库
    async insert(paths, streamFilename, imgTag, filename) {
        const {
            ctx
        } = this;
        const resource = await this.app.mysql.insert('images', {
            images: paths,
            name: streamFilename,
            tag: imgTag,
            filename: filename
        })
        return resource;
    }
}

module.exports = insertImgService;