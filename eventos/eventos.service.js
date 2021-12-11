const config = require('config.json');
const jwt = require('jsonwebtoken');
const db = require('_helpers/db');
const { Op } = require('sequelize');

module.exports = { 
    getAll,
    getById,
    getByPartida,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.Evento.findAll();
}

async function getById(id) {
    return await getEvento(id);
}

async function getByPartida(partida) {
    return await db.Evento.findAll({ 
        where: { partida }
    });
}

async function create(params) {

    // validate
    if (await db.Evento.findOne({ 
        where: { 
            [Op.and]: [
                { type: params.type },
                { partida: params.partida },
                { jogador: params.jogador }
            ] 
        } 
    })) {
        throw 'Evento "' + params.type + '" in "' + params.partida + '" by "' + params.jogador + '" is already taken';
    }

    // save selecao
    await db.Evento.create(params);
}

async function update(id, params) {
    const evento = await getEvento(id);

    // validate
    const typeChanged = 
        (params.type && evento.type !== params.type);
    if (
        typeChanged && 
        await db.Evento.findOne({ 
            where: { 
                [Op.and]: [
                    { type: params.type },
                    { partida: params.partida },
                    { jogador: params.jogador }
                ] 
            }
        })
    ) {
        throw 'Evento "' + params.type + '" in "' + params.partida + '" by "' + params.jogador + '" is already taken';
    }

    // copy params to selecao and save
    Object.assign(evento, params);
    await evento.save();

    return evento.get();
}

async function _delete(id) {
    const evento = await getEvento(id);
    await evento.destroy();
}

async function getEvento(id) {
    const evento = await db.Evento.findByPk(id);
    if (!evento) throw 'Evento not found';
    return evento;
}