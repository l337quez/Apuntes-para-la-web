var express = require('express');
var ctrlDataBase = require('../controllers/dataBase');
var api = express.Router();

// 0. Funcion de prueba del controlador de base de datos
api.get('/pruebaDataBase', ctrlDataBase.pruebaDataBase);
// 1. Consultar informacion de una coleccion
api.post('/collectionInfo/:collection?/:page?', ctrlDataBase.searchCollection);
// 2. Obtener el menu de colecciones
api.get('/collectionsMenu', ctrlDataBase.searchCollections);
// 3. Buscar un id en un coleccion
api.get('/collectionItem/:collection/:id', ctrlDataBase.searchIdOnCollection);
// 4. Borrar todos los datos de una coleccion 
api.delete('/removeCollectionData/:collection', ctrlDataBase.removeDataCollection);
// 5. Borrar un id en una coleccion
api.delete('/removeCollectionItem/:collection/:id', ctrlDataBase.removeIdOnCollection);

module.exports=api;