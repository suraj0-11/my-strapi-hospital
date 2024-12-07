'use strict';

/**
 * dispensary service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dispensary.dispensary');
