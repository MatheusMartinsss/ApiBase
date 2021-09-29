const Users = require('../models/users.model.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    async store(req, res) {
        const { name, email, password} = req.body;

        if(!(name || email || password)) return res.status(400).send({error: 'Nenhum campo pode está vazio!'})// verifica se nenhum campo está vazio.

        const userexist = await Users.findOne({where: {email}}) // Procura um usuario com o email que está cadastrado.

        if(userexist)return res.status(400).send({error: 'Esse email já está cadastrado!.'}) // Verifica se o email passado no body da requisição já está cadastrado.

        const salt = await bcrypt.genSalt(10);

        const passwordformated = await bcrypt.hash(password, salt); //encripta a senha

        const user = await Users.create({

            name,

            email,
            
            password: passwordformated,
        })

        const token = jwt.sign({user_id: user.id, user_name: user.name}, process.env.TOKEN_KEY, {expiresIn: "2h"}) // gera um token com validade de 2h

        user.token = token; 

        user.password = null;

        return res.json({user: user, token: token})
    },
    async auth(req, res){

        const {email, password} = req.body;

        if(!(email || password)) return res.status(400).send({ error: 'Os campos não podem está vazio!.'})//Verifica se nenhum dos campos está nulo

        const user = await Users.findOne({where: {email}});// busca um usuario com o email enviado no body a requisição.

        if(!user)return res.status(401).send({error: 'usuario não encontrado!.'})// Verifica se o usuario existe na base de dados.

       const validatePassword = await bcrypt.compare(password, user.password); // Valida se a senha passada no body da requisição é igual a senha salva.

        if(validatePassword){ //caso a senha seja valida.

            user.password = null; // seta a senha do usuario para null para não ser enviada para o front-end

            const token = jwt.sign({user_id: user.id, user_name: user.name}, process.env.TOKEN_KEY, {expiresIn: "2h"}) // gera um token de autenticação com validade de 2h

            return res.json({user: user, token: token})

        }else {

            return res.status(400).json({error: 'senha invalida!.'})
        }
    }

}