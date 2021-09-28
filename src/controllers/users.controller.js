const Users = require('../models/users.model.js')
const bcrypt = require('bcrypt')

module.exports = {
    async store(req, res) {
        const { name, email} = req.body;
        let {password} = req.body;
        if(!name || !email || !password) return res.status(400).send({error: 'Nenhum campo pode está vazio!'})// verifica se nenhum campo está vazio.

        const salt = await bcrypt.genSalt(10);

        password = await bcrypt.hash(password, salt); //encripta a senha

        await Users.create({
            name,
            password,
            email
        })
        return res.send({message: "Usuario  criado com sucesso"});
    },
    async auth(req, res){

        const {email, password} = req.body;

        if(!email || password) return res.status(400).send({ error: 'Os campos não podem está vazio!.'})//Verifica se nenhum dos campos está nulo

        const user = await Users.findOne({where: email});// busca um usuario com o email enviado no body a requisição.

        if(!user)return res.status(401).send({error: 'usuario não encontrado!.'})// Verifica se o usuario existe na base de dados.

        const validatePassword = await bcrypt.compare(password, user.password); // Valida se a senha passada no body da requisição é igual a senha salva.

        if(validatePassword){

            return res.status(200).json({message: 'Autenticado com sucesso!'})

        }else {

            return res.status(400).json({error: 'senha invalida!.'})
        }
    }

}