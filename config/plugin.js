'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  raven: {
    enable: true,
    package: 'egg-raven',
  }
};
