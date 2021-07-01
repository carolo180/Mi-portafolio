press.addEventListener('click',e=>{
	e.preventDefault()

let dia1=document.getElementById("dia").value
dia1=parseInt(dia1)

let mes1=document.getElementById("mes").value
mes1=parseInt(mes1)

let parra=document.getElementById("parra")

if ((mes1==11 && dia1>=21)||(mes1==12 && dia1<=21)) {
	texto=`<p> Su signo zodiacal es Sagitario <img src="img/sagi.png"></p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }

 else if ((mes1==12 && dia1>21)||(mes1==1 && dia1<=21)) {
	texto=`<p> Su signo zodiacal es Capricornio <img src="img/capri.png"></p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((mes1==1 && dia1>21)||(mes1==2 && dia1<=21)) {
	texto=`<p> Su signo zodiacal es Acuario <img src="img/acuario.png"></p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((mes1==2 && dia1>21)||(mes1==3 && dia1<=21)) {
	texto=`<p> Su signo zodiacal es Piscis <img src="img/piscis.png"></p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((mes1==3 && dia1>21)||(mes1==4 && dia1<=21)) {
	texto=`<p> Su signo zodiacal es Aries <img src="img/aries.png"></p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((mes1==4 && dia1>21)||(mes1==5 && dia1<=21)) {
	texto=`<p> Su signo zodiacal es Tauro <img src="img/tauro.png"></p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((mes1==5 && dia1>21)||(mes1==6 && dia1<=21)) {
	texto=`<p> Su signo zodiacal es Geminis <img src="img/geminis.png"></p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((mes1==6 && dia1>21)||(mes1==7 && dia1<=21)) {
	texto=`<p> Su signo zodiacal es Cancer <img src="img/cancer1.png"></p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((mes1==7 && dia1>21)||(mes1==8 && dia1<=21)) {
	texto=`<p> Su signo zodiacal es Leo <img src="img/leo.png"></p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((mes1==8 && dia1>21)||(mes1==9 && dia1<=21)) {
	texto=`<p> Su signo zodiacal es Virgo <img src="img/virgo.png"></p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((mes1==9 && dia1>21)||(mes1==10 && dia1<=21)) {
	texto=`<p> Su signo zodiacal es Libra <img src="img/libra.png"></p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((mes1==10 && dia1>21)||(mes1==11 && dia1<=21)) {
	texto=`<p> Su signo zodiacal es Escorpio <img src="img/scorpio.png"></p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
})








