import * as express from 'express';
import * as R from 'ramda';
let router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) =>{
  res.send('respond with a resource');
});

module.exports = router;
