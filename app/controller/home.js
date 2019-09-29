'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx,
      service
    } = this;
    await service.getImageUrl.getUrl();
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;