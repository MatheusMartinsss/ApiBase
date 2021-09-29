const jwt = require('jsonwebtoken')
module.exports = {

    async verifytoken(req, res, next) {
        const token = req.headers.authorization;
        console.log(token)
        if (!token) return res.status(403).send({ message: "É necessario um token para autorização" })
        const tokenString = token.split(' ')
        if (tokenString[0] !== 'Bearer' || !tokenString[1]) return res.status(400).send({ message: 'Token mal formatado' })
        jwt.verify(tokenString[1], process.env.TOKEN_KEY, function(err, decoded){
            if(decoded){
                console.log(decoded)
                res.user = decoded.user_id;
                return next();
            }else {
                return res.status(401).send({message: 'token invalido'})
            }
        })
       
    }
}