// Base de datos
// Instancia de la base de datos
var dataBase = require('../services/dataBaseService');
var mongoose = require('mongoose');

function pruebaDataBase(req, res) {
    res.status(200).send({ msg: 'Controlador de base de datos funcionando' })
}

function searchCollection(req, res) {
    // 1. Pagina inicial
    let page = 1;
    if (req.params.page) page = req.params.page;
    // 2. Items por pagina
    let itemsPerPage = 10;
    if (req.body.itemsPerPage) itemsPerPage = Number(req.body.itemsPerPage)
    // 3. Validar si viene una coleccion
    if (!req.params.collection) return res.status(500).send({
        estadoRespuesta: 'ERROR',
        msg: 'Seleccione una coleccion'
    })
    // 4. Validar si existe la coleccion en la base de datos
    var coleccionValidada = validateCollection(req.params.collection);

    dataBase.findCollectionSortPaginate({}, coleccionValidada.collection, '', page, itemsPerPage, { __v: 0 })
        .then(dataBaseResp => {
            return res.status(200).send({
                estadoRespuesta: 'OK',
                msg: 'Coleccion encontrada',
                items: dataBaseResp.numeroItems,
                paginas: Math.ceil(dataBaseResp.numeroItems / itemsPerPage),
                paginaActual: page,
                colecionActual: req.params.collection,
                menuTabla: coleccionValidada.menu,
                data: dataBaseResp.data
            })
        })
        .catch(err => {
            return res.status(err.code).send({
                estadoRespuesta: 'ERROR',
                msg: `${err.dataBaseMsg}`
            })
        })
}

function validateCollection(collectionFront) {
    let collection = null;
    let menu = ['id'];
    for (const prop in mongoose.models) {
        if (prop === collectionFront) {
            collection = mongoose.models[prop];
            for (const name in mongoose.modelSchemas[prop].obj) {
                menu.push(name);
            }
        }
    }
    return {
        collection: collection,
        menu: menu
    }
}

function searchCollections(req, res) {
    let collections = [];
    for (const prop in mongoose.modelSchemas) {
        collections.push(prop);
    }
    res.status(200).send({
        estadoRespuesta: 'OK',
        msg: 'Colleciones actuales en la base de datos',
        data: collections
    });
}

function searchIdOnCollection(req, res) {
    let id = req.params.id;
    var coleccionValidada = validateCollection(req.params.collection).collection;
    dataBase.findByIdCollection({ _id: id }, coleccionValidada).then(resp => {
        return res.status(200).send({
            estadoRespuesta: 'OK',
            msg: 'Objeto encontrado',
            data: resp.data
        })
    })
        .catch(error => {
            return res.status(500).send({
                estadoRespuesta: 'ERROR',
                msg: 'No hay datos para el id seleccionado'
            })
        })

}

function removeDataCollection(req, res) {
    var coleccionValidada = validateCollection(req.params.collection).collection;
        dataBase.findAndRemovedCollection({}, coleccionValidada).then(resp2 => {
            return res.status(200).send({
                estadoRespuesta: 'OK',
                msg: `Datos en la colección ${type} eliminados`, data: resp2.data
            })
        })
            .catch(error => {
                return res.status(500).send({
                    estadoRespuesta: 'ERROR',
                    msg: `Error eliminando los datos en la colección ${type}`
                })
            })
}

function removeIdOnCollection(req, res) {
    var coleccionValidada = validateCollection(req.params.collection).collection;
    dataBase.removeIdOnCollection({ _id: req.params.id }, coleccionValidada).then(resp2 => {
        return res.status(200).send({
            estadoRespuesta: 'OK',
            msg: `Objeto ${id} eliminado en la colección ${type}`,
            data: resp2.data
        })
    })
        .catch(error => {
            return res.status(500).send({
                estadoRespuesta: 'ERROR',
                msg: `Error eliminando el objeto con id ${id} en la colección ${type}`
            })
        })
}


module.exports = {
    pruebaDataBase,
    searchCollection,
    searchCollections,
    searchIdOnCollection,
    removeDataCollection,
    removeIdOnCollection
}
