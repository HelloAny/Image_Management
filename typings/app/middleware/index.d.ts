// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportWatchImage = require('../../../app/middleware/watchImage');

declare module 'egg' {
  interface IMiddleware {
    watchImage: typeof ExportWatchImage;
  }
}
