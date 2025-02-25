var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
  res.send('respond' );
});


router.get('/:id', (req, res, next) => {
    res.send('respond' );
  });



  router.post('/', (req, res, next) => {
    res.send('respond' );
  });




  router.put('/:id', (req, res, next) => {
    res.send('respond' );
  });




  router.delete('/:id', (req, res, next) => {
    res.send('respond' );
  });



module.exports = router;
