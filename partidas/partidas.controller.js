const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const partidaService = require('./partidas.service');

router.post('/register', authorize(), registerSchema, register);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.get('/selecao/:selecao', authorize(), getBySelecao);
router.put('/:id', authorize(), updateSchema, update);
router.delete('/:id', authorize(), _delete);

module.exports = router;

function registerSchema(req, res, next) {
    const schema = Joi.object({
        sel1: Joi.string().min(3).max(3).required(),
        sel2: Joi.string().min(3).max(3).required(),
        group: Joi.string().min(1).max(1).required(),
        estadio: Joi.number().min(1).required(),
        goalsSel1: Joi.number(),
        goalsSel2: Joi.number(),
        quarterfinals: Joi.boolean(),
        semifinals: Joi.boolean(),
        final: Joi.boolean(),
        date: Joi.date(),
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    partidaService.create(req.body)
        .then(() => res.json({ message: 'Registration successful' }))
        .catch(next);
}

function getAll(req, res, next) {
    partidaService.getAll()
        .then(partidas => res.json(partidas))
        .catch(next);
}

function getById(req, res, next) {
    partidaService.getById(req.params.id)
        .then(partida => res.json(partida))
        .catch(next);
}

function getBySelecao(req, res, next) {
    partidaService.getBySelecao(req.params.selecao)
        .then(partidas => res.json(partidas))
        .catch(next)
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        sel1: Joi.string().min(3).max(3).empty(''),
        sel2: Joi.string().min(3).max(3).empty(''),
        group: Joi.string().min(1).max(1).empty(''),
        goalsSel1: Joi.number().empty(''),
        goalsSel2: Joi.number().empty(''),
        quarterfinals: Joi.boolean().empty(''),
        semifinals: Joi.boolean().empty(''),
        final: Joi.boolean().empty(''),
        date: Joi.date().empty(''),
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    partidaService.update(req.params.id, req.body)
        .then(partida => res.json(partida))
        .catch(next);
}

function _delete(req, res, next) {
    partidaService.delete(req.params.id)
        .then(() => res.json({ message: 'Partida deleted successfully' }))
        .catch(next);
}