/*Llamados a la base de datos
PARAMETROS DE BUSQUEDA
data: son los datos que se van a guardar, buscar, borrar o actualizar
collection: coleccion en la que voy a operar
id: el id del objeto que voy a buscar en la coleccion 
by: el campo por el que voy a ordenar
page: numero de pagina
itemsPerPAge: items que voy a mandar por pagina 
populateData: los campos que voy a popular
dataOr: 
filter:
*/

// Libreria para la paginación
var mongoosePagination = require('mongoose-pagination');
// Guardar 
function saveCollection(data) {
    return new Promise((resolve, reject) => {
        data.save((err, dataBaseResp) => {
            if (err) return reject({ code: 500, dataBaseMsg: 'Error data base' })
            if (!dataBaseResp) reject({ code: 404, dataBaseMsg: 'Error data base' })
            return resolve({ code: 200, dataBaseMsg: 'Objeto creado', data: dataBaseResp })
        })
    })
}
//Buscar un id en una colleccion
function findOneCollection(data, collection, selectData) {
    return new Promise((resolve, reject) => {
        collection.findOne(data).select(selectData).exec((err, dataBaseResp) => {
            if (err) return reject({ code: 500, dataBaseMsg: 'Error data base' })
            if (!dataBaseResp) reject({ code: 404, dataBaseMsg: 'Error data base' })
            return resolve({ code: 200, data: dataBaseResp })
        })
    })
}
//Buscar en colleccion
function findCollection(data, collection) {
    return new Promise((resolve, reject) => {
        collection.find(data).select({ '__v': 0 }).exec((err, dataBaseResp) => {
            if (err) return reject({ code: 500, dataBaseMsg: 'Error data base' })
            if (!dataBaseResp) reject({ code: 404, dataBaseMsg: 'Error data base' })
            return resolve({ code: 200, data: dataBaseResp })
        })
    })
}
//Buscar con varias condiciones en data
function findOrCollection(data, collection, dataOr, filter) {
    return new Promise((resolve, reject) => {
        collection.find(data, filter).or(dataOr).exec((err, dataBaseResp) => {
            if (err) return reject({ code: 500, dataBaseMsg: 'Error data base' })
            if (!dataBaseResp) reject({ code: 404, dataBaseMsg: 'Error data base' })
            return resolve({ code: 200, data: dataBaseResp })
        })
    })
}

//Buscar en coleccion ordenado y paginado
function findCollectionSortPaginate(data, collection, by, page, itemsPerPAge, selectData) {
    return new Promise((resolve, reject) => {
        collection.find(data).select(selectData).sort(by).paginate(page, itemsPerPAge, (err, dataBaseResp, totalItems) => {
            if (err) return reject({ code: 500, dataBaseMsg: 'Error data base' })
            if (!dataBaseResp) reject({ code: 404, dataBaseMsg: 'Error data base' })
            return resolve({ code: 200, data: dataBaseResp, numeroItems: totalItems })
        })
    })
}

function findCollectionOrSortPaginate(data, collection, by, page, itemsPerPAge, selectData) {
    return new Promise((resolve, reject) => {
        collection.find({}).or(data).select(selectData).sort(by).paginate(page, itemsPerPAge, (err, dataBaseResp, totalItems) => {
            if (err) return reject({ code: 500, dataBaseMsg: 'Error data base' })
            if (!dataBaseResp) reject({ code: 404, dataBaseMsg: 'Error data base' })
            return resolve({ code: 200, data: dataBaseResp, numeroItems: totalItems })
        })
    })
}

function findCollectionPopulate(data, collection, populateData) {
    return new Promise((resolve, reject) => {
        collection.find(data).populate(populateData).exec((err, dataBaseResp) => {
            if (err) return reject({ code: 500, dataBaseMsg: 'Error data base' })
            if (!dataBaseResp) reject({ code: 404, dataBaseMsg: 'Error data base' })
            return resolve({ code: 200, data: dataBaseResp })
        })
    })
}
//Buscar en coleccion populado y paginado
function findCollectionSortPopulatePaginate(data, collection, by, populateData, page, itemsPerPAge) {
    return new Promise((resolve, reject) => {
        collection.find(data).sort(by).populate(populateData).paginate(page, itemsPerPAge, (err, dataBaseResp, totalItems) => {
            if (err) return reject({ code: 500, dataBaseMsg: 'Error data base' })
            if (!dataBaseResp) reject({ code: 404, dataBaseMsg: 'Error data base' })
            return resolve({ code: 200, data: dataBaseResp, numeroItems: totalItems })
        })
    })
}

function findCollectionPopulatePaginate(data, collection, populateData, page, itemsPerPAge, filter) {
    return new Promise((resolve, reject) => {
        collection.find(data).populate(populateData,filter).paginate(page, itemsPerPAge, (err, dataBaseResp, totalItems) => {
            if (err) return reject({ code: 500, dataBaseMsg: 'Error data base' })
            if (!dataBaseResp) reject({ code: 404, dataBaseMsg: 'Error data base' })
            return resolve({ code: 200, data: dataBaseResp, numeroItems: totalItems })
        })
    })
}
//Buscar un id en una colleccion
function findByIdCollection(id, collection) {
    return new Promise((resolve, reject) => {
        collection.findById(id).select({ '__v': 0 }).exec((err, dataBaseResp) => {
            if (err) return reject({ code: 500, dataBaseMsg: 'Error data base' })
            if (!dataBaseResp) reject({ code: 404, dataBaseMsg: 'Error data base' })
            return resolve({ code: 200, data: dataBaseResp })
        })
    })
}
//Contar en una colleccion
function countCollection(data, collection) {
    return new Promise((resolve, reject) => {
        collection.count(data).exec((err, dataBaseResp) => {
            if (err) return reject({ code: 500, dataBaseMsg: 'Error data base' })
            if (!dataBaseResp) return resolve({ code: 200, data: 0 })
            return resolve({ code: 200, data: dataBaseResp })
        })
    })
}
//Actualizar id en una coleccion
function updateIdOnCollection(id, data, collection) {
    return new Promise((resolve, reject) => {
        collection.findByIdAndUpdate(id, data, (err, dataBaseResp) => {
            if (err) return reject({ code: 500, dataBaseMsg: 'Error data base' })
            if (!dataBaseResp) reject({ code: 404, dataBaseMsg: 'Error data base' })
            return resolve({ code: 200, data: data })
        })
    })
}
//Borrar id en una coleccion
function removeIdOnCollection(id, collection) {
    return new Promise((resolve, reject) => {
        collection.findByIdAndRemove(id, (err, dataBaseResp) => {
            if (err) return reject({ code: 500, dataBaseMsg: 'Error data base' })
            if (!dataBaseResp) reject({ code: 404, dataBaseMsg: 'Error data base' })
            return resolve({ code: 200, data: dataBaseResp })
        })
    })
}
//Buscar y borrar todos
function findAndRemovedCollection(data, collection) {
    return new Promise((resolve, reject) => {
        collection.find(data).remove(err => {
            if (err) return reject({ code: 500, dataBaseMsg: 'Error data base' })
            return resolve({ code: 200, dataBaseMsg: 'Objeto u objetos eliminados' });
        })
    })
}

module.exports = {
    saveCollection,
    findOneCollection,
    findCollection,
    findByIdCollection,
    countCollection,
    updateIdOnCollection,
    removeIdOnCollection,
    findCollectionSortPaginate,
    findCollectionPopulatePaginate,
    findOrCollection,
    findCollectionPopulate,
    findCollectionSortPopulatePaginate,
    findAndRemovedCollection,
    findCollectionOrSortPaginate
}