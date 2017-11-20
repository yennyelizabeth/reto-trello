window.addEventListener('load', function(event) {
  var button = document.getElementById('button-initial');
  button.style.visibility = 'hidden';

  var textarea = document.getElementById('textarea-1');

  /* Evento click en textarea */
  textarea.addEventListener('click', function(event) {
    button.style.visibility = 'visible';

    var containerOne = document.getElementById('container-1');

    containerOne.classList.remove('container-initial');
    containerOne.classList.add('container-after');
  });

  /* Evento click en boton */
  button.addEventListener('click', function(event) {
    alert('presion');
    /* ubico área para crear elementos */
    var sectionTargets = document.getElementById('sectionTargets');

    /* creaación de elementos y nodo */
    var divVar = document.createElement('div');
    var textAreaVar = document.createElement('textarea');
    /* var text = document.createTextNode(textAreaText); */

    /* asignación de hijos a padres */
    sectionTargets.appendChild(divVar);
    divVar.appendChild(textAreaVar);
    /* sectionTargetss.appendChild(text);*/

    divVar.classList.add('container-after');
    textAreaVar.value = 'añadir una lista...';
    textAreaVar.classList.remove('textarea-1');
  });
});
