const User = require('../models/User');

const chckDuplicateUsernameOrEmail = async (req, res, next) => {
    try{
        let user = await User.findOne({username: req.body.username});   
        if(user){
            return res.status(400).send({message: "The user already exists"});
        }
        let email = await User.findOne({email: req.body.email});
        if(email){
            return res.status(400).send({message: "The email already exists"});
        }
        next();
    }catch(err){
        res.status(500).send({message: err});
    }
}
let verifySignUp = {chckDuplicateUsernameOrEmail};
module.exports = verifySignUp;
