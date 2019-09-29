'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  const demo = app.middleware.watchImage();
  router.get('/', controller.home.index);
  router.post('/uploadImage', controller.uploadImage.upload);
  router.get('/getImage', controller.getImage.getImage)
  router.post('/changeImageName', controller.changeImageName.changeName)
  router.post('/deleteImage', controller.deleteImg.deleteImg)
};