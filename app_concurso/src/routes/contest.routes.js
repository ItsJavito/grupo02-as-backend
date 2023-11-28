const {authJwt} = require('../middlewares');
const controller = require('../controllers/contest.controller');

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

    app.post("/",controller.create_contest);
    // get
    app.get("/", controller.get_participant_contests);
    app.get("/all", controller.fetch_contests);
    app.get("/:id", controller.get_contest);
    // put
    app.put("/:id", controller.update_contest);
    // delete
    app.delete("/:id", controller.delete_contest);
    app.post("/participant/:id", controller.add_participant);
    app.delete("/participant/:id", controller.delete_participant);
    app.post("/problem/:id", controller.add_problem);
}
