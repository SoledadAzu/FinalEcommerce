
const $nombre=document.querySelector('#nombre')
const $errorN=document.querySelector('#errorN')
const $password=document.querySelector("#password")
const $errorP=document.querySelector('#errorP')
/*const icono=document.querySelector('#icono')*/


const validate ={
    nombre:false,
    password:false
   
}


$nombre.addEventListener("keyup",e=>{
    const validate = /^[a-zA-Z\sñáéíóú]/

    if(validate.test(e.target.value)){
        
        $nombre.classList.add("correcto")
        $nombre.classList.remove("error")
        $errorN.innerHTML=""
        validate.nombre= true

 
    }else if(e.target.value==""){
        $nombre.classList.remove("correcto")
        $nombre.classList.add("error")
        $errorN.innerHTML = "Este campo no puede estar vacio"
       

     }else{
        $nombre.classList.add("error")
        $nombre.classList.remove("correcto")
        $errorN.innerHTML='Nombre invalido'
        validate.nombre=false
        

        

    }

   /* funcValidate(validate)*/
    
})

$password.addEventListener("keyup",e=>{
    const validate = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if(validate.test(e.target.value)){
         
      $password.classList.add("is-valid")
      $password.classList.remove("is-invalid")
      $errorP.innerHTML=""
      validate.password= true


 
    }else if(e.target.value==""){
        $password.classList.remove("is-valid")
        $password.classList.add("is-invalid")
        $errorP.innerHTML = "Este campo no puede estar vacio"
        

     }else{
         $password.classList.add("is-invalid")
         $password.classList.remove("is-valid")
         $errorP.innerHTML="contraseña invalida"
         validate.password= false
         
        

    }

   /* funcValidate(validate)*/
    /*valida los campos*/
    
})


/*icono.addEventListener("click", function () {
    const icon = this.querySelector("i");

    if(this.nextElementSibling.type === "password"){
        this.nextElementSibling.type = "text";
        icono.classList.remove("icon: lock");
        icono.classList.add("");
    } else {
        this.nextElementSibling.type = "password";
        icono.classList.remove("");
        icono.classList.add("icon: lock");
    };
})*/