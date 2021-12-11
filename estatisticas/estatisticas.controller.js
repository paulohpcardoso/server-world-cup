const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const estatisticaService = require('./estatisticas.service');

router.post('/register', authorize(), registerSchema, register);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.get('/partida/:partida', authorize(), getByPartida);
router.put('/:id', authorize(), updateSchema, update);
router.delete('/:id', authorize(), _delete);

module.exports = router;

function registerSchema(req, res, next) {
    const schema = Joi.object({
        partida: Joi.number().min(1).required(),
        kicksSel1: Joi.number(),
        kicksGoalSel1: Joi.number(),
        ballPossessionSel1: Joi.number(),
        passesSel1: Joi.number(),
        wrongPassesSel1: Joi.number(),
        faultsSel1: Joi.number(),
        yellowCardsSel1: Joi.number(),
        redCardsSel1: Joi.number(),
        impedimentsSel1: Joi.number(),
        cornersSel1: Joi.number(),
        kicksSel2: Joi.number(),
        kicksGoalSel2: Joi.number(),
        ballPossessionSel2: Joi.number(),
        passesSel2: Joi.number(),
        wrongPassesSel2: Joi.number(),
        faultsSel2: Joi.number(),
        yellowCardsSel2: Joi.number(),
        redCardsSel2: Joi.number(),
        impedimentsSel2: Joi.number(),
        cornersSel2: Joi.number(),
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    estatisticaService.create(req.body)
        .then(() => res.json({ message: 'Registration successful' }))
        .catch(next);
}

function getAll(req, res, next) {
    estatisticaService.getAll()
        .then(estatistica => res.json(estatistica))
        .catch(next);
}

function getById(req, res, next) {
    estatisticaService.getById(req.params.id)
        .then(estatistica => res.json(estatistica))
        .catch(next);
}

function getByPartida(req, res, next) {
    estatisticaService.getByPartida(req.params.partida)
        .then(estatisticas => res.json(estatisticas))
        .catch(next)
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        partida: Joi.number().min(1).empty(''),
        kicksSel1: Joi.number().empty(''),
        kicksGoalSel1: Joi.number().empty(''),
        ballPossessionSel1: Joi.number().empty(''),
        passesSel1: Joi.number().empty(''),
        wrongPassesSel1: Joi.number().empty(''),
        faultsSel1: Joi.number().empty(''),
        yellowCardsSel1: Joi.number().empty(''),
        redCardsSel1: Joi.number().empty(''),
        impedimentsSel1: Joi.number().empty(''),
        cornersSel1: Joi.number().empty(''),
        kicksSel2: Joi.number().empty(''),
        kicksGoalSel2: Joi.number().empty(''),
        ballPossessionSel2: Joi.number().empty(''),
        passesSel2: Joi.number().empty(''),
        wrongPassesSel2: Joi.number().empty(''),
        faultsSel2: Joi.number().empty(''),
        yellowCardsSel2: Joi.number().empty(''),
        redCardsSel2: Joi.number().empty(''),
        impedimentsSel2: Joi.number().empty(''),
        cornersSel2: Joi.number().empty(''),
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    estatisticaService.update(req.params.id, req.body)
        .then(estatistica => res.json(estatistica))
        .catch(next);
}

function _delete(req, res, next) {
    estatisticaService.delete(req.params.id)
        .then(() => res.json({ message: 'Estatistica deleted successfully' }))
        .catch(next);
}