const resultado = document.getElementById("resultado");

        function precio(pizza) 
        {
            switch (pizza) 
            {
                case "jamon":
                    resultado.value = "10€"
                    break;
                case "mexicana":
                    resultado.value = "25€"
                    break;
                case "barbacoa":
                    resultado.value = "5€"
                    break;
                case "muzzarella":
                    resultado.value = "20€"
                    break;
                case "morrones":
                    resultado.value = "30€"
                    break;
            }
        }