// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDeleteImage = require('../../../app/service/deleteImage');
import ExportGetImageUrl = require('../../../app/service/getImageUrl');
import ExportUploadImg = require('../../../app/service/uploadImg');

declare module 'egg' {
  interface IService {
    deleteImage: ExportDeleteImage;
    getImageUrl: ExportGetImageUrl;
    uploadImg: ExportUploadImg;
  }
}
