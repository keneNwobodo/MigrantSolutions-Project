const express = require('express');
const router = express.Router();
const customerData = require('../models/customerModel');
const { models } = require('mongoose');

router.get('/', (request, response) => {
    customerData.find()
    .then(customers => {
        response.json(customers)
    })

    .catch(error =>{
        response.json(error)
    })
})

router.post('/signup', (request, response) => {
    const signupCustomer = new customerData({
        username:request.body.username,
        fullname:request.body.fullname,
        password:request.body.password,
        email:request.body.email,
        address:request.body.address
    })
    signupCustomer.save()
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})
module.exports = router;