function redireccionar() {
    var num = Math.random() * 3; // se guarda en num un valor comprendido entre 0.00001 y 2.99999
    num = parseInt(num); // guardamos solo la parte entera de la variable num
    if (num == 0) {
        window.location = 'http://www.outlook.com';
    } else if (num == 1) {
        window.location = 'http://www.gmail.com';
    } else if (num == 2) {
        window.location = 'http://www.yahoo.com';
    }
}