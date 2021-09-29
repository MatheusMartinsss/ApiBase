# ApiBase
Api base para futuros projetos, desenvolvida em node js, usando sequelize, express e mysql.

# Desenvolvido até agora

### Usuario routers
* Rota para criar usuario
> method: post
> 
> /user/register 
> 
> body: name, email e password

* Rota para autenticar o usuario
>method: post
>
>/user/login
>
>body: email e password

### Produto routers
* Rota para criar um produto
> method: post
>
>/products/create 
>
>body: name, price, description

* Rota para filtrar todos produtos
>method: get
>
>/products/

* Rota para deletar um produto
> method: delete
>
>/products/delete/:id
