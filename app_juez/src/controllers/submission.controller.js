const Submission = require('../models/Submission');
const Problema = require('../models/Problem');
const { v4: uuidv4 } = require('uuid');
const Joi = require('joi');

exports.create_submission = async (req, res) => {
    // subir envio
    const { body } = req;
    const schema = Joi.object({
        contest_id: Joi.string().required(),
        problem_id: Joi.string().required(),
        user_id: Joi.string().required(),
        language: Joi.string().required(),
        code: Joi.string().required(),
    });
    try {
        await schema.validateAsync(body);
        const submission = new Submission({
            id: uuidv4(),
            contest_id: body.contest_id,
            problem_id: body.problem_id,
            user_id: body.user_id,
            language: body.language,
            code: body.code,
        });
        await submission.save();
        // obtener problema
        const problema = await Problema.findOne({ id: body.problem_id });
        // obtener casos de prueba
        const casos_prueba = problema.casos_prueba;
        // mandar a calificar 


        res.status(201).json(submission);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}