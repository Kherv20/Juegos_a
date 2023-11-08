var usuarios=[
    {
        userName:"Juan",
        userLastName:"Perez",
        email:"jperez@gmail.com",        
        password:"admin123"
    },
    {
        userName:"Juana",
        userLastName:"Medrano",
        email:"jmedrano@gmail.com",        
        password:"vendedor123"
    }
]

function usuarioRegistrado(userName, password){
    Array.prototype.findBy = function (userName, password) {
        for (var i=0; i<this.length; i++) {
            var object = this[i];
            console.log("Usuario: " + object.userName + " " + "Password: " + object.password)
            if ((object.userName == userName) && (object.password == password)) {
                return true
            }
        }
        return false;
    }
    let contenedor = document.getElementById("contenidoLogin") 
    let html = ""
    if (usuarios.findBy(userName, password)){
        html = `<h1>BIENVENIDO AL SISTEMA</h1>
                <p>Usted ha ingresado como ${userName}</p>`
    }
    else{
        html = `<h1>ERROR EN EL ACCESO AL SISTEMA</h1>
                <p>Revisa tus credenciales.</p>`
    }
    contenedor.innerHTML = html
}

function registrarUsuario(nombre, apellido, email, password){
    let nuevoUsuario = {
        userName: nombre.value,
        userLastName: apellido.value,
        email: email.value,
        password: password.value
    }

    let numUsuario = usuarios.push(nuevoUsuario)
    console.log("Nro de usuario registrado: " + numUsuario)
    alert("Usuario registrado")
    return (numUsuario>0)
}

