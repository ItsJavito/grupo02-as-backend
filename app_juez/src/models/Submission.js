const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  id: { type:String , required: true, unique: true },
  problem_id: { type:String , required: true },
  user_id: { type:String , required: true },
  language: { type:String , required: true },
  code: { type:String , required: true },
  verdict: { type:String , required: true },
  time: { type:Number , required: true },
  memory: { type:Number , required: true },
  length: { type:Number , required: true },
});

const Submission = mongoose.model('Submission', SubmissionSchema);
module.exports = Submission;