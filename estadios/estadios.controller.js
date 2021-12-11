const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const estadiosService = require('./estadios.service');

router.post('/register', authorize(), registerSchema, register);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.put('/:id', authorize(), updateSchema, update);
router.delete('/:id', authorize(), _delete);

module.exports = router;

function registerSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(255).required(),
        city: Joi.string().min(3).max(255).required(),
        url: Joi.string().required(),
        zipcode: Joi.string().min(8).max(8).required(),
        capacity: Joi.number().min(1).max(200000).required(),
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    estadiosService.create(req.body)
        .then(() => res.json({ message: 'Registration successful' }))
        .catch(next);
}

function getAll(req, res, next) {
    estadiosService.getAll()
        .then(estadios => res.json(estadios))
        .catch(next);
}

function getById(req, res, next) {
    estadiosService.getById(req.params.id)
        .then(jogador => res.json(jogador))
        .catch(next);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(255).empty(''),
        city: Joi.string().min(3).max(255).empty(''),
        url: Joi.string().empty(''),
        zipcode: Joi.string().min(8).max(8).empty(''),
        capacity: Joi.number().min(1).max(200000).empty(''),
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    estadiosService.update(req.params.id, req.body)
        .then(estadio => res.json(estadio))
        .catch(next);
}

function _delete(req, res, next) {
    estadiosService.delete(req.params.id)
        .then(() => res.json({ message: 'Estadio deleted successfully' }))
        .catch(next);
}