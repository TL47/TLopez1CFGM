function concatenarTexto() 
        {
            let nombre = document.getElementById("nombre").value;
            let apellido = document.getElementById("apellido").value;

            if (nombre === "" || apellido === "") 
            {
                alert("Rellenes ambos campos");
                return;
            }
            let suma = nombre + " " + apellido;
            document.getElementById("resultado").value = suma;
        }