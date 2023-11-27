const {authJwt} = require('../middlewares');
const controller = require('../controllers/submission.controller');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers", 
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    // middleware de token de autenticación 
    app.use(authJwt.verifyToken)

    //! endpoints

    app.post("/concurso",controller.create_contest);
    app.get("/concurso/:id", controller.get_contest);
    app.get("/concurso/all", controller.get_contests);
    app.get("/concurso", controller.get_participant_contests);
    app.put("/concurso/:id", controller.update_contest);
    app.delete("/concurso/:id", controller.delete_contest);
    app.post("/concurso/participant/:id", controller.add_participant);
    app.delete("/concurso/participant/:id", controller.delete_participant);
    app.get("/concurso/problem/:id", controller.add_problem);
}
