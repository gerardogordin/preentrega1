
// PREENTREGA1
function ingreso () {
    let nombreUsuario = prompt('Ingresá tu nombre')
while (!isNaN(nombreUsuario)){
    nombreUsuario = prompt ('Debes ingresar tu nombre. No debe haber números')
};
let edad = parseInt(prompt('Ingrese su edad'))

while (isNaN(edad)){
  edad=parseInt (prompt('Debes ingresar valores numericos'))
} 
confirm('Hola '+nombreUsuario+' Estas seguro de tener '+edad+ ' años?')

if (edad < 18){
  alert('No puedes ingresar. Este sitio es para personas mayores de 18 años. Andá a llamar a una persona mayor de edad para que te acompañe')
  document.write ('Por su seguridad, le pedimos que no vuelva a ingresar y mienta su edad.')
}
else{
  alert('Bienvenida/o. Puedes ingresar')
  document.write ('Bienvenida/o a REDI, somos fabricantes de indumentaria deportiva')
}
}


let producto =[];
let precio= []; 
let cuotas ; 
let carrito;
let calculoCuota;
let valorPrendas;
let total;


const productoS = [

{ nombre: 'Buzo', precio: 2500},
{ nombre: 'Pantalon', precio: 2000},
{ nombre: 'Camiseta', precio: 1500},
{ nombre: 'Conjunto', precio: 4000},
{ nombre: 'Medias', precio: 950},

 ];


console.log(productoS[2]);   
console.log(productoS[0]);
console.log(productoS[3]);
console.log(productoS)

productoS.push({nombre:'Bermuda',precio: 2300});
console.log(productoS)





function eleccionProducto (){
 carrito = prompt ('Qué desea comprar? Ingrese el numero que corresponda al producto.  1-Buzo              2- Pantalon             3- Camiseta              4- Conjunto             5- Medias')

 switch (carrito) {
        case '1': alert (`El valor del ${productoS[0].nombre} es de $ ${productoS[0].precio}`);
        break;
        case '2': alert (`El valor del ${productoS[1].nombre} es de $ ${productoS[1].precio}`);
        break;
        case '3': alert (`El valor de la ${productoS[2].nombre} es de $ ${productoS[2].precio}`);
        break;
        case '4': alert (`El valor del ${productoS[3].nombre} es de $ ${productoS[3].precio}`);
        break;
        case '5': alert (`El valor de las ${productoS[4].nombre} es de $ ${productoS[4].precio}`)
        break;
        default: 
        while (carrito > 5 || isNaN(carrito) || carrito ==="" ) {
        alert ('Debes ingresar el número correspondiente a la prenda que elijas. Recuerda que solo puedes ingresar una prenda a la vez')
        carrito = prompt ('Qué desea comprar? Ingrese el numero que corresponda al producto.  1-Buzo              2- Pantalon             3- Camiseta              4- Conjunto             5- Medias')
        break;

    }
  }

}


function pagoProductos () {
     cuotas = parseInt (prompt('Ingrese la cantidad de cuotas en las que desea abonar. Puede ser 1,3,6 o 12 cuotas sin intereses'));
      total = valorProducto/cuotas
     switch (cuotas) {
        case '1': alert (`El monto total a abonar es de ${valorProducto/1}`);
        break;
        case '3': alert(`El monto por cuota es de ${valorProducto/3}`);
        break;
        case '6': alert(`El monto por cuota es de ${valorProducto/6}`);
        break;
        case '12': alert(`El monto por cuota es de ${valorProducto/12}`);
        break;
        default:
        while (cuotas != 1 && cuotas != 3 && cuotas != 6 && cuotas !== 12)
        {alert('Por favor ingrese alguno de los valores requeridos') 
        cuotas = parseInt ( prompt('Ingrese la cantidad de cuotas en las que desea abonar. Puede ser 1,3,6 o 12 cuotas sin intereses'))};
        break;
    }
        return total;    
}
// ingreso();
// eleccionProducto ();
// pagoProductos();
// console.log(total)


// PARA LA TERCERA PRE-ENTREGA, SILENCIO ESTAS FUNCIONES QUE YA UTILICE PARA QUE NO MOLESTEN


  // alert('GRACIAS POR SU COMPRA')

  
const crearCarrito = (clase, arr) => {
  let insertarCarritoEnDom = document.getElementById("seccionProductos"); 
  let crearTitutoDeListaDeProductos = document.createElement (`h2`);
  let crearListaDeProductos = document.createElement (`ul`);
  let crearProductos = document.createElement (`li`);
  
  console.log(insertarCarritoEnDom)   
  console.log(crearTitutoDeListaDeProductos)
  console.log(crearListaDeProductos)
  console.log(crearProductos)
}

crearCarrito( "seccionProductos" , productoS );


let consultas = []
localStorage.setItem('consultas', JSON.stringify(consultas))

function contacto () {
console.log(consultas)
const nombre = document.getElementById('nombre').value
const celular = document.getElementById('celular').value
const mail = document.getElementById('mail').value
const consulta = document.getElementById('consulta').value

const nuevoContacto = {
  nombre: nombre,
  celular: celular,
  mail: mail, 
  consulta: consulta
}

if (nuevoContacto.mail === '' || nuevoContacto.consulta === '') {
  alert('Completa los campos obligatorios')
} else {
  consultas.push(nuevoContacto)
  localStorage.setItem('consultas', JSON.stringify(consultas))
  
}

}

let boton = document.querySelector('#botonEnviar')
boton.onclick = () => contacto()


// QUIERO:
// - PINTAR EL BOTON ENVIAR CUANDO PASE EL MOUSE POR ARRIBA
// - CREAR UN ALERT SI AL CLICKEAR EL BOTON ENVIAR ESTA EN MENOR DE EDAD