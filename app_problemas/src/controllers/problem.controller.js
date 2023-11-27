const Problem = require('../models/Problem');
const { v4: uuidv4 } = require('uuid');
const Joi = require('joi');

const problemSchema = Joi.object({
    titulo: Joi.string().required(),
    descripcion: Joi.string().required(),
    casos_prueba: Joi.array().items(Joi.object({
      entrada: Joi.string().required(),
      salida: Joi.string().required()
    }))
  });

exports.insert_problems = async(req, res) =>{
    try{
        const { error } = problemSchema.validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        const id = uuidv4();
        const{titulo, descripcion, casos_prueba} = req.body;
        const user_created = req.userId;
        const problem = new Problem({
            id,
            titulo,
            descripcion,
            user_created,
            casos_prueba
        });
        await problem.save();
        return res.status(200).send({message: "Problem created successfully", problem: problem});
    }catch(err){
        return res.status(500).send({message: err.message});
    }
}

exports.get_problem = async(req, res) =>{
    try{
        const problem = await Problem.findOne({id: req.params.id});
        return res.status(200).send({problem});
    }catch(err){
        return res.status(500).send({message: err.message});
    }
}

exports.get_problems = async(req, res) =>{
    try{
        const problems = await Problem.find({user_created: req.userId});
        return res.status(200).send({problems});
    }catch(err){
        return res.status(500).send({message: err.message});
    }
}

exports.update_problem = async(req, res) =>{
    try{
        // validamos que el body tenga los campos correctos
        const { error } = problemSchema.validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }

        let problem = await Problem.findOneAndUpdate({id: req.params.id, user_created: req.userId}, req.body);
        return res.status(200).send({message: "Problem updated successfully" , problem: req.body});
    }catch(err){
        return res.status(500).send({message: err.message});
    }
}

exports.delete_problems = async(req, res) =>{
    try{
        await Problem.findOneAndDelete({id: req.params.id, user_created: req.userId});
        return res.status(200).send({message: "Problem deleted successfully" , id: req.params.id});
    }catch(err){
        return res.status(500).send({message: err.message});
    }
}