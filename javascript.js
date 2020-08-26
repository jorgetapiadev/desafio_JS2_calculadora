//intento de calculadora

//     let memoria = 0 + "";
//     // botones
//     let leerBoton0 = document.getElementById("boton0");
//     leerBoton0.addEventListener("click", leer0);

//     let leerBoton1 = document.getElementById("boton1");
//     leerBoton1.addEventListener("click", leer1);

//     let leerBoton2 = document.getElementById("boton2");
//     leerBoton2.addEventListener("click", leer2);

//     let leerBoton3 = document.getElementById("boton3");
//     leerBoton3.addEventListener("click", leer3);


//     let leerBoton4 = document.getElementById("boton4");
//     leerBoton4.addEventListener("click", leer4);

//     let leerBoton5 = document.getElementById("boton5");
//     leerBoton5.addEventListener("click", leer5);

//     let leerBoton6 = document.getElementById("boton6");
//     leerBoton6.addEventListener("click", leer6);

//     let leerBoton7 = document.getElementById("boton7");
//     leerBoton7.addEventListener("click", leer7);

//     let leerBoton8 = document.getElementById("boton8");
//     leerBoton8.addEventListener("click", leer8);

//     let leerBoton9 = document.getElementById("boton9");
//     leerBoton9.addEventListener("click", leer9);

//     // botones operadores

//     var resultado = document.getElementById('resultado');
//     var reset = document.getElementById('reset');
//     var suma = document.getElementById('suma');
//     var resta = document.getElementById('resta');
//     var multiplicacion = document.getElementById('multiplicacion');
//     var division = document.getElementById('division');
//     var igual = document.getElementById('igual');


// //     //concatenar 
// //     function leer0() {
// //         document.getElementById("resultado").innerHTML += 0;

// //         if (memoria > 0) {
// //             memoria = memoria * 10;
// //             alert(memoria)
// //         }
// //         else {
// //             memoria = memoria + 0;
// //         }
// //     }
// //     function leer1() {
// //         document.getElementById("resultado").innerHTML += 1;
// //         memoria = memoria + 1;
// //     }
// //     function leer2() {
// //         document.getElementById("resultado").innerHTML += 2;
// //         memoria = memoria + 2;
// //     }
// //     function leer3() {
// //         document.getElementById("resultado").innerHTML += 3;
// //         memoria = memoria + 3;
// //     }
// //     function leer4() {
// //         document.getElementById("resultado").innerHTML += 4;
// //         memoria = memoria + 4;
// //     }
// //     function leer5() {
// //         document.getElementById("resultado").innerHTML += 5;
// //         memoria = memoria + 5;
// //     }
// //     function leer6() {
// //         document.getElementById("resultado").innerHTML += 6;
// //         memoria = memoria + 6;
// //     }
// //     function leer7() {
// //         document.getElementById("resultado").innerHTML += 7;
// //         memoria = memoria + 7;
// //     }
// //     function leer8() {
// //         document.getElementById("resultado").innerHTML += 8;
// //         memoria = memoria + 8;
// //     }
// //     function leer9() {
// //         document.getElementById("resultado").innerHTML += 9;
// //         memoria = memoria + 9;
// //     }


// // function limpiar() {
// //     resultado  = "";
// // }

// // function resetear() {
// //     memoria = "";
// //     operandoa = 0;
// //     operandob = 0;
// //     operacion = "";
// // }

// // function resolver() {
// //     var res = 0;
// //     switch (operacion) {
// //         case "+":
// //             res = parseFloat(operandoa) + parseFloat(operandob);
// //             break;

// //         case "-":
// //             res = parseFloat(operandoa) - parseFloat(operandob);
// //             break;

// //         case "*":
// //             res = parseFloat(operandoa) * parseFloat(operandob);
// //             break;

// //         case "/":
// //             res = parseFloat(operandoa) / parseFloat(operandob);
// //             break;
// //     }
// //     resetear();
// //     memoria = res;
// // }
var operandoa;
var operandob;
var operacion;

function init(){
	//variables
	var resultado = document.getElementById('resultado');
	var reset = document.getElementById('reset');
	var suma = document.getElementById('suma');
	var resta = document.getElementById('resta');
	var multiplicacion = document.getElementById('multiplicacion');
	var division = document.getElementById('division');
	var igual = document.getElementById('igual');
	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
	var cero = document.getElementById('cero');

	//eventos de click
	uno.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "1";
	}
	dos.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "2";
	}
	tres.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "3";
	}
	cuatro.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "4";
	}
	cinco.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "5";
	}
	seis.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "6";
	}
	siete.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "7";
	}
	ocho.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "8";
	}
	nueve.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "9";
	}
	cero.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "0";
	}
	reset.onclick = function(e){
  		resetear();
	}
	suma.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "+";
  		limpiar();
	}
	resta.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "-";
  		limpiar();
	}
	multiplicacion.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "*";
  		limpiar();
	}
	division.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "/";
  		limpiar();
	}
	igual.onclick = function(e){
  		operandob = resultado.textContent;
  		resolver();
	}
}


function limpiar(){
	resultado.textContent = "";
}

function resetear(){
	resultado.textContent = "";
	operandoa = 0;
	operandob = 0;
	operacion = "";
}

function resolver(){
	var res = 0;
	switch(operacion){
		case "+":
			res = parseFloat(operandoa) + parseFloat(operandob);
			break;

		case "-":
		    res = parseFloat(operandoa) - parseFloat(operandob);
		    break;

		case "*":
			res = parseFloat(operandoa) * parseFloat(operandob);
			break;

		case "/":
			res = parseFloat(operandoa) / parseFloat(operandob);
			break;
	}
	resetear();
	resultado.textContent = res;
}
