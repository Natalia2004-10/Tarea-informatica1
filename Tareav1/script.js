let pantallas = ["crearUsuario","login","menu", "add", "lista"];

// Función que muestra una pantalla y oculta las demás
let mostrar = function (id) {
  //Abstracción
  // Buscar y mostrar el elemento deseado
  if(id == "lista")document.getElementById("tablaTareas").innerHTML = creartabla(tareas);
  let aMostrar = document.querySelector("#" + id);
  aMostrar.style.display = "block";
  // Ocultar los demás elementos
  for (pantalla of pantallas) {
    if (pantalla !== id)
      document.querySelector("#" + pantalla).style.display = "none";
  }
  //   return
};

mostrar("login");
let prueba = function () {
  console.log("Boton clickeado!!!");
};

let botonesAdd = document.getElementsByClassName("irAAdd");
for (boton of botonesAdd) {
  // onclick necesita la referencia a una función, no
  // el resultado de evaluar una función
  // ARROW FUNCTIONS ()=>{aksj}, funciones anónimas
  boton.onclick = () => mostrar("add");
  // boton.onmouseover = () => mostrar("lista");
}

let usuarios = [
    {nombre: "Luis", clave: "clave1234"},
    {nombre: "Juan", clave: "abcd.1234"},
    {nombre: "Maria", clave: "miClave"},
];
let USUARIO;
let iniciarSesion = function () {
    console.log("Intento de inicio de sesion");//Para saber si esta funcionando antes de que haga una funcion voy a ver si espícho el boton aparece el mensaje.
    let nombreIntento = document.getElementById("nombre").value;
    let claveIntento = document.getElementById("password").value;
    //console.log(nombreIntento);
    //console.log(claveIntento);
    for (usuario of usuarios){
      if(usuario.nombre == nombreIntento && usuario.clave == claveIntento){
        //Inicio de sesión exitosa 
        USUARIO = usuario.nombre;
        mostrar("menu");
        formainicioSesion.reset();
        return false
      }
    }
    //Si se llega a este punto, quiere decir que el inicio de sesión no fue exitoso
    alert("Nombre de usuario o contraseña equivocados")
    return false;
};
let formainicioSesion = document.getElementById("formainicioSesion");
formainicioSesion.onsubmit = iniciarSesion; 
// let forma = document.geteElementById("miForma");
//let formainicioSesion = document.getElementById("formainicioSesion");
//formainicioSesion.onclick = iniciarSesion; 

let botonesMenu = document.getElementsByClassName("irMenu");
for (boton of botonesMenu) {
  boton.onclick = () => mostrar("menu")
}

let botonesLista = document.getElementsByClassName("irLista");
for (boton of botonesLista) {
  boton.onclick = () => mostrar("lista")
}

let botonNuevoUsuario = document.getElementById("irCrearUsua");
  botonNuevoUsuario.onclick = () => mostrar("crearUsuario")

let tareas = [
  {materia:"Física", detalle:"Hacer el laboratorio de movimiento parabólico", fecha: new Date(2020, 4, 25), nombreUsuario: "Luis"},
  {materia:"Informática", detalle:"Hacer el laboratorio de js", fecha: new Date(2020, 4, 20), nombreUsuario: "Maria"},
  {materia:"Matemática", detalle:"Hacer el laboratorio de pi", fecha: new Date(2020, 5, 25), nombreUsuario: "Luis"},
  {materia:"Ciencias", detalle:"Hacer el laboratorio de biología", fecha: new Date(2020, 6, 15), nombreUsuario: "Juan"},
];

let creartabla = function(lista){
  let stringtabla = "<tr><th>Materia</th><th>Detalle</th><th>Fecha</th></tr>";
  for(let tarea of lista){
    if(USUARIO == tarea.nombreUsuario){ 
    let fila = "<tr><td>"
    fila += tarea.materia;
    fila += "</td>"

    fila += "<td>"
    fila += tarea.detalle;
    fila += "</td>"

    fila += "<td>"
    fila += tarea.fecha.toUTCString();
    fila += "</td>"

    fila += "</tr>";
    stringtabla += fila;
    console.log(stringtabla);
  }
  }
  return stringtabla;
};

let añadirEle = function () {
  //Para saber si esta funcionando antes de que haga una funcion voy a ver si espícho el boton aparece el mensaje.
  let materiaIntento = document.getElementById("materia").value;
  let detalleIntento = document.getElementById("detalle").value;
  let fechalimiteIntento = document.getElementById("fechalimite").value;
  //console.log(materiaIntento);
  //console.log(detalleIntento);
  //console.log(fechalimiteIntento);
  let tareaNueva = {materia: materiaIntento, detalle: detalleIntento, fecha: new Date (fechalimiteIntento), nombreUsuario: USUARIO}
  tareas.push(tareaNueva);
  console.log(tareas)
  mostrar("lista");
  return false
  }
  document.getElementById("formaAñadir").onsubmit = añadirEle

  let añadirUsua = function () {
    let nombreNuevo = document.getElementById("nombre").value;
    let claveNueva = document.getElementById("password").value;
    console.log(nombreNuevo);
    console.log(claveNueva);
    let usuarioNuevo = {nombre: nombreNuevo, clave: claveNueva}
    usuarios.push(usuarioNuevo);
    mostrar("login");
    return false
    }
    document.getElementById("formaCrearUsuario").onsubmit = añadirUsua
  