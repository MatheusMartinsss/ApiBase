const Roles = require('../models/roles.model.js');

module.exports = {
    async store(req, res) {
        const { name, description, permissions_id } = req.body;
        if (!name) return res.status(405).send({ message: 'Name is empty' })

        if (!permissions_id) return res.status(405).send({ message: 'Permissions is empty' })

        const exists = await Roles.findOne({ where: { name } })

        if (exists) return res.status(401).send({ message: 'already exist a role with this name' })

        const role = await Roles.create({

            name,
            description
        })
        console.log(role)
        await role.addPermissions(permissions_id);

        return res.json({ role: role });
    },

    async index(req, res) {

        const data = await Roles.findAll({
            include: [
                {
                    association: 'permissions',
                    attributes: ['id','name'],
                    through: {
                        attributes: []
                    }
                }
            ]
        })
        return res.json(data);
    },
    async update(req, res) {

        const {id} = req.params;

        const {name, description, permissions } = req.body;

        const role = await Roles.findOne({where:{id}})

        if(!role)return res.status(404).send({message: 'role not found'})
        
        role.name = name;

        role.description = description;

        await role.setPermissions(permissions)

        await role.save();

        return res.json(role)
    }
}