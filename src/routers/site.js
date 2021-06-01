const  express = require('express');
const  router = express.Router();
//code

const siteController = require('../app/controllers/SiteController')


router.use('/search',siteController.search)

router.use('/',siteController.index)


module.exports = router;