const listadoProductos = [{
    id: 1,
    nombre: 'Airpods',
    precio: 217.50,
    caracteristicas:'Auriculares inalámbricos, resistentes al agua con una duración de 6 horas de carga podrás contestar llamadas mientras escuchas música sin tener que cambiar de dispositivo, te permiten presionarlos para pausar o reproducir.',
    imagen: 'airpods.jpg'
},
{
    id: 2,
    nombre: 'Asistente de Voz',
    precio: 57.50,
    caracteristicas:'Máquina de inteligencia artificial y reconocimiento de voz capaz de realizar procesos t6ales como reproducción y pausa de video, encendido y apagado de luces en casa entre otros tan solo orden de voz.',
    imagen: 'asistentedevoz.jpg'
},
{
    id: 3,
    nombre: 'Celular',
    precio: 237.5,
    caracteristicas:'Dispositivo móvil el cual permite la realización de diversas tareas como administración de documentos, reproducción de audio y video entre otros.',
    imagen:'aspiradorainteligente.jpg'
},
{
    id: 4,
    nombre: 'Reloj Inteligente',
    precio: 57.50,
    caracteristicas:'Dispositivo el cual permite conectarse a varios dispositivos móviles para realizar funciones como recepción de notificaciones además de contar con sensores para la medición de ritmo cardiaco, presión en la sangre, oxigeno en la sangre entre otras.',
    imagen:'relojinteligente.jpg'
},
{
    id: 5,
    nombre: 'Computador',
    precio: 2000.00,
    caracteristicas:'Maquina electrónica la cual permite realizar una variedad de tareas, como almacenamiento de archivos multimedia envió y recepción de los mismos entre otros.',
    imagen: 'computador.jpg'
},
{
    id: 6,
    nombre: 'Impresora',
    precio: 75.00,
    caracteristicas:'Herramienta inalámbrica la cual se encarga de la impresión de documentos de distintos formatos.',
    imagen:'impresora.jpg'
},
{
    id: 7,
    nombre: 'Tarjetas Inteligentes',
    precio: 2.50,
    caracteristicas:'Tarjeta integrada con un micro chip el cual permite realizar transacciones de manera más ágil.',
    imagen: 'tarejtasinteligentes.jpg'
},
{
    id: 8,
    nombre: 'Mouse',
    precio: 13.50,
    caracteristicas:'Dispositivo ergonómico el cual se adapta de mejor manera al usuario permitiendo un mejor desarrollo de las actividades a realizar.',
    imagen:'mouse.jpg'
},
{
    id: 9,
    nombre: 'Videobeam',
    precio: 299.99,
    caracteristicas:'Dispositivo que permite la ilustración a gran escala de archivos multimedia tales como videos, fotografías entre otros.',
    imagen:'videobeam.jpg'
},
{
    id: 10,
    nombre: 'Gafas realidad virtual',
    precio: 49.99,
    caracteristicas:'Herramienta la cual permite la visualización en mejor escala de objetos que se encuentran en entornos virtuales.',
    imagen:'gafasrealidadaumentada.jpg'
},
{
    id: 11,
    nombre: 'Televisores',
    precio: 630.00,
    caracteristicas:'Dispositivo electrónico cuya función principal es la reproducción de archivos multimedia.',
    imagen: 'tv.jpg'
},
{
    id: 12,
    nombre: 'Cámaras',
    precio: 62.75,
    caracteristicas:'Dispositivo de seguridad encargado de captar las imágenes de la zona donde se ubique.',
    imagen: 'camara.jpg'
},
{
    id: 13,
    nombre: 'Drone',
    precio: 150.00,
    caracteristicas:'Máquina de inteligencia artificial y reconocimiento de voz capaz de realizar procesos t6ales como reproducción y pausa de video, encendido y apagado de luces en casa entre otros tan solo orden de voz.',
    imagen:'drone.jpg'

},
{
    id: 14,
    nombre: 'Ipad',
    precio: 1500.00,
    caracteristicas:'Dispositivo móvil con la capacidad de realizar varias tareas como diseño web ilustraciones entre otras.',
    imagen:'ipad.jpg'
},
{
    id: 15,
    nombre: 'Tarjeta Grafica',
    precio: 475.00,
    caracteristicas:'Componente encargado de la ilustración visual de los datos que está procesando el dispositivo.',
    imagen: 'tarjetagrafica.jpg'
},
{
    id: 16,
    nombre: 'Procesador',
    precio: 446.00,
    caracteristicas:'Componente encargado de procesar toda información existente en un dispositivo.',
    imagen: 'procesador.jpg'
},
{
    id: 17,
    nombre: 'Cerraduras Inteligentes ',
    precio: 500.00,
    caracteristicas:'Dispositivo de seguridad diseñado para restringir el acceso a distintos lugares.',
    imagen: 'cerradurasinteligentes.jpg'
},
{
    id: 18,
    nombre: 'Aspiradora Inteligente',
    precio: 247.50,
    caracteristicas:'Dispositivo de limpieza inalámbrico el cual facilita el aseo del entorno.',
    imagen: 'aspiradorainteligente.jpg'    
},
{
    id: 19,
    nombre: 'Cargador Portátil',
    precio: 49.99,
    caracteristicas:'Unidad de carga móvil que permite carga nuestro dispositivo sin necesidad de puerto estático.',
    imagen:'cargadorportatil.jpg'
},
{
    id: 20,
    nombre: 'Bolígrafo Inteligente',
    precio: 115.00,
    caracteristicas:'Herramienta que se utiliza en dispositivos móviles enfocado especiales en el área de diseño digital.',
    imagen:'boligrafointeligente.jpg'
}]


 const pro=JSON.stringify(listadoProductos);
// // const JsonStringify=listadoProductos;
 console.log(pro);

module.exports = listadoProductos;