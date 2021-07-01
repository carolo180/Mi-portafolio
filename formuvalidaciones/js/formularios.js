/*document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});
const clave1=/^(?=(?:.\d){6})(?=(?:.[A-Z]){1})(?=(?:.*[a-z]){1})\S{6,}$/

function validarFormulario(e) {
  e.preventDefault();
  let usuario = document.getElementById('usuario').value;
  if(usuario.length == 0) {
    alert('No has escrito nada en el usuario');
    return;
  }
  let clave = document.getElementById('clave').value;
  if (clave.length < 6) {
    alert('La clave no es válida');
    return;
  }
  /*
  /* 1. validar contraseña que tenga una mayuscula una minuscula y numeros y 
  de tamaño mayor a 6 caracteres.
  2. ingresar un usuario y contraseña predeterminada y realizar validación
  a. si es correcto que muestre la pagina.
  b. si es incorrecto que aperezca mensaje de datos errados ya sea usuario 
  o clase o los dos*/
 
/*
  this.submit();
}
*/






/*let form=document.querySelector('#formulario')
const fel=document.querySelector('#campoUsuario .feedback')


  const usuario=/^[A-Z-a-z-0-9]{6,15}/

  form.usuario.addEventListener('input',e=>{
  e.preventDefault()

 
  if(usuario.test(e.target.value)){
    form.usuario.setAttribute("class","success")
    fel.textContent="Datos validos"
    fel.style.setProperty("visibility","hidden")
    fel.style.setProperty("opacity","0")
    
  }

  else{
    form.usuario.setAttribute("class","error")
    fel.textContent="Datos invalidos"
    fel.style.setProperty("visibility","visible")
    fel.style.setProperty("opacity","1")
  }
  

  
})


 let form1=document.querySelector('#formulario')
 const feo=document.querySelector('#campoClave .feedback')


  const clave=/^\w{1,20}[a-zA-Z]{1}\d{1,18}/

  form1.clave.addEventListener('input',e=>{
  e.preventDefault()

 
  if(clave.test(e.target.value)){
    form1.clave.setAttribute("class","success")
    feo.textContent=""
    feo.style.setProperty("visibility","hidden")
    feo.style.setProperty("opacity","0")
    
  }

  else{
    form1.clave.setAttribute("class","error")
    feo.textContent="Contraseña invalida,(digite un minimo de 6 caracteres, y al menos una letra mayuscula y una minuscula)"
    feo.style.setProperty("visibility","visible")
    feo.style.setProperty("opacity","1")
  }
  
})
 

 document.addEventListener("DOMContentLoaded", function() {
 document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});




function validarFormulario(e) {
  e.preventDefault()

   let usu="carola"
   let cla="carol123"

  let usuario1 = document.getElementById('usuario').value;
  let clave1 = document.getElementById('clave').value;

  if(usuario1===usu && clave1===cla){
    alert('Bienvenido');
    return
  }
  else if (usuario1!==usu && clave1!==cla) {
    alert('Usuario y contraseña incorrecta');
    return; 
  }
  
  else if (clave1!==cla) {
    alert('contraseña incorrecta');
    return;
   }
  else if(usuario1!==usu) {
    alert('Usuario incorrecto');
    return;  

   this.submit(); 
 }
   
 }
 */
/* let form1=document.querySelector('#formulario')
 const feo=document.querySelector('#campoUsuario .feedback')


  const usuario=/[a-zA-Z´]{5,10}/

  form1.usuario.addEventListener('input',e=>{
  e.preventDefault()

 
  if(usuario.test(e.target.value)){
    form1.usuario.setAttribute("class","success")
    feo.textContent="palabra valida"
    feo.style.setProperty("visibility","hidden")
    feo.style.setProperty("opacity","0")
    
  }

  else{
    form1.usuario.setAttribute("class","error")
    feo.textContent="Palabra invalida, digite una palabra de minimo 5 caracteres"
    feo.style.setProperty("visibility","visible")
    feo.style.setProperty("opacity","1")
  }
  
})
  //julio anibal niño..texto

 let form2=document.querySelector('#formulario')
 const fea=document.querySelector('#campoNombre .feedback')


  const nombre=/[A-zñÑáéíóúÁÉÍÓÚ\s]/

  form2.nombre.addEventListener('input',e=>{
  e.preventDefault()

 
  if(nombre.test(e.target.value)){
    form2.nombre.setAttribute("class","success")
    fea.textContent="palabra valida"
    fea.style.setProperty("visibility","hidden")
    fea.style.setProperty("opacity","0")
    
  }

  else{
    form2.nombre.setAttribute("class","error")
    fea.textContent="Palabra invalida, digite una palabra de minimo 5 caracteres"
    fea.style.setProperty("visibility","visible")
    fea.style.setProperty("opacity","1")
  }
  
})
 let form1=document.querySelector('#formulario')
 const feo=document.querySelector('#campoUsuario .feedback')


   const usuario=/[a-zA-Z´]{5,10}/

  form1.usuario.addEventListener('input',e=>{
  e.preventDefault()

 
  if(usuario.test(e.target.value)){
     console.log('Palabra admitida');
    return
    
  }

  else{
    console.log('Palabra no admitida');
    return
  }
  
})

 

 document.addEventListener("DOMContentLoaded", function() {
 document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

 function validarpalabra(e) {
  e.preventDefault()

   const clave=/[a-zA-Z´]/

  let usuario1 = document.getElementById('usuario').value;
  let clave1 = document.getElementById('clave').value;

  if(palabra===carolinalo || palabra===CAROLINALO){
    alert('Palabra admitida');
    return
  }
  else if (usuario1!==usu && clave1!==cla) {
    alert('Usuario y contraseña incorrecta');
    return; 
  }
  
  else if (clave1!==cla) {
    alert('contraseña incorrecta');
    return;
   }
  else if(usuario1!==usu) {
    alert('Usuario incorrecto');
    return;  

   this.submit(); 
 }
   
 }
 
 let form1=document.querySelector('#formulario')
 const feo=document.querySelector('#campoDirecc .feedback')


  const direc=/^[A-Z-a-z-0-9\s#-]+$/

  form1.direc.addEventListener('input',e=>{
  e.preventDefault()

 
  if(direc.test(e.target.value)){
    form1.direc.setAttribute("class","success")
    feo.textContent="palabra valida"
    feo.style.setProperty("visibility","hidden")
    feo.style.setProperty("opacity","0")
    
  }

  else{
    form1.direc.setAttribute("class","error")
    feo.textContent="Dirrecion invalida"
    feo.style.setProperty("visibility","visible")
    feo.style.setProperty("opacity","1")
  }
  
})

*/

  let form1=document.querySelector('#formulario')
 const feo=document.querySelector('#campoCorreo .feedback')


  const correo1=/^[A-Z-a-z-0-9\s-@._]+$/

  form1.correo.addEventListener('input',e=>{
  e.preventDefault()

 
  if(correo1.test(e.target.value)){
    form1.correo.setAttribute("class","success")
    feo.style.setProperty("visibility","hidden")
    feo.style.setProperty("opacity","0")
    
  }

  else{
    form1.correo.setAttribute("class","error")
    feo.textContent="Caracteres invalidos"
    feo.style.setProperty("visibility","visible")
    feo.style.setProperty("opacity","1")
  }
  
})

let form2=document.querySelector('#formulario')
 const n=document.querySelector('#campoNumero .feedback')


  const numero=/^[0-9-]{5,15}/

  form2.num.addEventListener('input',e=>{
  e.preventDefault()

 
  if(numero.test(e.target.value)){
    form2.num.setAttribute("class","success")
    n.style.setProperty("visibility","hidden")
    n.style.setProperty("opacity","0")
    
  }

  else{
    form2.num.setAttribute("class","error")
    n.textContent="Caracteres invalidos"
    n.style.setProperty("visibility","visible")
    n.style.setProperty("opacity","1")
  }
  
})
  

 

  form2.addEventListener('submit',e =>{
    e.preventDefault()

    let cor=document.getElementById('correo').value
    let num=document.getElementById('num').value
    let sig=document.getElementById('sig1').value
    let sig2=document.getElementById('sig2').value
    let text1=document.getElementById('text').value
    
     
 

    if(cor==0){
      alert("Digite el correo electronico")
      document.formi.correo.focus()

    }
    else if(num==0){
       alert("Digite el numero telefonico")
       document.formi.num.focus()

    }
    else if(!document.querySelector("input[name='genero']:checked")){
       alert("Seleccione una red social")
       document.formi.redes.focus()
            
    }
    else if(sig==0){
       alert("Seleccione unreproductor")
       document.formi.selec.focus()
    }
     else if(sig2==0){
       alert("Seleccione un navegador")
       document.formi.selec2.focus()
    }
     
     else if(text1==0){
       alert("Digite su opinion")
       document.formi.observaciones.focus()
    }
    else{
      form2.submit()
      alert("Datos validos, la encuesta se ha enviado")
    }

  })


  



/*else if(!form2.querySelector("input[name='genero']:checked")){
       alert("Seleccione una red social")
       document.formi.genero.focus()
            
    }
    
    else if(!form2.querySelector("input[name='sig']:checked")){
       alert("Seleccione una opcion")
       document.formi.selec.focus()
    }

*/



  

