const User = require('../models/User');

exports.getUser = async (req, res) => {
  try{
    let user = await User.findOne({username: req.userId});
    if(!user){
      return res.status(400).send({message: "The user does not exist"});
    }
    return res.status(200).send({
      username: user.username,
      email: user.email
    });
  }catch(err){
    res.status(500).send({message: err});
  }
};