const mongoose = require('mongoose');

const TestCaseSchema = new mongoose.Schema({
  entrada: { type: String, required: true },
  salida: { type: String, required: true }
});

const ProblemSchema = new mongoose.Schema({
  id: { type:String , required: true, unique: true },
  titulo: { type: String, required: true, unique: false },
  descripcion : { type: String, required: true, unique: false },
  user_created: { type: String, required: true, unique: false }, 
  casos_prueba: [TestCaseSchema]
});

const Problem= mongoose.model('Problem', ProblemSchema);
module.exports = Problem;