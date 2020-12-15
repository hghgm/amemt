const tablaEl = document.getElementById("tabla");

let theadEl = document.createElement("thead");
tablaEl.appendChild(theadEl);

let trEl = document.createElement("tr");
theadEl.appendChild(trEl);

let thEl = document.createElement("th");
trEl.appendChild(thEl);
thEl.innerHTML="Sensor";

let thEl2 = document.createElement("th");
trEl.appendChild(thEl2);
thEl2.innerHTML="Tipo";

let thEl3 = document.createElement("th");
trEl.appendChild(thEl3);
thEl3.innerHTML="Cantidad";

let thEl4 = document.createElement("th");
trEl.appendChild(thEl4);
thEl4.innerHTML="Precio C/U";

let thEl5 = document.createElement("th");
trEl.appendChild(thEl5);
thEl5.innerHTML="Editar"

let thEl6 = document.createElement("th");
trEl.appendChild(thEl6);
thEl6.innerHTML="Eliminar"

let tbodyEl = document.createElement("tbody");
tablaEl.appendChild(tbodyEl);
tbodyEl.classList.add('cuerpoTabla');


const dispositivos = [{
    id: 1,
    Sensor: "Infrarrojo",
    Tipo: "Interior",
    Cantidad: 4,
    Precio: 200,
    OpcionEdit: "Editar",
    OpcionErase: "Borrar"
},
{
    id: 2,
    Sensor: "Infrarrojo",
    Tipo: "Exterior",
    Cantidad: 1,
    Precio: 800,
    OpcionEdit: "Editar",
    OpcionErase: "Borrar"
},
{
    id: 3,
    Sensor: "Magnético",
    Tipo: "Interior",
    Cantidad: 10,
    Precio: 100,
    OpcionEdit: "Editar",
    OpcionErase: "Borrar"
},
{
    id: 4,
    Sensor: "Sirena",
    Tipo: "Interior",    
    Cantidad: 1,
    Precio: 500,
    OpcionEdit: "Editar",
    OpcionErase: "Borrar"
},
{
    id: 5,
    Sensor: "Sirena",
    Tipo: "Exterior",    
    Cantidad: 1,
    Precio: 1000,
    OpcionEdit: "Editar",
    OpcionErase: "Borrar"
},
];
