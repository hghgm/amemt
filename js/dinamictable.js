// Function para completar la tabla //

dispositivos.forEach(producto => {
    const trFilasEL = document.createElement("tr");
    trFilasEL.classList.add('filasTabla');

    let $tdSensor = document.createElement("td");
    $tdSensor.textContent = producto.Sensor;
    trFilasEL.appendChild($tdSensor);

    let $tdTipo = document.createElement("td");
    $tdTipo.textContent = producto.Tipo;
    trFilasEL.appendChild($tdTipo);

    let $tdCantidad = document.createElement("td");
    $tdCantidad.textContent = producto.Cantidad;
    trFilasEL.appendChild($tdCantidad);

    let $tdPrecio = document.createElement("td");
    $tdPrecio.textContent = producto.Precio;
    trFilasEL.appendChild($tdPrecio);

    let $tdOptionEdit = document.createElement("td");
    let botonEdit = document.createElement("button");
    botonEdit.innerHTML = producto.OpcionEdit;
    botonEdit.onclick = () => {
     $('#EditarModal').modal('toggle');
    };
    $tdOptionEdit.appendChild(botonEdit);
    trFilasEL.appendChild($tdOptionEdit);

    let $tdOptionErase = document.createElement("td");
    let botonEliminar = document.createElement('button')
    botonEliminar.innerHTML = producto.OpcionErase;
    producto.id = botonEliminar;
    botonEliminar.addEventListener('click', () => {
    trFilasEL.remove($tdOptionErase)
    });
    $tdOptionErase.appendChild(botonEliminar);
    trFilasEL.appendChild($tdOptionErase)

    tbodyEl.appendChild(trFilasEL);
});
