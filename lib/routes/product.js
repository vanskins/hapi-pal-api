'use strict';

module.exports = {
    method: 'GET',
    path: '/products',
    options: {
        handler: async (request, h) => {
            const { Products } = request.models();
            const products = await Products.query().findOne({ name: 'Foam Dinner Plate' });
            return h.response({ msg: 'hello', products })
        }
    }
};
