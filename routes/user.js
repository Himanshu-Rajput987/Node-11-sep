const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');

router.get('/users', (req, res)=>{
    usercontroller.getAllUsers(req, res);
})

//http://localhost:3000/user/5
router.get('/user/:id', (req, res)=>{
    usercontroller.getUser(req, res);
})

//http.//localhost:3000/delete/user/5
router.delete('/delete/user/:id', (req, res)=>{
    usercontroller.deleteUser(req, res);
})

module.exports = router;