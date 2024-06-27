# Proyecto de React.js - AgusMr Nails Store Web

#### Este proyecto es un ecommerce desarrollado en el lenguaje React.js, realizado por Francisco Facundo Pacheco para el curso "React.js" de la plataforma CoderHouse. Este sitio web es una tienda virtual de productos de manicuria y pedicuria, en el mismo se podran realizar busquedas entre los distintos productos, tambien realizar un filtro por categoria y ver los detalles de cada uno, se podra realizar una compra mediante el boton agregar al carrito, y en este se podra observar el detalle de compra de los productos a adquirir.

## Herramientas utilizadas
#### - HTML: Maquetado de la aplicacion
#### - CSS: Diseño y estilo de la aplicacion
#### - JavaScript: Logica en la aplicacion
#### - Vite: Servidor de desarrollo para optimizar experiencia en React
#### - React.js: Biblioteca para construir la interfaz del usuario

## Estructura del proyecto

*  public/: Esta carpeta contiene archivos estáticos que se sirven directamente, como imágenes y fuentes.

*  src/: En esta carpeta se encuentra el código fuente de la aplicación, incluyendo componentes, estilos y scripts.
    * assets/: Imagenes y otros recursos estaticos.
    * components/: Componentes de la aplicacion
    * data/: datos JSON de productos y categoria
    * css/: Archivos de estilo CSS.
    * app.jsx: Componente principal de la aplicación
    * index.jsx: Desde donde inicia la aplicación
  
* node_Modules/: Esta carpeta contiene las dependencias y módulos de Node.js necesarios para el proyecto. Se genera automáticamente al instalar paquetes con npm.

* index.html: Archivo principal HTML que sirve como punto de entrada para la aplicación. 

* package.json: Archivo de configuración que contiene información sobre el proyecto y sus dependencias.

* package-lock.json: Archivo de bloqueo que asegura que las instalaciones de paquetes sean reproducibles y consistentes.

* vite.config.js: Archivo de configuración para Vite, el empaquetador de módulos utilizado en el proyecto.

* .gitignore: Archivo que especifica qué archivos y directorios deben ser ignorados por Git.

* .eslintrc.cjs: Archivo de configuración para ESLint, utilizado para mantener un estilo de código consistente y detectar errores en el código.

## Funcionalidades

* **Visualizacion:** Se puede observar un listado de todos los productos cargados en una firebase con su respectivo nombre, foto, detalle, precio.
* **Menu Principal:** Se puede navegar atraves de una barra de menu por las diferentes categorias.
* **Detalle De producto:** Al ingresar en un producto en particular, se pueden observar detalladamente las caracteristicas del mismo y agregar al carrito para inciar la compra del mismo.

## Links
Puede acceder al repositorio de este proyecto ingresando a (https://github.com/franpacheco/coderhouse.ProyectoFinalReactTres).



## Instalacion

1. Clonar el repositorio: `bash` `git clone https://github.com/franpacheco/coderhouse.ProyectoFinalReactTres`.
2. Instalar dependencias: `npm install`
3. Iniciar aplicacion: `npm run dev`

## Autor
**Francisco Facundo Pacheco**