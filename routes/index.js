var express = require('express');
var router = express.Router();
const HomeController=require('../controllers/HomeController');

/* GET home page. */
router.get('/',HomeController.index);

router.get('/about-us',HomeController.newAboutUs);

router.get('/contact-us',HomeController.newContactUs);

router.get('/property',HomeController.newpropertyList);
router.get('/addProperty',HomeController.addProperty);
router.get('/propertyDetail',HomeController.propertyDetail);

module.exports = router;
