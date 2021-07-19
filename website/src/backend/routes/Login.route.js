module.exports = app => {
    const login = require('../controllers/login.controller.js');

    let router = require('express').Router();

    router.post('/', login.create);
    router.get('/', login.findAll);
    router.get('/:id', login.findOne);
    router.put('/:id', login.update);
    router.delete('/:id', login.delete);
    router.delete('/', login.deleteAll);

    app.use('/login', router);
};
