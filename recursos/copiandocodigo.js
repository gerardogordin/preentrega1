let nombre;                 //variables
let cuotasTres;
let cuotasSeis;
let cuotasDoce;
let sueldo;
let maxCredito;
let credito;
let montoCuotas;
let cantCuotas;
let arregloContenedor;
let opcion;
let terminar;
let montoFiltrado;
let filtrados;
let busqueda;
let result;

// clases

class Credito {
    constructor(nombre,sueldo,monto,cuotas,valorCuota){
        this.nombre=nombre;        
        this.sueldo=sueldo;
        this.monto=monto;
        this.cuotas=cuotas;
        this.valorCuota=valorCuota;
    }
    verInfo(){
        console.log(`el nombre es : ${this.nombre} y el credito solicitado es  : ${this.monto} en ${this.cuotas} cuotas de ${this.valorCuota}`);
    }
}

function comprobarNombre(){                                          //comprueba si lo que esta escribiendo es string
    let nombreAux = prompt('escriba el nombre');
    while (!isNaN(nombreAux)){              
        alert('esta ecribiendo numeros escriba un nombre')                          
        nombreAux =(prompt('Escriba el nombre '));
    }
    return nombreAux;
}

function comprobarNumero(texto){                                        //comprueba que  lo que esta escribiendo sean numeros.
    let numero =  prompt('escriba en numero : '+texto);
    while (isNaN(numero)){                                        
        alert('esta escribiendo un texto escriba un numero'); 
        numero =(prompt('escriba en numero : '+texto));
    }  
    return numero
}

function comprabarCreditoMenorAMax (maxCredito){                                             // comprueba que el monto a sacar sea el correcto 
        alert('cual es el monto que desea sacar ?');
        let creditoAux = comprobarNumero('el monto a sacar');                                // pregunta que de que monto quiere el credito        
        creditoAux=parseInt(creditoAux);
        while (creditoAux > maxCredito){
            alert('usted no puede sacar mas credito de lo permitido ');
            alert('el credito maximo que usteded puede sacar es de '+ maxCredito);
            creditoAux = comprobarNumero('el monto a sacar');                            // pregunta que de que monto quiere el credito            
            creditoAux=parseInt(creditoAux);
        }        
        return creditoAux;

}

function afectacionMensualPermitida(sueldo,credito){                        //se fija si la cuota no supera el 20% del sueldo en 3 6 o 12 cuotas    
    if ((sueldo *0.2)>=(credito/3)){                
        cuotasTres =true;
    } 
    if ((sueldo *0.2)>=(credito/6)){            
        cuotasSeis =true;
    } 
    if ((sueldo *0.2)>=(credito/12)){            
        cuotasDoce =true;
    }     
}

function cantidadCuotasPermitida (cuotasTres,cuotasSeis,cuotasDoce,credito){                            // te dice en cuantas cuotas podes sacar el prestamo . si el monto de la cuota supera mas del 20% no lo podes sacar en esa cantidad de cuotas
    let eleccion;
    let correcto;
    if ((cuotasTres==true) && (cuotasSeis==true) && (cuotasDoce==true)) {                                   // en todas las cuotas disposibles
        correcto=true;
        while (correcto){
            alert('usted lo puede realizar en 3 , 6 y 12 cuotas elija en cuantas sacara el credito');            
            eleccion = comprobarNumero('de cuotas');     
            eleccion = parseInt(eleccion);
            switch (eleccion){
                case 3:                
                    alert('son 3 cuotas de '+(credito/3));  
                    correcto=false;                           
                break;
                case 6:               
                    alert('son 6 cuotas de '+(credito/6));  
                    correcto=false;                                                 
                break;
                case 12:                        
                        alert('son 12 cuotas de '+(credito/12));     
                        correcto=false;                                                 
                break;
                default:
                        alert('no esta ingresando 3, 6 , o 12 ');                 
                break;             
            } 
        }        
    }
    else if ((cuotasTres == false) && (cuotasSeis == true) && (cuotasDoce == true)){                        // en 6 o 12 
        correcto=true;
        while (correcto){
            alert('usted lo puede realizar en 6 y 12 cuotas elija en cuantas cuotas lo quiere realizar ');
            eleccion = comprobarNumero('de cuotas');     
            eleccion = parseInt(eleccion);
            switch (eleccion){            
                case 6:               
                    alert('son 6 cuotas de '+(credito/6));  
                    correcto=false;                                                 
                break;
                case 12:
                    alert('son 12 cuotas de '+(credito/12));    
                    correcto=false;                                             
                break;
                default:    
                    alert('no esta ingresando  6 , o 12 ');              
                break; 
            }
        }    
    }   
    else if ((cuotasTres == false) && (cuotasSeis == false) && (cuotasDoce == true)){        // en 12 cuotas siempre le va a permitir   por eso no va el switch 
        eleccion=12;
        alert('usted lo puede realizar en 12 cuotas ');
        alert('son 12 cuotas de '+(credito/12));                                      
    }
    return eleccion;     
}
 /* programa principal */ 


terminar =true; 
arregloContenedor=[];
while (terminar){    
    alert('elija una opcion : '); 
    opcion = comprobarNumero("-1 cargar creditos (hasta que el nombre sea Finalizar), -2 borrar creditos ,-3 buscar un credito,-4 mostrar todos los creditos,-5 filtrar creditos por monto sacado ,-6 terminar");
    switch (opcion){
        case "1":                                                                                   // carga el arreglo hasta q se escribe en el nombre finalizar .
            nombre='';            
            while (nombre !='Finalizar') { 
                alert('Nuevo Credito');   
                nombre =comprobarNombre();       
                if (nombre !='Finalizar' ){                                                          //para terminar el programa 
                    alert('escriba el sueldo que gana mensualmente');
                    sueldo = comprobarNumero('el sueldo');
                    sueldo=parseInt(sueldo); 
                    maxCredito = sueldo * 2 ;                                                   // 2 veces el sueldo lo maximo que puede sacar . 
                    alert('el credito maximo que usteded puede sacar es de '+ maxCredito); 
                    cuotasTres = false;
                    cuotasSeis = false;
                    cuotasDoce = false;               
                    credito= comprabarCreditoMenorAMax (maxCredito);        
                    afectacionMensualPermitida(sueldo,credito);       
                    cantCuotas = cantidadCuotasPermitida (cuotasTres,cuotasSeis,cuotasDoce,credito);
                    montoCuotas=credito/cantCuotas;
                    arregloContenedor.push(new Credito(nombre,sueldo,credito,cantCuotas,montoCuotas));       
                }
            }        
        break;        
        case "2":                                                                               // borra un elemento del arreglo . 
                alert("Escriba un nombre para borrar el Credito");
                nombre =comprobarNombre(); 
                result = arregloContenedor.findIndex(item => item.nombre === nombre);                
                if (result===-1){
                    alert("no se encuentra el credito a Borrar");                    
                } 
                else{
                    arregloContenedor.splice(result,1);
                    alert("se borro perfectamente"); 
                }
        break;
        case "3":                                                                                           // busca 1 elemento en el arreglo y lo muestra si este existe , si no le dice q no se encuentra
                alert("Escriba un nombre para buscar el credito");
                nombre =comprobarNombre();    
                console.log("===========================Mostrar Credito Buscado ===========================");            
                busqueda = arregloContenedor.find(item => item.nombre === nombre);                
                if (busqueda===undefined){
                    alert("no se encuentra el credito a Buscar");
                }
                else{                                    
                    busqueda.verInfo();
                }
        break;
        case "4":          
            console.log("===========================Mostrar Contenido Arreglo ===========================");                                                         //recorre todo el arreglo y muestra el contenido
            arregloContenedor.forEach((element)=>{
                element.verInfo();
            });
        break;
        case "5":                                                                           // crea un nuevo arreglo donde solo esten los creditos cuyos montos superer al monto elegido
                alert("escriba un monto para filtrar en la busqueda");
                montoFiltrado = comprobarNumero("monto a filtrar");
                console.log("===========================Mostrar Contenido Arreglo Filtrado ===========================");
                filtrados = arregloContenedor.filter(item => item.monto > montoFiltrado);                
                filtrados.forEach((element)=>{ 
                    element.verInfo();
                })                                
        break;
        case "6":
              terminar=false;                           //para terminar el programa 
        break;
    }
}