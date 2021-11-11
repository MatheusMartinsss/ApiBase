const Permissions = require('../models/permissions.model.js')

module.exports = {
    async store (req, res){

        const {name, description} = req.body;

        if(!name)return res.status(405).send({message: 'Name is empty'})

        const exists =  await Permissions.findOne({where: {name}});

        if(exists)return res.status(401).send({message:'already exists permission with this name'})

        const permission = await Permissions.create({

            name,
            description
        })
        return res.json({permission: permission});
    },
}