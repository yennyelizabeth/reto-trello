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

/* función newList que agrega o quita la clase de visibilidad */
function newListt(event) {
  event.target.classList.toggle('display-none'); /* con toggle agrega la clase que no tenía - oculta span */
  form.classList.toggle('display-none'); /* con toggle quita la clase que ya tenia form inicialmente - aparece form */
};

/* función createList visualiza lista */
function createList(event) {
  event.preventDefault();

  if(nameList.value) { /* si nameList no es vacío "true" */
    form.classList.toggle('display-none'); /* desaparece form */

    var title = nameList.value.toUpperCase(); /* declara,asigna y convierte mayusculas */
    var titleElement = document.createElement('div'); /* agrega clase */

    titleElement.textContent = title; /* agrega clase */

    form.parentElement.insertBefore(titleElement, form); /* agrega hijo a padre de form, antes de su hermano form*/

    var link = document.createElement("a"); /* declara link , asigna la creacion elemento a */
    link.setAttribute("href", "#"); /* agrega el atributo href con valor # */

    var linkText = document.createTextNode("Añadir una tarea..."); /* declara linkText, asigna la creación de nodo texto con contenido */
    link.appendChild(linkText); /* asigna un hijo linkText al padre link */

    titleElement.parentElement.appendChild(link); /* asigna hijo link a padre titleElement */
  }
}

