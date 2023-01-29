/* Importamos los paquetes necesarios para registrar un bloque */
import {registerBlockType} from "@wordpress/blocks"
import edit from "./edit";
import save from "./save";

/* Registramos el bloque con la función registerBlockType */
registerBlockType("amz/amazon", {
    /* Título del bloque que se verá en el backend */
    title:"Amazon",
    /* Categoría donde se encuentra el bloque */
    category: "widgets",
    /* Icono que representa el bloque */
    icon: "admin-users",
    /* Atributos que contendrá el bloque */
    attributes: {
        /* Título del primer producto */
        title1:{
            type: "string",
            default: "Producto 1"
        },
        /* Título del segundo producto */
        title2:{
            type: "string",
            default: "Producto 2"
        },
        /* Título del tercer producto */
        title3:{
            type: "string",
            default: "Producto 3"
        },
        /* Precio del primer producto */
        precio1:{
            type: "string",
            default: "0 USD"
        },
        /* Precio del segundo producto */
        precio2:{
            type: "string",
            default: "0 USD"
        },
        /* Precio del tercer producto */
        precio3:{
            type: "string",
            default: "0 USD"
        },
        /* Imagen del primer producto */
        image1: {
            type: 'object',
            default: {
                id: null,
                url:null
            }
        },
        /* Imagen del segundo producto */
        image2: {
            type: 'object',
            default: {
                id: null,
                url:null
            }
        },
        /* Imagen del tercer producto */
        image3: {
            type: 'object',
            default: {
                id: null,
                url:null
            }
        },
        /* Enlace del primer producto */
        link1: {
            type:'string',
            default: ''
        },
        /* Enlace del segundo producto */
        link2: {
            type:'string',
            default: ''
        },
        /* Enlace del tercer producto */
        link3: {
            type:'string',
            default: ''
        }   
    },
    /* Función que se encarga de renderizar el bloque en el panel de edición */
    edit,
    /* Función que se encarga de renderizar el bloque en el frontend */
    save
});
