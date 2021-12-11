const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const eventoService = require('./eventos.service');

router.post('/register', authorize(), registerSchema, register);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.get('/partida/:partida', authorize(), getByPartida);
router.put('/:id', authorize(), updateSchema, update);
router.delete('/:id', authorize(), _delete);

module.exports = router;

function registerSchema(req, res, next) {
    const schema = Joi.object({
        type: Joi.string().min(3).max(255).required(),
        time: Joi.number().min(1).max(200).required(),
        partida: Joi.number().min(1).required(),
        jogador: Joi.number().min(1).required()
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    eventoService.create(req.body)
        .then(() => res.json({ message: 'Registration successful' }))
        .catch(next);
}

function getAll(req, res, next) {
    eventoService.getAll()
        .then(eventos => res.json(eventos))
        .catch(next);
}

function getById(req, res, next) {
    eventoService.getById(req.params.id)
        .then(evento => res.json(evento))
        .catch(next);
}

function getByPartida(req, res, next) {
    eventoService.getByPartida(req.params.partida)
        .then(eventos => res.json(eventos))
        .catch(next)
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        type: Joi.string().min(3).max(255).empty(''),
        time: Joi.number().min(1).max(200).empty(''),
        partida: Joi.number().min(1).empty(''),
        jogador: Joi.number().min(1).empty('')
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    eventoService.update(req.params.id, req.body)
        .then(evento => res.json(evento))
        .catch(next);
}

function _delete(req, res, next) {
    eventoService.delete(req.params.id)
        .then(() => res.json({ message: 'Evento deleted successfully' }))
        .catch(next);
}