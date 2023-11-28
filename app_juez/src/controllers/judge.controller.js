const Submission = require('../models/Submission');
const { spawn } = require('child_process');
const fs = require('fs');

exports.create_submission = async (req, res) => {
    // subir envio
    const file = req.file;
    const problem_id = req.params.id

    try {
        // obtener problema
        const problema = await Problema.findOne({ id: problem_id });
        // obtener casos de prueba
        const test_cases = problema.test_cases;
        fs.writeFileSync('programa.py', file.buffer.toString());

        for(let caso of test_cases){
            fs.writeFileSync('input.txt', caso.input);
            const python = spawn('python', ['programa.py'] , "input.txt");
            
            let scriptOutput = '';
            python.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
                scriptOutput += data;
            });
            
            let respuesta = '';
            process.on('close', (code) => {
                console.log(`child process exited with code ${code}`);
                if(scriptOutput === caso.output){
                    respuesta = 'AC';   
                }else{
                    respuesta = 'WA';
                }
            })
            if(respuesta === 'WA'){
                break;
            }
        }
        const submission = new Submission({
            id: uuidv4(),
            user: req.userId,
            problem: problem_id,
            file: file.buffer.toString(),
            result: respuesta
        });
        await submission.save();
        return res.status(201).json(submission);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}