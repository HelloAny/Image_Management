'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path')
//故名思意 异步二进制 写入流
const awaitWriteStream = require('await-stream-ready').write;
//管道读入一个虫洞。
const sendToWormhole = require('stream-wormhole');
const md5 = require('md5')


class UserController extends Controller {
    async upload() {
        const {
            ctx,
            service
        } = this;
        //白名单(现在支持PNG、JPG、JPEG、GIF)
        await this.config.multipart.whitelist('/public/img')
        const Path = "http://localhost:7001/public/img/"
        //获取图片流文件
        const stream = await ctx.getFileStream();
        const fileName = await this.getName(stream.filename)

        var filename = new Date().getTime() + md5(fileName.name) + fileName.suffix
        //图片存入本地
        const target = path.join('app/public/img', filename);
        const paths = Path + filename
        // console.log(path)
        const imgTag = paths

        const writeStream = fs.createWriteStream(target);
        try {
            await awaitWriteStream(stream.pipe(writeStream));
        } catch (err) {
            await sendToWormhole(stream);
            throw err;
        }
        //调入数据库
        await service.uploadImg.insert(paths, stream.filename, imgTag, filename)
        const fileData = {
            path: paths,
            tag: imgTag,
            filename: filename
        }
        //文件响应
        ctx.body = fileData
    };
    async getName(filename) {
        //文件名转化为数组
        let filenameArr = filename.split('')
        //定义新数组
        let fileArr = [];
        var file = {
            name: String,
            suffix: String,
            path: String
        };
        //遍历文件名数组
        for (let index = filenameArr.length - 1, order = 0; index >= 0; index--, order++) {
            fileArr[order] = filenameArr[index]
            if (filenameArr[index] == '.') {
                //获取文件后缀
                file.suffix = fileArr.reverse().join('');
                //获取文件名
                filenameArr.splice(filenameArr.length - fileArr.length, fileArr.length)
                file.name = filenameArr.join('')
                //退出遍历
                break;
            }
        }
        return file;
    }
}

module.exports = UserController;