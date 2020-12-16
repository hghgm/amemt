 /*  Funcion para mostrar los datos agregados en la tabla */

 let mostrarFila = () => {  

    sensorModal = document.getElementById("sensorModal");
    tipoModal = document.getElementById("tipoModal");
    cantidadModal = document.getElementById("cantidadModal");
    precioModal = document.getElementById("precioModal");
      
    let nuevaFila = document.createElement("tr");
    nuevaFila.classList.add("td-Elementos");

    let nuevaCelda = document.createElement("td");
     nuevaCelda.classList.add("td-Elementos");
     nuevaCelda.innerHTML = sensorModal.value;
 
     let nuevaCelda2 = document.createElement("td");
     nuevaCelda2.classList.add("td-Elementos");
     nuevaCelda2.innerHTML = tipoModal.value;
 
     let nuevaCelda3 = document.createElement("td");
     nuevaCelda3.classList.add("td-Elementos");
     nuevaCelda3.innerHTML = cantidadModal.value;
 
     let nuevaCelda4 = document.createElement("td");
     nuevaCelda4.classList.add("td-Elementos");
     nuevaCelda4.innerHTML = precioModal.value;
 
     let $tdOptionEditAd = document.createElement("td");
     let botonEditAd = document.createElement("button");
     botonEditAd.innerHTML = "Editar";
     
     let $tdOptionEraseAd = document.createElement("td");
     let botonEliminarAd = document.createElement('button');
     botonEliminarAd.innerHTML = "Borrar";
     botonEliminarAd.addEventListener('click', () => {
     nuevaFila.remove($tdOptionEraseAd)
     });
  
     
     tbodyEl.appendChild(nuevaFila);
     nuevaFila.appendChild(nuevaCelda);
     nuevaFila.appendChild(nuevaCelda2);
     nuevaFila.appendChild(nuevaCelda3);
     nuevaFila.appendChild(nuevaCelda4);
     $tdOptionEditAd.appendChild(botonEditAd);
     nuevaFila.appendChild($tdOptionEditAd);
     $tdOptionEraseAd.appendChild(botonEliminarAd);
     nuevaFila.appendChild($tdOptionEraseAd);
       
    };

let spinner = () => {
    setTimeout(mostrarFila, 2000);   
};

const agregar = document.getElementsByClassName ("agregarBtn");

agregar.onclick = () => {
    // e.preventDefault();
     mostrarFila();
     limpiarInput();
 };

// const actualizarTareas = () => {
//    if(misTareas.length !== 0) {
//        mensaje.classList.add('display-none');
//    } else {
//        mensaje.classList.remove('display-none');
//    }
//    listaTareas.innerHTML = "";
//    for(let i = 0; i < misTareas.length; i++) {
//        let elLi = document.createElement("li");
//        elLi.innerText = misTareas[i];        
//        listaTareas.appendChild(elLi);
//    }
//}

const limpiarInput = () => {
    sensorModal.value = "";
    tipoModal.value = "";
    cantidadModal.value = "";
    precioModal.value = "";
}


