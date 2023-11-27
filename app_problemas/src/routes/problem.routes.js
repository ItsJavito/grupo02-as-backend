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

    app.post("/",controller.insert_problems);
    app.get("/", controller.get_problems);
    // añadir parmetro de id
    app.get("/:id", controller.get_problem);
    app.delete("/:id", controller.delete_problems);
    app.put("/:id", controller.update_problem);
}
