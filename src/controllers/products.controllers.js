const Produtos = require('../models/products.model')

module.exports = {
    async store(req, res) {

        const { name, description, price } = req.body;

        if(!name)return res.send({message: 'Nome do produto está vazio!.'}) // Verifica se o campo name no body da requisição está vazio.
        
        const product = await Produtos.create({  //Cria o novo produto na base de dados.
            name, 

            description, 

            price 
        });

        return res.json(product);
    },

    async index (req, res){

        const products = await Produtos.findAll(); // Encontra todos produtos!

        if(!products) return res.status(400).send({message: 'Nenhum produto encontrado!.'}); // Caso nenhum produto seja encontrado.

        return res.json(products);
    },

    async delete (req, res){

        const {id} = req.params;

        if(!id)return res.send({message: 'Precisa de um id para deletar um produto!.'})// Verifica se o ID no body da requisição está vazio

        await Produtos.destroy({
            
            where: {id}
        })
        return res.send({message: 'Produto id ' + id +'Deletado com sucesso'})
    }
}