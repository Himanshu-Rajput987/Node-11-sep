const express = require('express');
const router = express.Router();
router.use(express.json());
const usercontroller = require('../controllers/usercontroller');

router.get('/users', (req, res)=>{
    usercontroller.getAllUsers(req, res);
})

//http://localhost:3000/user/5
router.get('/user/:id', (req, res)=>{
    usercontroller.getUser(req, res);
})

//http://localhost:3000/add/user
router.post('/add/user', (req, res)=>{
    usercontroller.addUser(req, res);
})

module.exports = router;