let pantallas =["menu", "add", "lista"]

//Función que muestra una pantalla y oculta las demás
let mostrar = function(id){
    //Abstracción
    //Buscar y mostrar el elemneto deseado
    let aMostrar = document.querySelector("#"+id);//se buesca el id que queremos mostrar
    aMostrar.style.display = "block";
    //Ocultar los demás elementos
    for(pantalla of pantallas){//pantalla de pantallas
        if(pantalla !== id)//pantalla mira la lista de ids que tiene dentro y sino es el que busco, tengo que ocultarlo
        document.querySelector("#" + pantalla).style.display = "none";
    }
    //return. 
}
mostrar("menu");
let prueba = function(){
    console.log("Boton clickeado");
};
let botonesAdd = document.getElementsByClassName("irAdd");
for(boton of botonesAdd){
    //onclick necesita la referencia a una función, no el resultado de evaluar una función
    //ARROW FUNCTIONS ()=>{askj}, funciones anónimas
    //Sirven para crear otra función, ya que después de inclick debpo hjacer referencia a una función, pero para que sea la función evaluada  en add, es decir que como resultado me muestre add
    //La función flecha no toma nada y da como resultado la función mostrar evaluada en add, para que pueda funcionar. 
    //las funciones flechas sirven para padsar un argumento a onclick. 
    boton.onclick = () => mostrar("add");
}