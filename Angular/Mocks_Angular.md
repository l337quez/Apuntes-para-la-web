Los Mock son datos falsos, usados por desarrolladores Front End, ya que no manejan base de datos o por cualquier otro motivo.

</br>

## Estrutura de un Mock

export var artitasPartituras = [

    {
        id:'12232323222',
        nombre: 'caramelos de cianuro',
        imagen: 'caramelos.jpg',
        numeroPartituras: 23
    },

    {
        id:'434356566',
        nombre: 'Apache',
        imagen: 'apache.jpg',
        numeroPartituras: 12
    },

]

</br>

## Como usar un Mock

En user.services, donde llamamos a los servicios de los usuarios, llamamos al mock dentro de una funcion, es decir se llama la funcion y
lo que va retornar es el mock. Por Ejemplo:

</br>

obtenerArtistasMock(id): Observable<any>{
    return of(artitasPartituras);
  };


