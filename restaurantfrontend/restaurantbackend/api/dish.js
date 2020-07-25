const express = require('express');
const router = express.Router();
const dishData = require('../models/dishModel');

router.get('/', (request, response) => {
    dishData.find()
    .then(dish =>{
        response.json(dish)
    })
    .catch(error => {
        response.json(error)
    })
})

router.post('/create', (request, response) => {
    const createdDish = new dishData({
        username:request.body.username,
        dishOrdered:request.body.dishOrdered,
        timeOrdered:request.body.timeOrdered,
        deliveryType:request.body.deliveryType
    })

    createdDish.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

router.get('/:id', (request, response) => {
    dishData.findById(request.params.id)
    .then(dish =>{
        response.json(dish)
    })
    .catch(error => {
        response.json(error)
    })
})

router.delete('/:id', (request, response) => {
    dishData.findById(request.params.id)
   .then(dish => {
       response.json(dish)
   })
   .catch(err => {
       response.json(err)
   })
})

router.post('/update/:id', (request, response) => {
    dishData.findById(request.params.id)
    .then(dish => {
        dish.username = request.body.username,
        dish.dishordered = request.body.dishordered,
        dish.timeordered = request.body.timeordered,
        dish.deliverytype = request.body.deliverytype
        dishData.save()
        .then(() => {
            response.json('Dish request updated.')
        })
        
        })
        .catch(error => {
            response.json(error)
    })
})

module.exports = router;