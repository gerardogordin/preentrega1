let nombreUsuario = prompt('Ingresá tu nombre')
let edad = parseInt(prompt('Ingrese su edad'))

while (isNaN(edad)){
  edad=parseInt (prompt('Debes ingresar valores numericos'))
} 
confirm('Hola '+nombreUsuario+' Estas seguro de tener '+edad+ ' años?')

if (edad < 18){
  alert('No puedes ingresar. Este sitio es para personas mayores de 18 años')
  document.write ('Por su seguridad, le pedimos que no vuelva a ingresar y mienta su edad.')
}
else{
  alert('Bienvenida/o. Puedes ingresar')
  document.write ('Este sitio es seguro.')
}




