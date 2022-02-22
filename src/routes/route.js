
const express = require('express');
const router = express.Router();
const obj=require('../logger/logger.js')
const helper =require("../util/helper")
const formatter= require("../validator/formatter")
const lod = require("../lodashMod/lod")




router.get('/test-me', function (req, res) {
     obj.welcome()
    res.send('My first ever api!')
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo()
    formatter.trim()
    formatter.changetoLowerCase()
    formatter.changetoUpperCase()
});

router.get("/hello", function(req, res){
    res.send("hello world")
    console.log(lod.arrSpliter())
    console.log(lod.giveTail())
    console.log(lod.arrUnion())
    console.log(lod.getPairs())

})



module.exports = router;