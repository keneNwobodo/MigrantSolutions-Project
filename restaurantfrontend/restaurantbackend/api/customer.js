const express = require('express');
const router = express.Router();
const customerData = require('../models/customerModel');
const { models } = require('mongoose');
const {signupChecks} = require("../authValidation");

router.get('/', (request, response) => {
    customerData.find()
    .then(customers => {
        response.json(customers)
    })

    .catch(error =>{
        response.json(error)
    })
})

router.post('/signup', async (request, response) => {
  const {error} = signupChecks(request.body)
  if (error){
      return response.status(400).send(error.details[0].message)
  }
  const existingEmail = await customerData.findOne({
      email: request.body.email
  }) 
  
  if(!existingEmail) {
      return response.status(400).send("Email not found")
  }

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