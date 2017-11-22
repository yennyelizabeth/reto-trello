/* registro de evento Load en window, el cual llama a función begin */
window.addEventListener('load', begin);

/* Declaración de variables globales que capturan los elementos a utilizar */
var form = document.getElementById('form'); /* Form */
var nameList = document.getElementById('name-list'); /* Input */
var button = document.getElementById('button-id'); /* Input */
var addList = document.getElementById('addList'); /* Span */

/* función begin, donde se registraran: eventos y sus funciones asociadas */
function begin() {
  addList.addEventListener('click', createList); /* evento click -> llama función createList */
};

/* función createList que  */
function createList(event) {
  event.target.classList.toggle('display-none'); /* con toggle agrega la clase que no tenía - oculta span */
  form.classList.toggle('display-none'); /* con toggle quita la clase que ya tenia form inicialmente - aparece form */
};
