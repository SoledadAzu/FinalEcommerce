
const $nombre=document.querySelector('nombre')
const $errorN=document.querySelector('errorN')
const $password=d.querySelector("password")
const $errorP=d.querySelector('errorP')
const iconEye=d.querySelector('iconEye')


const validate ={
    nombre:false,
    password:false
   
}


$nombre.addEventListener("keyup",e=>{
    const validate = /^[a-zA-Z\sñáéíóú]/

    if(validate.test(e.target.value)){
        
        $nombre.classList.add("is-valid")
        $nombre.classList.remove("is-invalid")
        $errorN.innerHTML=""
        validate.nombre= true

 
    }else if(e.target.value==""){
        $nombre.classList.remove("is-valid")
        $nombre.classList.add("is-invalid")
        $errorN.innerHTML = "Este campo no puede estar vacio"
       

     }else{
        $nombre.classList.add("is-invalid")
        $nombre.classList.remove("is-valid")
        $errorN.innerHTML='Nombre invalido'
        validate.nombre=false
        

        

    }

    funcValidate(validate)
    
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

    funcValidate(validate)
    
})

formulario.addEventListener("submit", e =>{
    /*e.preventDefault()*/

})



iconEye.addEventListener("click", function () {
    const icon = this.querySelector("i");

    if(this.nextElementSibling.type === "password"){
        this.nextElementSibling.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        this.nextElementSibling.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    };
});




/*<input class="uk-input" type="text" placeholder="Nombre de usuario | Email" name="nombre"> */