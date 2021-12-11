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
    return await db.Jogador.findAll();
}

async function getById(id) {
    return await getJogador(id);
}

async function getBySelecao(selecao) {
    return await db.Jogador.findAll({ 
        where: { selecao }
    })
}

async function create(params) {
    // validate
    if (await db.Jogador.findOne({ 
        where: { 
            [Op.and]: [
                { name: params.name },
                { selecao: params.selecao }
            ] 
        } 
    })) {
        throw 'Name "' + params.name + '" for "' + params.selecao + '" is already taken';
    }

    // save selecao
    await db.Jogador.create(params);
}

async function update(id, params) {
    const jogador = await getJogador(id);

    // validate
    const nameChanged = params.name && jogador.name !== params.name;
    if (
        nameChanged && 
        await db.Jogador.findOne({ 
            where: { 
                [Op.and]: [
                    { name: params.name },
                    { selecao: params.selecao }
                ] 
            }
        })
    ) {
        throw 'Name "' + params.name + '" for "' + params.selecao + '" is already taken';
    }

    // copy params to selecao and save
    Object.assign(jogador, params);
    await jogador.save();

    return jogador.get();
}

async function _delete(id) {
    const jogador = await getJogador(id);
    await jogador.destroy();
}

async function getJogador(id) {
    const jogador = await db.Jogador.findByPk(id);
    if (!jogador) throw 'Jogador not found';
    return jogador;
}