


// en esta entrega realizo una simulacion de calculo de un prestamo personal, que me genere un 30% de interes sobre el valor de la cuota cada mes. 

//primero verificamos que la persona a ingresar sea mayor de edad 

// luego accedemos al simulador de con clave 

// luego podemos simular el prestamo donde tendremos el importe generado por la cantidad de cuotas a pagar y el importe final 
//con los intereses generados.



let clave;

let intentos = 0;
let MAX_INTENTOS = 3;

do{
    clave = prompt('ingrese la contraseña');
    intentos ++;

     if(clave === '1234'){
        console.log("contraseña correcta")
        break;
     }

     if(intentos >= MAX_INTENTOS){
        console.log("cantidad intentos alcanzado")
        break;
     }

}while (true);
    


// similador prestamos personal con interes de 30%

let prestamoPersonal = 0;
let cantidadCuotaPersonal = 0;
let cuotasPersonal = 0;



prestamoPersonal = parseInt(prompt("Ingrese monto del prestamo personal: "));
 console.log (prestamoPersonal + " monto ingresado ");
 

cantidadCuotaPersonal = parseInt(prompt("Ingrese candidad de cuotas: "));
console.log (cantidadCuotaPersonal + " cantidad de cuotas ");
 

cuotasPersonal = (prestamoPersonal) * 0.3;
console.log (cuotasPersonal + " valor de la cuota + interes ");


valorInteres = (cuotasPersonal) / (cantidadCuotaPersonal);
console.log ( valorInteres  +  " valor del interes en el mes " );
 


for (let i = 1; i <=cantidadCuotaPersonal; i++){

    let resultado = valorInteres * i;
    console.log ( valorInteres + " + " + i + " cuota = "  + resultado);
}


valorCuotaInteres = (valorInteres * cantidadCuotaPersonal);
console.log (valorCuotaInteres + " intereses generado ");

importePrestamoCuotaPersonal = (prestamoPersonal + valorCuotaInteres);
console.log (" devolucion total prestamo personal y intereses es de : $ " + importePrestamoCuotaPersonal);



//Simulador de un credito Hipotecario con intereses de 60%



let prestamoHipotecario = 0;
let cantidadCuotaHipotecario = 0;
let cuotasHipotecario = 0;



prestamoHipotecario = parseInt(prompt("Ingrese monto del prestamo Hipotecario: "));
 console.log (prestamoHipotecario + " monto ingresado ");
 

cantidadCuotaHipotecario = parseInt(prompt("Ingrese candidad de cuotas: "));
console.log (cantidadCuotaHipotecario + " cantidad de cuotas ");
 

cuotasHipotecario = (prestamoHipotecario) * 0.6;
console.log (cuotasHipotecario + " valor de la cuota + interes ");


valorInteres = (cuotasHipotecario) / (cantidadCuotaHipotecario);
console.log ( valorInteres  +  " valor del interes en el mes " );
 


for (let i = 1; i <=cantidadCuotaHipotecario; i++){

    let resultado = valorInteres * i;
    console.log ( valorInteres + " + " + i + " cuota = "  + resultado);
}


valorCuotaInteres = (valorInteres * cantidadCuotaHipotecario);
console.log (valorCuotaInteres + " intereses generado ");

importePrestamoCuotaHipotecario = (prestamoHipotecario + valorCuotaInteres);
console.log (" devolucion total prestamo y intereses es de : $ " + importePrestamoCuotaHipotecario);



//Simulador de un credito automovil con intereses de 40%

let prestamoAuto = 0;
let cantidadCuotaAuto = 0;
let cuotasAuto = 0;



prestamoAuto = parseInt(prompt("Ingrese monto del prestamo Automovil: "));
 console.log (prestamoAuto + " monto ingresado ");
 

cantidadCuotaAuto = parseInt(prompt("Ingrese candidad de cuotas: "));
console.log (cantidadCuotaAuto + " cantidad de cuotas ");
 

cuotasAuto = (prestamoAuto) * 0.4;
console.log (cuotasAuto + " valor de la cuota + interes ");


valorInteres = (cuotasAuto) / (cantidadCuotaAuto);
console.log ( valorInteres  +  " valor del interes en el mes " );
 


for (let i = 1; i <=cantidadCuotaAuto; i++){

    let resultado = valorInteres * i;
    console.log ( valorInteres + " + " + i + " cuota = "  + resultado);
}


valorCuotaInteres = (valorInteres * cantidadCuotaAuto);
console.log (valorCuotaInteres + " intereses generado ");

importePrestamoCuotaAuto = (prestamoAuto + valorCuotaInteres);
console.log (" devolucion total prestamo y intereses es de : $ " + importePrestamoCuotaAuto);


//Simulador de un credito electrodomestico con intereses de 10%



let prestamoElectrodomestico = 0;
let cantidadCuotaElectrodomestico = 0;
let cuotasElectrodomestico = 0;



prestamoElectrodomestico = parseInt(prompt("Ingrese monto del prestamo Electrodomestico: "));
 console.log (prestamoElectrodomestico + " monto ingresado ");
 

cantidadCuotaElectrodomestico = parseInt(prompt("Ingrese candidad de cuotas: "));
console.log (cantidadCuotaElectrodomestico + " cantidad de cuotas ");
 

cuotasElectrodomestico = (prestamoElectrodomestico) * 0.1;
console.log (cuotasElectrodomestico + " valor de la cuota + interes ");


valorInteres = (cuotasElectrodomestico) / (cantidadCuotaElectrodomestico);
console.log ( valorInteres  +  " valor del interes en el mes " );
 


for (let i = 1; i <=cantidadCuotaElectrodomestico; i++){

    let resultado = valorInteres * i;
    console.log ( valorInteres + " + " + i + " cuota = "  + resultado);
}


valorCuotaInteres = (valorInteres * cantidadCuotaElectrodomestico);
console.log (valorCuotaInteres + " intereses generado ");

importePrestamoCuotaElectrodomestico = (prestamoElectrodomestico + valorCuotaInteres);
console.log (" devolucion total prestamo mas intereses es de : $ " + importePrestamoCuotaElectrodomestico);





 const tipoPrestamos = [
   
  {
    importeprestamo: prestamoPersonal,
    tipoprestamo: "Personal",
    interes: '30%' ,
    totalprestamo :importePrestamoCuotaPersonal
    
  },
  {  
    importeprestamo: prestamoHipotecario,
    tipoprestamo: "Hipotecario",
    interes: '60%',
    totalprestamo :importePrestamoCuotaHipotecario
    
  },
  {
    importeprestamo: prestamoAuto,
    tipoprestamo: "Auto",
    interes: '40%',
    totalprestamo :importePrestamoCuotaAuto
  },
  {
    importeprestamo: prestamoElectrodomestico,
    tipoprestamo: "Electrodomesticos",
    interes: '20%',
    totalprestamo :importePrestamoCuotaElectrodomestico
  },
  
];

  for(let i = 0; i < tipoPrestamos.length; i++){

    console.log(tipoPrestamos[i])
    console.log(tipoPrestamos[i].totalprestamo)
}

let prestamosTotal = 0;

for (const PRESTAMO of tipoPrestamos){

   prestamosTotal += PRESTAMO.totalprestamo;
}

console.log(" monto de prestamos simulados es :" + prestamosTotal);
 
