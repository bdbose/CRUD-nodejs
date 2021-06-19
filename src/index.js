const { Router } = require('express');
const createData = require('./controllers/createData');
const delData = require('./controllers/deleteData');
const getData = require('./controllers/getData');
const updateData = require('./controllers/updateData');

const router = Router();

router.post('/create', createData);
router.get('/get', getData);
router.put('/update', updateData);
router.delete('/delete/:id', delData);

module.exports = {
  routes: router,
};
