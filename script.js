/*  

    Archivo de JS que contiene un script (conjunto de lineas de código que normalmente buscan realizar alguna acción en específico).

*/

const edad = 25;

alert('Conectarse')

alert(edad)

let
 app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(500)
  .typeString('Hola, soy estudiante de Administración y Marketing')
  .pauseFor(500)
  .deleteChars(50)
  .typeString('Hola, me gusta escuchar electro-swing')
  .deleteChars(50)
  .typeString('Hola, me encantan los gatitos')
  .pauseFor(500)
  .start();