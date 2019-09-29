// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportChangeImageName = require('../../../app/controller/changeImageName');
import ExportDeleteImg = require('../../../app/controller/deleteImg');
import ExportGetImage = require('../../../app/controller/getImage');
import ExportHome = require('../../../app/controller/home');
import ExportUploadImage = require('../../../app/controller/uploadImage');

declare module 'egg' {
  interface IController {
    changeImageName: ExportChangeImageName;
    deleteImg: ExportDeleteImg;
    getImage: ExportGetImage;
    home: ExportHome;
    uploadImage: ExportUploadImage;
  }
}
