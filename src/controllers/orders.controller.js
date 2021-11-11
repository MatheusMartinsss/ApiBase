
const Orders = require('../models/orders.model.js')
const { getPagination, getPagingData } = require('../functions/pagination');
const Products = require('../models/products.model.js');

module.exports = {
    async store(req, res) {
        const { name, phonenumber, street, number, reference, note, value_subtotal, value_delivery, value_total, products } = req.body;
        if (!(name || phonenumber || value_subtotal || value_total)) return res.status(406).send({ message: 'missing data!' })
        if ((value_total || value_subtotal) <= 0) return res.status(406).send({ message: "total value or subtotal value can't be 0 or less than" })
        //console.log(products)
        const order = await Orders.create({
            name,
            phonenumber,
            street,
            number,
            reference,
            note,
            value_subtotal,
            value_delivery,
            value_total,

        });
        products.map(async (item) => {
            await order.addProducts(
                item.product_id,
                { through: { quantity: item.quantity } }
            );
        })
        return res.status(201).json(order);
    },

    async index(req, res) {

        const { size, page } = req.body;

        const { limit, offset } = getPagination(size, page)
        const data = await Orders.findAndCountAll({ limit, offset })

        if (!data) return res.status(404).send({ message: 'orders not found' })

        const response = getPagingData(data, page, limit);

        return res.json(response);
    },

    async getOrder(req, res) {
        const { id } = req.params;

        const order = await Orders.findByPk(id, {include: [{
            association: 'products',
            attributes: ['name'],
            through: {
                attributes:['quantity', 'price'],    
                
            },
            raw: true,
        }]})
  
        if (!order) return res.status(404).send({ message: 'order ${`id`}' })
        return res.json(order);
    },


    async update(req, res) {
        const { id } = req.params;
        const { status, ...data } = req.body;

        if (status) {
            const order = await Orders.findOne({ where: { id } })
            order.status = status;
            await order.save();
            return res.json(order)
        }

    }
}