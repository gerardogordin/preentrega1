
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
ingreso();

let arr= [];
let producto =[];
let precio= []; 

 const productoS = [

{ nombre: 'Buzo', precio: 2500},
{ nombre: 'Pantalon', precio: 2000},
{ nombre: 'Camiseta', precio: 1500},
{ nombre: 'Conjunto', precio: 4000},
{ nombre: 'Medias', precio: 950},

 ];
console.log(productoS[2]);   

let cuotas; 
let carrito;

function eleccionProducto ()   {
let carrito = prompt ('Qué desea comprar? Ingrese el numero que corresponda al producto.  1-Buzo              2- Pantalon             3- Camiseta              4- Conjunto             5- Medias')
    switch (carrito) {
        case '1': alert (`El valor del ${productoS[0].nombre} es de $ ${productoS[0].precio}`); 
        confirm('Desea comprar algo mas? Si es asi, indique que producto. Si no, haga click en CANCELAR')
        if (true) {
             carrito = prompt ('Qué desea comprar? Ingrese el numero que corresponda al producto.  1-Buzo              2- Pantalon             3- Camiseta              4- Conjunto             5- Medias')
        }   else {} 
        break;
        case '2': alert (`El valor del ${productoS[1].nombre} es de $ ${productoS[1].precio}`);
        confirm('Desea comprar algo mas? Si es asi, indique que producto. Si no, haga click en CANCELAR')
        if (true) {
             carrito = prompt ('Qué desea comprar? Ingrese el numero que corresponda al producto.  1-Buzo              2- Pantalon             3- Camiseta              4- Conjunto             5- Medias')
        }   else {} 
        break;
        case '3': alert (`El valor de la ${productoS[2].nombre} es de $ ${productoS[2].precio}`);
        confirm('Desea comprar algo mas? Si es asi, indique que producto. Si no, haga click en CANCELAR')
        if (true) {
             carrito = prompt ('Qué desea comprar? Ingrese el numero que corresponda al producto.  1-Buzo              2- Pantalon             3- Camiseta              4- Conjunto             5- Medias')
        }   else {} 
        break;
        case '4': alert (`El valor del ${productoS[3].nombre} es de $ ${productoS[3].precio}`);
        confirm('Desea comprar algo mas? Si es asi, indique que producto. Si no, haga click en CANCELAR')
        if (true) {
             carrito = prompt ('Qué desea comprar? Ingrese el numero que corresponda al producto.  1-Buzo              2- Pantalon             3- Camiseta              4- Conjunto             5- Medias')
        }   else {} 
        break;
        case '5': alert (`El valor de las ${productoS[4].nombre} es de $ ${productoS[4].precio}`)
        confirm('Desea comprar algo mas? Si es asi, indique que producto. Si no, haga click en CANCELAR')
        if (true) {
             carrito = prompt ('Qué desea comprar? Ingrese el numero que corresponda al producto.  1-Buzo              2- Pantalon             3- Camiseta              4- Conjunto             5- Medias')
        }   else {} 
        break;
        default: while (carrito > 5) {
        alert ('Debes ingresar el número correspondiente a la prenda que elijas. Recuerda que solo puedes ingresar una prenda a la vez')
         carrito = prompt ('Qué desea comprar? Ingrese el numero que corresponda al producto.  1-Buzo              2- Pantalon             3- Camiseta              4- Conjunto             5- Medias')
        break;
    }
}
return carrito;

}



function pagoProductos (a, b) {
     cuotas = parseFloat(prompt('Ingrese la cantidad de cuotas en las que desea abonar. Puede ser 1,3,6 o 12 cuotas sin intereses'));
    switch (cuotas) {
        case '1': alert('El monto total a abonar es de '+ carrito )
        break;
        case '3': alert('El monto por cuota es de '+(carrito/cuotas))
        break;
        case '6': alert('El monto por cuota es de '+(carrito/cuotas))
        break;
        case '12': alert('El monto por cuota es de '+(carrito/cuotas))
        break;
        
        default: alert('Por favor ingrese alguno de los valores requeridos') 
        cuotas =parseFloat ( prompt('Ingrese la cantidad de cuotas en las que desea abonar. Puede ser 1,3,6 o 12 cuotas sin intereses'));
        break;
    }
    return cuotas;
}
eleccionProducto();
pagoProductos(carrito, cuotas);


