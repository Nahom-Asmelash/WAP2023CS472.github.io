const express= require('express');
const userController= require('../controllers/userController')
const router=express.Router();

router.post('/',userController.validateUser)
router.get('/',userController.getAll)
module.exports = router;
