function deportes()
        {
            const deportes=document.getElementsByName("deportes");
            let texto = "Los deportes que practica son: ";

            for (let i=0;i<deportes.length;i++) 
            {
                if (deportes[i].checked) 
                {
                    mensaje+=deportes[i].value +", ";
                }
            }
            alert(texto);
        }