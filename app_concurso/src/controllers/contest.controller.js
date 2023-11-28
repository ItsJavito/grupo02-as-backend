const Contest = require('../models/Contest');
const { v4: uuidv4 } = require('uuid');
const Joi = require('joi');

const contestSchema = Joi.object({
    titulo: Joi.string().required(),
    descripcion: Joi.string().required(),
    fh_inicio: Joi.date().required(),
    fh_fin: Joi.date().required(),
    participant_limit: Joi.number().required(),
    problemas: Joi.array().items(Joi.object({
      id: Joi.string().required(),
      titulo: Joi.string().required(),
    })),
    participantes: Joi.array().items(Joi.string())
});

const problemSchema = Joi.object({
    id: Joi.string().required(),
    titulo: Joi.string().required(),
});

//* crear concurso
exports.create_contest = async (req, res) => {
    const { error } = contestSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { titulo, descripcion, fh_inicio, fh_fin, problemas, participantes, participant_limit } = req.body;
    const user_created = req.userId;

    const contest = new Contest({
        id: uuidv4(),
        titulo,
        descripcion,
        fh_inicio,
        fh_fin,
        user_created,
        problemas,
        participantes,
        participant_limit
    });

    try {
        const newContest = await contest.save();
        res.status(201).json(newContest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

//* concurso creado por el usuario
exports.get_contest = async (req, res) => {
    try {
        const contest = await Contest.findOne({ id: req.params.id , user_created: req.userId});
        res.status(200).json(contest);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

//* concursos creados por el usuario
exports.fetch_contests = async (req, res) => {
    try {

        const response = await Contest.find({ user_created: req.userId });
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
// * Get contests where user is participant
exports.get_participant_contests = async (req, res) => {
    try {
        const contests = await Contest.find({ participantes: req.userId });
        res.status(200).json(contests);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

//* actualizar concurso creado por el usuario
exports.update_contest = async (req, res) => {
    const { error } = contestSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { titulo, descripcion, fh_inicio, fh_fin, problemas, participantes, participant_limit } = req.body;
    const user_created = req.userId;

    const contest = {
        titulo,
        descripcion,
        fh_inicio,
        fh_fin,
        user_created,
        problemas,
        participantes,
        participant_limit
    };

    try {
        const updatedContest = await Contest.findOneAndUpdate({ id: req.params.id, user_created: req.userId }, contest, { new: true });
        res.status(200).json(updatedContest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

//* deliminar concurso creado por el usuario
exports.delete_contest = async (req, res) => {
    try {
        const contest = await Contest.findOneAndDelete({ id: req.params.id, user_created: req.userId });
        res.status(200).json(contest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

//* agregar participante a concurso 
exports.add_participant = async (req, res) => {
    try {
        const contest = await Contest.findOneAndUpdate(
            { id: req.params.id}, 
            { $push: { participantes: req.body.participante } }, 
            { new: true });
        res.status(200).json(contest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
//* eliminar participante de concurso
exports.delete_participant = async (req, res) => {
    try {
        const contest = await Contest.findOneAndUpdate(
            { id: req.params.id}, 
            { $pull: { participantes: req.body.participante } }, 
            { new: true });
        res.status(200).json(contest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

//* agregar preguntas de concurso
exports.add_problem = async (req, res) => {
    const {error} = problemSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    try {
        const contest = await Contest.findOneAndUpdate(
            { id: req.params.id}, 
            { $push: { problemas: req.body.problema } }, 
            { new: true });
        res.status(200).json(contest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}