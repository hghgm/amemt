 /*  Funcion para agregar los datos en la tabla */

 let mostrarFila = () => {  

    sensorModal = document.getElementById("sensorModal");
    tipoModal = document.getElementById("tipoModal");
    cantidadModal = document.getElementById("cantidadModal");
    precioModal = document.getElementById("precioModal");
      
    let nuevaFila = document.createElement("tr");
    nuevaFila.classList.add("td-Elementos");

    let nuevaCelda = document.createElement("td");
     nuevaCelda.classList.add("sensorTextTd");
     nuevaCelda.innerHTML = sensorModal.value;
 
     let nuevaCelda2 = document.createElement("td");
     nuevaCelda2.classList.add("tipoTextTd");
     nuevaCelda2.innerHTML = tipoModal.value;
 
     let nuevaCelda3 = document.createElement("td");
     nuevaCelda3.classList.add("cantidadTextTd");
     nuevaCelda3.innerHTML = cantidadModal.value;
 
     let nuevaCelda4 = document.createElement("td");
     nuevaCelda4.classList.add("precioTextTd");
     nuevaCelda4.innerHTML = precioModal.value;
 
     let $tdOptionEditAd = document.createElement("td");
     let botonEditAd = document.createElement("button");
     botonEditAd.innerHTML = "Editar";
     botonEditAd.onclick = () => {
        $('#EditarModal').modal('toggle');
        RellenarInput();
       };
     
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
    
     limpiarInput();
    };


let spinner = () => {
    setTimeout(mostrarFila, 2000); 
};

// Boton Agregar //
const agregar = document.getElementsByClassName ("agregarBtn");
agregar.onclick = () => {
     spinner();
};


 // limpieza del input //
const limpiarInput = () => {
    sensorModal.value = "";
    tipoModal.value = "";
    cantidadModal.value = "";
    precioModal.value = "";
};

 // Rellenar input //

 sensorModalEd = document.getElementById("sensorModalEd");
 tipoModalEd = document.getElementById("tipoModalEd");
 cantidadModalEd = document.getElementById("cantidadModalEd");
 precioModalEd = document.getElementById("precioModalEd");

 const RellenarInput = () => {
    sensorModalEd.value = sensorModal.innerHTML;
//    tipoModalEd.value = nuevaCelda2.innerHTML;
//   cantidadModalEd.value = nuevaCelda3.innerHTML;
//    precioModalEd.value = nuevaCelda4.innerHTML;
};
