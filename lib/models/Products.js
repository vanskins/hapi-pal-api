'use strict';

const Schwifty = require('schwifty');
const Joi = require('@hapi/joi');

module.exports = class Products extends Schwifty.Model {

    static get tableName() {

        return 'Products';
    }

    static get joiSchema() {

        return Joi.object({
            product_id: Joi.number().integer(),
            name: Joi.string(),
            quantity_in_stock: Joi.number(),
            unit_price: Joi.number()
        });
    }
};