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
    return await db.Estatistica.findAll();
}

async function getById(id) {
    return await getEstatistica(id);
}

async function getByPartida(partida) {
    return await db.Estatistica.findAll({ 
        where: { partida }
    });
}

async function create(params) {

    // validate
    if (await db.Estatistica.findOne({ 
        where: { partida: params.partida } 
    })) {
        throw 'Estatistica of match "' + params.partida + '" is already taken';
    }

    // save selecao
    await db.Estatistica.create(params);
}

async function update(id, params) {
    const estatistica = await getEstatistica(id);

    // validate
    const partidaChanged = 
        (params.partida && estatistica.partida !== params.partida);
    if (
        partidaChanged && 
        await db.Estatistica.findOne({ 
            where: { partida: params.partida }
        })
    ) {
        throw 'Estatistica of match "' + params.partida + '" is already taken';
    }

    // copy params to selecao and save
    Object.assign(estatistica, params);
    await estatistica.save();

    return estatistica.get();
}

async function _delete(id) {
    const estatistica = await getEstatistica(id);
    await estatistica.destroy();
}

async function getEstatistica(id) {
    const estatistica = await db.Estatistica.findByPk(id);
    if (!estatistica) throw 'Estatistica not found';
    return estatistica;
}