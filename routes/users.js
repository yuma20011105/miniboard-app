var express = require('express');
var router = express.Router();
const db=require('../models/index');

/* GET users listing. */
router.get('/',(req,res,next)=>{
  db.User.findAll().then(usrs=>{
    var data={
      title:'ユーザー一覧',
      content:usrs
    }
    res.render('users/index',data);
  });
});

router.get('/:userId',(req,res)=>{
  res.send(req.params)
});

module.exports = router;
