'use strict';

module.exports = {
  // had enabled by egg
  static: {
    enable: true,
    package: 'egg-static'
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  }
};