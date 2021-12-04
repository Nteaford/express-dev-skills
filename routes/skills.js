var express = require('express');
var router = express.Router();


//Require the Controller that exports the skills CRUD functions
const skillsCtrl = require('../controllers/skills');


 // All actual paths start with "/skills"

 
// GET "/skills" - Index Route
router.get('/', skillsCtrl.index);

//GET "/skills/:id" - Show Route
router.get('/:id', skillsCtrl.show);

module.exports = router;