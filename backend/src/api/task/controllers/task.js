'use strict';

/**
 * task controller
 */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::task.task');



const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::task.task', ({ strapi }) => ({
  async create(ctx) {
    // كود مخصص قبل الإنشاء
    const response = await super.create(ctx);
    // كود مخصص بعد الإنشاء
    return response;
  },
}));
