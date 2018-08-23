import * as express from 'express';
import * as R from 'ramda';
import * as Services from '../service/services.js';
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200).send("Welcome to MasterMind!");
});

router.post('/save', (req, res, next) => {
    return Services.saveDataToPravateBc(req,res,next);
});
router.get('/load', (req, res, next) => {
  res.status(200).send("Load!");
});
module.exports = router;
