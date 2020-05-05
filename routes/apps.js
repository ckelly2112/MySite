const express = require('express');
const route = express.Router();

route.get('/', (req,res)=>{
    res.render('appProjects/appOverview');
})

route.get('/eatme', (req, res)=>{
    res.render('appProjects/eatMeOverview')
})

route.get('/eatMeSite', (req, res)=>{
    res.redirect('http://eatme-public.herokuapp.com')
})

module.exports = route;