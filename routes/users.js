var express = require('express');
var router = express.Router();
var session = require('express-session');
const authController=require('../controllers/AuthController');

router.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login-by-wallet',authController.loginByWallet);


module.exports = router;
