/* 
Creador por: Ing. Juancito Peña V.
Universidad: O&M Dominicana
Materia: Interaccion Humano Computador
Seccion: 1050
Horario: 8:00 am a 10:00 am
 */

 //Aqui los Eventos del manejo de eventos de teclado:


// Botones del documento:
var operadores = ['+', '-', 'x', '÷'];
var botones = document.querySelectorAll('#calculadora span');
var decimal = false;

// Añadir la funcion a los botones:
var i=0;
while(i < botones.length) {
	botones[i].onclick = function(e) {
		
		var input = document.querySelector('.pantalla');
		var input_valor = input.innerHTML;
		var boton_valor = this.innerHTML;
				
		if(boton_valor == '.') {
			
			if(!decimal) {
				
				input.innerHTML += boton_valor;
				decimal = true;
				
			}
		
		//Si se pulsa el clear, se resetea:
		}else if(boton_valor == 'C') {
			
			input.innerHTML = '';
			decimal = false;
			
		}else if(operadores.indexOf(boton_valor) > -1) {
			
			//Conseguimos el ultimo elemento de la ecuación:
			var ultimo = input_valor[input_valor.length - 1];
			//Añadimos el operador si no está vacío y si no existe otro operador alfinal:
			if(input_valor != '' && operadores.indexOf(ultimo) == -1) 
				
				input.innerHTML += boton_valor;
			
			//Si introducimos el menor sin que haya ningun otro elemento:
			else if(input_valor == '' && boton_valor == '-') 
			
				input.innerHTML += boton_valor;
			
			
			if(operadores.indexOf(ultimo) > -1 && input_valor.length > 1) {
				//Reemplazar el final si es un operador con el nuevo operador:
				input.innerHTML = input_valor.replace(/.$/, boton_valor);
				
			}
			
			decimal =false;
			
		//Si se introduce "=", se calcula y se muestra:
		}else if(boton_valor == '=') {
			
			var equation = input_valor;
			var ultimo = equation[equation.length - 1];
			//Reemplazar "X" e "%" por "*" y "/":
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

			//Si es un operador al final, lo quita:
			if(operadores.indexOf(ultimo) > -1 || ultimo == '.')
				
				equation = equation.replace(/.$/, '');
			
			if(equation)
				
				input.innerHTML = eval(equation);
				decimal = false;
			
		}else {
			
			input.innerHTML += boton_valor;
			
		}
	} 
	i++
}