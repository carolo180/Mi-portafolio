press.addEventListener('click',e=>{
	e.preventDefault()


let name1=document.getElementById("name").value
name1=parseInt(name1)

let apellido1=document.getElementById("apellido").value
apellido1=parseInt(apellido1)

let correcto=document.getElementById("correcto")

if (name1==1 && apellido1==1){
	texto=`<p> La respuesta es correcta <img src="img/check.jpg"></p>`
	correcto.innerHTML=texto
	correcto.style.setProperty("visibility","visible")
	correcto.style.setProperty("opacity","1")
	correcto.style.setProperty("transition","all 3s ease")

   }

 else if (name1==2 && apellido1==2){
	texto=`<p> La respuesta es correcta <img src="img/check.jpg"></p>`
	correcto.innerHTML=texto
	correcto.style.setProperty("visibility","visible")
	correcto.style.setProperty("opacity","1")
	correcto.style.setProperty("transition","all 3s ease")

   }
   else if (name1==3 && apellido1==3){
	texto=`<p> La respuesta es correcta <img src="img/check.jpg"></p>`
	correcto.innerHTML=texto
	correcto.style.setProperty("visibility","visible")
	correcto.style.setProperty("opacity","1")
	correcto.style.setProperty("transition","all 3s ease")

   }
   else {
   	texto=`<p> La respuesta es incorrecta <img src="img/wrong.png"></p>`
	correcto.innerHTML=texto
	correcto.style.setProperty("visibility","visible")
	correcto.style.setProperty("opacity","1")
	correcto.style.setProperty("transition","all 3s ease")


   }
})

tres.addEventListener('click',e=>{
	e.preventDefault()
let respuesta=document.getElementById("acertijo")

texto=`<p> La respuesta es incorrecta <img src="img/wrong.png"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","1")
	respuesta.style.setProperty("transition","all 3s ease")
})

cuatro.addEventListener('click',e=>{
	e.preventDefault()
let respuesta=document.getElementById("acertijo")

texto=`<p> La respuesta es correcta <img src="img/check.jpg"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","1")
	respuesta.style.setProperty("transition","all 3s ease")
})

cinco.addEventListener('click',e=>{
	e.preventDefault()
let respuesta=document.getElementById("acertijo")

texto=`<p> La respuesta es incorrecta <img src="img/wrong.png"></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility","visible")
	respuesta.style.setProperty("opacity","1")
	respuesta.style.setProperty("transition","all 3s ease")
})


press1.addEventListener('click',e=>{
	e.preventDefault()

	let palabra=document.querySelector('input[name="palabra"]:checked').value
    palabra=parseInt(palabra)
    
    let cor=document.getElementById("ra")

if (palabra===1){
	texto=`<p> La respuesta es correcta <img src="img/check.jpg"></p>`
	cor.innerHTML=texto
	cor.setAttribute('class','prueba')

   }

   
   else {
   	texto=`<p> La respuesta es incorrecta <img src="img/wrong.png"></p>`
	cor.innerHTML=texto
	cor.setAttribute('class','prueba')


   }
})

press2.addEventListener('click',e=>{
	e.preventDefault()

	let pal=document.querySelector('input[name="pal"]:checked').value
    pal=parseInt(pal)
    
    let core=document.getElementById("ri")

if (pal===1){
	texto=`<p> La respuesta es correcta <img src="img/check.jpg"></p>`
	core.innerHTML=texto
	core.setAttribute('class','pro')

   }
   
   else {
   	texto=`<p> La respuesta es incorrecta <img src="img/wrong.png"></p>`
	core.innerHTML=texto
	core.setAttribute('class','pro')

	}
})

press3.addEventListener('click',e=>{
	e.preventDefault()
	let corec=document.getElementById("ri")
	texto=`<p> Pista: _ R_ Á_ GULO </p>`
	corec.innerHTML=texto
	corec.setAttribute('class','pro')
	press3.style.setProperty("visibility","hidden")
	

	})

press2.addEventListener('click',e=>{
	e.preventDefault()
	let corec=document.getElementById("ri")
	texto=`<p> Solución: Triángulo </p>`
	corec.innerHTML=texto
	corec.setAttribute('class','pro')
	press2.style.setProperty("visibility","hidden")
	

	})
