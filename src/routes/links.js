const express = require("express");
const router =  express.Router();

const pool = require('../database');

const fire = require(('../firebase'));

router.get('/add', (req, res)=>{

    res.render('./links/add');

});

router.post('/add', (req, res)=>{

    
    const {title, url, description}  =    req.body;
    const newLink ={
        title,
        url,
        description
    };


    res.send('reseived');

})

module.exports = router;