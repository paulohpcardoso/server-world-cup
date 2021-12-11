const db = require('_helpers/db');
const { Op } = require('sequelize');

module.exports = { 
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.Estadio.findAll();
}

async function getById(id) {
    return await getEstadio(id);
}

async function create(params) {
    // validate
    if (await db.Estadio.findOne({ where: { name: params.name } })) {
        throw 'Name "' + params.name + '" is already taken';
    }

    // save estadio
    await db.Estadio.create(params);
}

async function update(id, params) {
    const estadio = await getEstadio(id);

    // validate
    const nameChanged = params.name && estadio.name !== params.name;
    if (nameChanged && await db.Jogador.findOne({ where: { name: params.name }})) {
        throw 'Name "' + params.name + '" is already taken';
    }

    // copy params to estadio and save
    Object.assign(estadio, params);
    await estadio.save();

    return estadio.get();
}

async function _delete(id) {
    const estadio = await getEstadio(id);
    await estadio.destroy();
}

async function getEstadio(id) {
    const estadio = await db.Estadio.findByPk(id);
    if (!estadio) throw 'Estadio not found';
    return estadio;
}