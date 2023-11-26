const mongoose = require('mongoose');

const TestCaseSchema = new mongoose.Schema({
  entrada: { type: String, required: true },
  salida: { type: String, required: true }
});

const ProblemSchema = new mongoose.Schema({
  id: { type:String , required: true, unique: true },
  titulo: { type: String, required: true, unique: false },
  descripcion : { type: String, required: true, unique: true },
  casos_prueba: [TestCaseSchema]
});

const User = mongoose.model('Problem', ProblemSchema);
module.exports = User;