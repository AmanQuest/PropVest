var express = require('express');
var router = express.Router();
var session = require('express-session');
const HomeController=require('../controllers/HomeController');
const authuser=require('../middleware/authuser');

router.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

/* GET home page. */
router.get('/',authuser, HomeController.index);

router.get('/about-us',HomeController.newAboutUs);

router.get('/contact-us',HomeController.newContactUs);

router.get('/property',HomeController.newpropertyList);

router.get('/addProperty',HomeController.addProperty);

router.get('/propertyDetail',HomeController.propertyDetail);

router.get('/transactions',HomeController.NewtransactionHistory);

router.post('/sale-nft',HomeController.addOrder);

module.exports = router;
