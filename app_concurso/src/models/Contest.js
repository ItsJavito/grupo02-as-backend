const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
  id: { type: String, required: true },
  Titulo: { type: String, required: true }
});

const ContestSchema = new mongoose.Schema({
  id: { type:String , required: true, unique: true },
  titulo: { type: String, required: true, unique: false },
  descripcion : { type: String, required: true, unique: true },
  fh_inicio: { type: Date, required: true, unique: false },
  fh_fin: { type: Date, required: true, unique: false },
  participant_limit:{ type: Number, required: true, unique: false },
  user_created: { type: String, required: true, unique: false },
  problemas: [ProblemSchema],
  participantes: [{ type: String, required: false, unique: false }]
});

const Contest = mongoose.model('Contest', ContestSchema);
module.exports = Contest;