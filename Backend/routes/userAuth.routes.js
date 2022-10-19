const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserAuthModel = require('../models/userauth.model');



const authController = express.Router();

authController.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 6, async function (err, hash) {
        if (err) {
            res.send('Please try again')
        }
        const Auth = new UserAuthModel({
            name,
            email,
            password: hash
        })
        await Auth.save();
        res.send('Registered');
    })
})


authController.post('/login', async (req, res) => {
    const { name, email, password } = req.body;
    const auth = await UserAuthModel.findOne({ email });
    if (!auth) {
        return res.send('Invalid Credentials');
    }
    const hash = auth.password;
    const authId = auth._id;
    bcrypt.compare(password, hash, function (err, result) {
        if (result) {
            let token = jwt.sign({ name, email, authId }, 'secret');
            return res.send({ 'message': 'LOGIN SUCCESSFULL', 'token': token });
        }
        else {
            return res.send('INVALID CREDENTIALS');
        }
    })
})


module.exports = authController;