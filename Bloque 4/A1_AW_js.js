function comprobar() {
        let clave = document.getElementById("pass").value;
        if (clave.length < 7 || clave.length > 20) {
                alert("La contraseña debe tener entre 7 y 20 caracteres.");
            }
        }