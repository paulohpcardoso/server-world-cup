const config = require('config.json');
const jwt = require('jsonwebtoken');
const db = require('_helpers/db');
const { Op } = require('sequelize');

module.exports = { 
    getAll,
    getById,
    getBySelecao,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.Partida.findAll();
}

async function getById(id) {
    return await getPartida(id);
}

async function getBySelecao(selecao) {
    return await db.Partida.findAll({ 
        where: { 
            [Op.or]: [
                { sel1: selecao },
                { sel2: selecao }
            ]
        }
    });
}

async function create(params) {

    if (params.date === undefined) {
        params.date = new Date();
    }

    // validate
    if (await db.Partida.findOne({ 
        where: { 
            [Op.and]: [
                { sel1: params.sel1 },
                { sel2: params.sel2 },
                { date: params.date }
            ] 
        } 
    })) {
        throw 'Match "' + params.sel1 + '" x "' + params.sel2 + '" is already taken';
    }

    // save selecao
    await db.Partida.create(params);
}

async function update(id, params) {
    const partida = await getPartida(id);

    // validate
    const selChanged = 
        (params.sel1 && partida.sel1 !== params.sel1) ||
        (params.sel2 && partida.sel2 !== params.sel2);
    if (
        selChanged && 
        await db.Partida.findOne({ 
            where: { 
                [Op.and]: [
                    { sel1: params.sel1 },
                    { sel2: params.sel2 },
                    { date: params.date }
                ] 
            }
        })
    ) {
        throw 'match "' + params.sel1 + '" x "' + params.sel2 + '" is already taken';
    }

    // copy params to selecao and save
    Object.assign(partida, params);
    await partida.save();

    return partida.get();
}

async function _delete(id) {
    const partida = await getPartida(id);
    await partida.destroy();
}

async function getPartida(id) {
    const partida = await db.Partida.findByPk(id);
    if (!partida) throw 'Partida not found';
    return partida;
}