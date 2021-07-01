function calcularLongitud(){
	let palabra=document.getElementById("palabra").value
	let text=palabra.length
	alert("La extension de la palabra " +palabra+ "\n es de " +text+ " letras")
}

let Mayus=function convertirMayus(){
	let palabra=document.getElementById("palabra").value
	let ma=palabra.toUpperCase()	
	alert("La conversion de la palabra a mayusculas "  + palabra + "\n es " +ma )
}

let Minus=function(){
	let palabra=document.getElementById("palabra").value
	let mi=palabra.toLowerCase()	
	alert("La conversion de la palabra a minusculas " + palabra + " \n es " + mi )
}

let extraer=function(){
	let palabra=document.getElementById("palabra").value
	let ini=(palabra.substring(0,1))	
	alert("La primera inicial de  " + palabra + " \n es " + ini+ "")
}

function concatenar(){
	let nom=document.getElementById("nombre").value
	let ape=document.getElementById("apellido").value	
	let texto=nom.concat( " ", ape)
	alert("La palabras unidas son  " + texto )
}

let calcular=function(){
	let num=document.getElementById("cantidad").value
	let op=document.getElementById("option").value	
	let f=100
	let c=200
	if (op==="opcion1"){
		let valt=num*f
		alert("El valor de la llamada es  " + valt )
       }
    else if(op==="opcion2"){
    	let valt=num*c
    	alert("El valor de la llamada es  " + valt )
        
	}
	else{
		alert("Digite un numero valido")
	}
    }
  

 


   
 

let converse=function(){
let cant=document.getElementById("grados").value
cant=parseInt(cant)
let op1=document.getElementById("option1").value
op1=parseInt(op1)	
let op2=document.getElementById("option2").value
op2=parseInt(op2)


if (op1===0|| op2===0){
    alert('No has seleccionado ninguna opcion en los campos')
   
  }


	else if(op1==="opcion1" & op2==="opcion2"){
		let f=((9*cant)/5+32)
		alert("El resultado de la conversion de grados celcius a fahrenheit es: " + f + " grados fahrenheit").toFixed(2)
       }
    else if(op1==="opcion2" & op2==="opcion3"){
    	let k=(((cant-32)*5)/9)+273.15
    	alert("El resultado de la conversion de grados fahrenheit a kelvin es  " + k + " grados kelvin").toFixed(2)
        
	}
	else if(op1==="opcion3" & op2==="opcion1"){
    	let c=cant-273.15
    	alert("El resultado de la conversion de grados kelvin a celcius es  " + c + " grados celcius  ").toFixed(2)
        
	}
    else if(op1==="opcion2" & op2==="opcion1"){
    	let c=((cant-32)*5)/9
    	alert("El resultado de la conversion de grados fahrenheit a celcius es  " + c + " grados celcius  ").toFixed(2)
        
	}
	else if(op1==="opcion3" & op1==="opcion2"){
    	let f=(((cant-273.15)*9)/5)+32
    	alert("El resultado de la conversion de grados kelvin a fahrenheit es  " + f + " grados fahrenheit  ").toFixed(2)
        
	}
	else if(op1==="opcion1" & op2==="opcion3"){
    	let k=cant+273.15
    	alert("El resultado de la conversion de grados celcius a kelvin es  " + k + " grados kelvin  ").toFixed(2)
        
	}
	else{
		alert("La conversion no se puede realizar")
	}

}


const trian=document.getElementById('trian')
const b1=document.querySelector('#campA .feedback')

  const h=/^[0-9]{1,4}$/

   	
  
   trian.lado1.addEventListener('input',e=>{
   	e.preventDefault()


    if (h.test(e.target.value)){
    	 trian.lado1.setAttribute("class","success")
         b1.textContent="Datos validos"
         b1.style.setProperty("visibility","hidden")
         b1.style.setProperty("opacity","0")
    }
    else{
    	trian.lado1.setAttribute("class","error")
        b1.textContent="Caracteres invalidos"
        b1.style.setProperty("visibility","visible")
        b1.style.setProperty("opacity","1")
    }

 
  })

trian.lado2.addEventListener('input',e=>{
   	e.preventDefault()


    if (h.test(e.target.value)){
    	 trian.lado2.setAttribute("class","success")
         b1.textContent="Datos validos"
         b1.style.setProperty("visibility","hidden")
         b1.style.setProperty("opacity","0")
    }
    else{
    	trian.lado2.setAttribute("class","error")
        b1.textContent="Caracteres invalidos"
        b1.style.setProperty("visibility","visible")
        b1.style.setProperty("opacity","1")
    }

 
  })
trian.lado3.addEventListener('input',e=>{
   	e.preventDefault()


    if (h.test(e.target.value)){
    	 trian.lado3.setAttribute("class","success")
         b1.textContent="Datos validos"
         b1.style.setProperty("visibility","hidden")
         b1.style.setProperty("opacity","0")
    }
    else{
    	trian.lado3.setAttribute("class","error")
        b1.textContent="Caracteres invalidos"
        b1.style.setProperty("visibility","visible")
        b1.style.setProperty("opacity","1")
    }

 
  })




function lados(){
let la=document.getElementById("lado1").value
let lb=document.getElementById("lado2").value	
let lc=document.getElementById("lado3").value

const trian=document.getElementById('trian')
const b1=document.querySelector('#campA .feedback')




if (la.length==0 || lb.length==0 || lc.length==0){
	trian.la.setAttribute("class","error")
    b1.textContent="Caracteres invalidos"
    b1.style.setProperty("visibility","visible")
    b1.style.setProperty("opacity","1")

}

else{
		if (lado1===lado2 && lado1===lado3 && lado3===lado2){
			alert("Su triángulo es equilátero")
		}
		if (lado1!==lado2 && lado2!==lado3){
			alert("Su triángulo es escaleno")
		} 
		if ((lado1===lado2 && lado2!==lado3)||(lado1===lado3 && lado1!==lado2)||(lado2===lado3 && lado2!==lado1)){
			alert("Su triángulo es isósceles")
		}
	}
   
}

   


function Calculadora(){
	
	let n1=document.getElementById("n1").value
    let n2=document.getElementById("n2").value	
    let ap=document.getElementById("opciones").value
    ap=parseInt(ap)

    this.n1=n1
	this.n2=n2
	this.suma=suma
	this.resta=resta
	this.multi=multi
	this.divi=divi
	


 function sumar(){
 	let suma=parseInt(this.n1)+parseInt(this.n2)
 	console.log("lA SUMA DE LOS NUMEROS ES", suma)
 }
function restar(){
	let resta=this.n1-this.n2
	console.log("La resta de los numeros" +this.n1+ "y" +this.n2+ "es" + resta)
}
function multip(){
	let multi=this.n1*this.n2
	console.log("La multiplicacion de los numeros" +this.n1+ "y" +this.n2+ "es" + multi)
}
function divid(){
	let divi=this.n1/this.n2
	console.log("La division de los numeros" +this.n1+ "y" +this.n2+ "es" + divi)
}


  
    switch(ap){

    	case "suma":
    	   operacion.sumar()
    	   break;

    	case "resta":
    	   operacion.restar()
    	   break;   

    	case "multi":
    	   operacion.multip()
    	   break;

    	case "divi":
    	   operacion.divid()
    	   break;  
  	    
  	
}
}



document.addEventListener("DOMContentLoaded", function() {
const lor=document.getElementById("#event1");
document.addEventListener('submit', calculadora1); 
});



function calculadora1(e){
	e.preventDefault();

	
	let n1=document.getElementById("n1").value
	n1=parseInt(n1)
    let n2=document.getElementById("n2").value	
    n2=parseInt(n2)
    let ap=document.getElementById("opciones").value

   if (ap==="suma"){
   	let sum=n1+n2
	alert("La suma de " +n1+ " y " +n2+" es " +sum)
       }

  else if(ap==="resta"){    	
    let re=n1-n2
	alert("La resta de " +n1+ " y " +n2+" es " +re)
        
	}
  else if (ap==="Multi"){
    	
    let mul=n1*n2
	alert("La multiplicacion de " +n1+ " y " +n2+" es " +mul)
        
	}
  else if(ap==="divi") {
    let di=n1/n2
	alert("La division de " +n1+ " y " +n2+" es " +di)
        
	}
	else {
		alert("digite un caracter valido")
	}
}





const mo=document.getElementById("menu")
mo.style.setProperty("width","400px")

const fo=document.getElementById("fon")
fo.style.setProperty("margin-top","90px")

const f=document.getElementById("for")
f.style.setProperty("background-color","#E5E6E6") 