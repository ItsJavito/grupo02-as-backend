const {authJwt} = require('../middlewares');
const controller = require('../controllers/judge.controller');
const multer  = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

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

    app.post("/", upload.single('file') ,controller.create_submission);
}
