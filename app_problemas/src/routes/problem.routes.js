const {authJwt} = require('../middlewares');
const controller = require('../controllers/problem.controller');

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

    app.post("/problemas",controller.insert_problems);
    app.get("/problemas", controller.get_problems);
    // añadir parmetro de id
    app.get("/problemas/:id", controller.get_problem);
    app.delete("/problemas/:id", controller.delete_problems);
    app.put("/problemas/:id", controller.update_problem);
}
