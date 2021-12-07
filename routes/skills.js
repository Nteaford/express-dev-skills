var express = require('express');
var router = express.Router();


//Require the Controller that exports the skills CRUD functions
const skillsCtrl = require('../controllers/skills');


 // All actual paths start with "/skills"

 
// GET "/skills" - Index Route
router.get('/', skillsCtrl.index);

//GET "/skills/new" - New Route
router.get('/new', skillsCtrl.new);


//POST "/skills/new" - Create Route
router.post('/', skillsCtrl.create);

//DELETE "/skills/:id"
router.delete('/:id', skillsCtrl.delete);

//GET "/skills/:id" - Show Route
router.get('/:id', skillsCtrl.show);

//EDIT "/skills/:id"
router.get('/:id/edit', skillsCtrl.edit);

//UPDATE CHANGES
router.put('/:id/', skillsCtrl.update);

module.exports = router;