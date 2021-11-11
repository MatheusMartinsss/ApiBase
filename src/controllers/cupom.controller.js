const Cupom = require('../models/cupom.model.js')
const { getPagination, getPagingData } = require('../functions/pagination');
module.exports = {
    async store(req, res) {
        console.log(req.body)
        const { name, phonenumber, cpf, tickets, email, value } = req.body;
        if (!(name || phonenumber || cpf || email || value || tickets)) return res.status(406).send({ message: 'missing data!' })
        const cupom = await Cupom.create({
            name,
            phonenumber,
            cpf,
            tickets,
            email,
            value
        });
        return res.status(201).json(cupom);
    },
    async index(req, res) {

        const { size, page } = req.body;

        const { limit, offset } = getPagination(size, page)
        const data = await Cupom.findAndCountAll({ limit, offset })

        if (!data) return res.status(404).send({ message: 'Cupom not found' })

        const response = getPagingData(data, page, limit);

        return res.json(response);
    },
}