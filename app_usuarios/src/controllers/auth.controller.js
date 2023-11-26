const User = require('../models/user');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
    try{
        let { username, password, email} = req.body
        let user = new User({ 
            username: username, 
            password: await bcrypt.hash(password, 10),
            email: email
        });
        await user.save();
        return res.status(200).send({message: "User was registered successfully!"});
    }catch(err){
        return res.status(500).send({message: err.message});
    }
}

exports.signin = async (req, res) => {
    try{
        const user = await User.findOne({ email: req.body.email });
        if (!user || !await bcrypt.compare(req.body.password, user.password)) {
            return res.status(400).send({message: "Invalid login credentials"});
        }

        const token = jwt.sign({id:user.username}, config.SECRET, {algorithm: 'HS256', expiresIn: 60*60*24*7});
        req.session.token = token; 

        return res.status(200).send({
            username: user.username,
            email: user.email,
            accessToken: token
        });
    }catch(err){
        return res.status(500).send({message: err.message});
    }
}

exports.signout = async (req, res) => {
    try {
      req.session = null;
      return res.status(200).send({
        message: "You've been signed out!"
      });
    } catch (err) {
      this.next(err.message);
    }
  };

exports.validate = async (req, res) => {
    try {
      const token = req.session.token;
      if (!token) {
        return res.status(403).send({ message: 'No token provided!' });
      }
      jwt.verify(token, config.SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: 'Unauthorized!' });
        }
        return res.status(200).send({ message: 'Authorized!' });
      });
    } catch (err) {
      this.next(err.message);
    }
}