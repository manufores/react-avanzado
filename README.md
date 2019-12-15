# Práctica de React Avanzado

## Funcionalidades:

Esta práctica consta de una aplicación web en la que, a través de un formulario inicial, se accede a anuncios.
En la home de los anuncios se dispone de un botón para cargar los anuncios.

En la home, también se dispone de un botón para crear más anuncios. El cual nos llevará a un formulario para su creación.

En cada anuncio, hay un botón `read more..` que nos llevará a la ficha del anuncio.
En dicha ficha hay un botón que nos permite editar y actualizar el anuncio. Ese Botón NO ACCEDE A UN COMPONENTE DE ESTA PRACTICA, 
HAY QUE USAR EL BOTÓN QUE ESTÁ EN LA PÁGINA DEL LISTADO DE ANUNCIOS.
Cuando se accede a la sección de editar y actualizar, se cargan los valores de cada campo que se quieran cambiar.


## Especificaciones:

Esta aplicación dispone de un controlador de contexto.
También contiene un store de redux.
También está provista de tests.

También está implementado el control de errores `Error Boundary`, mediante el cual se puede controlar los errores propios de la aplicación. Los errores de conexión a la API no son controlables a través del `Error Boundary`.

## Redux:
Todas las acciones y reducers de los componentes que están conectados con Redux, se encuentran en la carpeta Redux.
Los componentes que están conectados a Redux, están ordenados en carpetas según el componente al que representan.

## Hook:
El componente que tiene implementado un Hook está indicado en la carpeta de los componentes.

## Tests:
Los elementos que contienen test, tienen el mismo nombre que el elemento que se testea y se encuentra justo debajo del mismo.



## Modo de arrancar la aplicación:

En el directorio del proyecto, se puede:

### `npm run start`

Se arrancará en modo de desarrollo<br />
Abrir [http://localhost:3000](http://localhost:3000) para verla en el navegador.

La página se recarga automáticamente cuando se edita y se guarda el código.

### `npm run test`

Se arrancará en modo de testing, analizando todos los elementos que se han designado para test.


