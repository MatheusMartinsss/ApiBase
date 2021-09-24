const Produtos = require('../models/products.model')

module.exports = {
    async store(req, res) {
        const { name, description, price } = req.body;
        if(!name){
            return res.send({message: 'Nome do produto está vazio!.'})
        }
        const product = await Produtos.create({ name, description, price });
        return res.json(product);
    },
    async index (req, res){
        const products = await Produtos.findAll();
        if(!products) return res.send({message: 'Nenhum produto encontrado!.'});
        return res.json(products);
    },
    async delete (req, res){
        const {id} = req.params;
        if(!id)return res.send({message: 'Precisa de um id para deletar um produto!.'})
        await Produtos.destroy({
            where: {id}
        })
        return res.send({message: 'Produto id ' + id +'Deletado com sucesso'})
    }
}