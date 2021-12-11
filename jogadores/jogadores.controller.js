const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const jogadorService = require('./jogadores.service');

router.post('/register', authorize(), registerSchema, register);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.get('/selecao/:selecao', authorize(), getBySelecao);
router.put('/:id', authorize(), updateSchema, update);
router.delete('/:id', authorize(), _delete);

module.exports = router;

function registerSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(255).required(),
        selecao: Joi.string().min(3).max(3).required(),
        position: Joi.string().min(2).max(2).required(),
        number: Joi.number().min(1).max(99).required(),
        goals: Joi.number(),
        assists: Joi.number(),
        impediments: Joi.number(),
        yellowCards: Joi.number(),
        redCards: Joi.number(),
        defenses: Joi.number(),
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    jogadorService.create(req.body)
        .then(() => res.json({ message: 'Registration successful' }))
        .catch(next);
}

function getAll(req, res, next) {
    jogadorService.getAll()
        .then(jogadores => res.json(jogadores))
        .catch(next);
}

function getById(req, res, next) {
    jogadorService.getById(req.params.id)
        .then(jogador => res.json(jogador))
        .catch(next);
}

function getBySelecao(req, res, next) {
    jogadorService.getBySelecao(req.params.selecao)
        .then(jogadores => res.json(jogadores))
        .catch(next)
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(255).empty(''),
        selecao: Joi.string().min(3).max(3).empty(''),
        position: Joi.string().min(2).max(2).empty(''),
        number: Joi.number().min(1).max(99).empty(''),
        goals: Joi.number().empty(''),
        assists: Joi.number().empty(''),
        impediments: Joi.number().empty(''),
        yellowCards: Joi.number().empty(''),
        redCards: Joi.number().empty(''),
        defenses: Joi.number().empty(''),
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    jogadorService.update(req.params.id, req.body)
        .then(jogador => res.json(jogador))
        .catch(next);
}

function _delete(req, res, next) {
    jogadorService.delete(req.params.id)
        .then(() => res.json({ message: 'Jogador deleted successfully' }))
        .catch(next);
}