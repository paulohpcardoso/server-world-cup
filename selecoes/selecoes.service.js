const config = require('config.json');
const jwt = require('jsonwebtoken');
const db = require('_helpers/db');

module.exports = { 
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.Selecao.findAll();
}

async function getById(id) {
    return await getSelecao(id);
}

async function create(params) {
    // validate
    if (await db.Selecao.findOne({ where: { name: params.name } })) {
        throw 'Name "' + params.name + '" is already taken';
    }

    // save selecao
    await db.Selecao.create(params);
}

async function update(id, params) {
    const selecao = await getSelecao(id);

    // validate
    const nameChanged = params.name && selecao.name !== params.name;
    if (nameChanged && await db.Selecao.findOne({ where: { name: params.name } })) {
        throw 'Name "' + params.name + '" is already taken';
    }

    // copy params to selecao and save
    Object.assign(selecao, params);
    await selecao.save();

    return selecao.get();
}

async function _delete(id) {
    const selecao = await getSelecao(id);
    await selecao.destroy();
}

async function getSelecao(id) {
    const selecao = await db.Selecao.findByPk(id);
    if (!selecao) throw 'Selecao not found';
    return selecao;
}