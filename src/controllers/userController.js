const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cryptoJS = require('crypto-js');

const userModel = mongoose.model('todo.user');
const todoModel = mongoose.model('todo.todo');

module.exports = {
    async registerNewUser(req, res) {
        const duplicateEmail = await userModel.find({
            'email': req.email
        });
        if(duplicateEmail && duplicateEmail.length > 0) {
            res.status(500).json({title: "There is already a client registered with this email"});
            return;
        }
        req.body.password = cryptoJS.SHA512(req.body.password);
        req.body.password = cryptoJS.enc.Base64.stringify(req.body.password);
        const newUser = await userModel.create(req.body);
        res.status(200).json(newUser);
    },

    async login(req, res) {
        let token = jwt.sign(req.params, 'aCcEsSECretK3y!', {expiresIn: 7200000});
        if(!token) {
            res.status(500).json({title: 'It was not possible to register your token please make contact with the support team'});
            return;
        }
        let user = await userModel.findOneAndUpdate({
            'email': req.params.email
        }, {
            $set: {
                'token': token
            }
        });
        if(!user) {
            res.status(500).json({title: 'There is no user registered with this email'});
            return;
        }
        req.params.password = cryptoJS.SHA512(req.params.password);
        req.params.password = cryptoJS.enc.Base64.stringify(req.params.password);
        if(req.params.password !== user.password) {
            res.status(500).json({title: 'The password is incorrect'});
            return;
        }
        let clientTodos = await todoModel.find({
            'userId': user._id
        });
        if(clientTodos && clientTodos.length > 0) {
            res.status(200).json({todo: clientTodos, token: token, userId: user._id});
        }
        else {
            res.status(200).json({token: token, userId: user._id});
        }
    }
}