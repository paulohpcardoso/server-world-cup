const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const selecaoService = require('./selecoes.service');

router.post('/register', authorize(), registerSchema, register);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.put('/:id', authorize(), updateSchema, update);
router.delete('/:id', authorize(), _delete);

module.exports = router;

function registerSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(3).required(),
        group: Joi.string().min(1).max(1).required(),
        points: Joi.number(),
        goalsPro: Joi.number(),
        goalsTaken: Joi.number(),
        yellowCards: Joi.number(),
        redCards: Joi.number(),
        victories: Joi.number(),
        draws: Joi.number(),
        defeats: Joi.number(),
        quarterfinals: Joi.boolean(),
        semifinals: Joi.boolean(),
        final: Joi.boolean(),
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    selecaoService.create(req.body)
        .then(() => res.json({ message: 'Registration successful' }))
        .catch(next);
}

function getAll(req, res, next) {
    selecaoService.getAll()
        .then(selecoes => res.json(selecoes))
        .catch(next);
}

function getById(req, res, next) {
    selecaoService.getById(req.params.id)
        .then(selecao => res.json(selecao))
        .catch(next);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(3).empty(''),
        group: Joi.string().min(1).max(1).empty(''),
        points: Joi.number().empty(''),
        goalsPro: Joi.number().empty(''),
        goalsTaken: Joi.number().empty(''),
        yellowCards: Joi.number().empty(''),
        redCards: Joi.number().empty(''),
        victories: Joi.number().empty(''),
        draws: Joi.number().empty(''),
        defeats: Joi.number().empty(''),
        quarterfinals: Joi.boolean().empty(''),
        semifinals: Joi.boolean().empty(''),
        final: Joi.boolean().empty(''),
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    selecaoService.update(req.params.id, req.body)
        .then(selecao => res.json(selecao))
        .catch(next);
}

function _delete(req, res, next) {
    selecaoService.delete(req.params.id)
        .then(() => res.json({ message: 'Selecao deleted successfully' }))
        .catch(next);
}