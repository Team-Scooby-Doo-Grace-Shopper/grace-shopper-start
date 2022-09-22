const router = require('express').Router();
const { Order, User, LineItem, Product } = require('../db');

const requireToken = async(req,res,next)=>{
    try{
        const token = await req.headers.authorization
        const user = await User.byToken(token)
        req.user = user
        next()
    }catch(error){next(error)}
}

router.get('/', requireToken, async (req,res,next)=>{
    try{
    let orders = await Order.findAll({where:{
        isCart:false},
        include:[
            {model:User},
            {model:LineItem, include:[{model:Product}]}
        ]
    })
    res.send(orders)

    }catch(error){next(error)}
})

module.exports = router