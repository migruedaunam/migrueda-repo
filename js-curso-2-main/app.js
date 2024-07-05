let city =0;
let num1=0;
let num2=0;
let suma = num1 + num1;

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function  consolBoton (){
	
	console.log('El botón fue clicado');
}

function  ciudad (){
	
	city = prompt("Ingresa el nombre de una ciudad de Brasil:");
	alert (`Estuve en ${city} y me acordé de ti`);
	
}

function iloveJS(){
	
	alert ("Yo amo JS");
	
}

function  add (){
	
	num1 = prompt("Indica un primer número:");
	num2 = prompt("Indica el segundo número:");

	alert (num1 + num2);
	//alert (`La suma es: ${suma}`);
	
}