$("#formulario").validate({
    rules:{
        nombre:{
            Required:true,
            minlength:3
        },
        email:{
            Required:true,
            email:true
        },
        numero:{
            Required:true,
            numero:true
        },
        fecha:{
            Required:true,
            fecha:true
        },
        contraseña:{
            Required:true,
            minlength:5
        },
        r_contraseña:{
            Required:true,
            minlength:5
        }
    }
})
$("#guardar").click(function(){
    let nombre=$("#nombre").value()
    let email=$("#nombre").value()
    let numero=$("#numero").value()
    let fecha=$("#fecha").value()
    let contraseña=$("#contraseña").value()
    let r_contraseña=$("#r_contraseña").value()
    console.log(nombre)
})
