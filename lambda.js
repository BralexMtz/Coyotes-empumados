exports.handler = async (event,context,callback) => {
    // TODO implement
    var nombre = event.nombre;
    var puntosBuro = parseInt(event.puntosBuro);
    var puntoSAT = parseInt(event.puntoSAT);
    var ingresoMensual = parseInt(event.ingresoMensual);
    var prestamo = parseFloat(event.pedidoPrestamo);
    var meses = parseFloat(event.propuestaPago);
    console.log(event)

    var puntos = (puntosBuro+puntoSAT)/2;
    var interes;
    var caso=0;

    console.log(puntos);
    console.log(ingresoMensual);
    if (puntos >= 85 && ingresoMensual > prestamo*0.083 ) {
        prestamo = prestamo*1.1;
         interes = prestamo*1.25;
         caso = 1;
    }else if (puntos <= 85 && puntos > 60 && ingresoMensual > prestamo*0.041 ){
         interes = prestamo*1.21;
         caso = 2;
        if(meses>36){
            meses=36;
        }
    }else if(puntos<=60 && puntos >= 45 && ingresoMensual > prestamo*0.021){
        prestamo=prestamo*0.75;
        interes=prestamo*1.35;
        meses = 24;
        caso = 3;
    }else if(puntos<45 && ingresoMensual < prestamo*0.021){
        prestamo=0;
        interes=0;
        meses=0;
        caso = 4;
    }else{
        prestamo=0;
        interes=0;
        meses=0;
        caso = 5;
    }

    console.log("Prueba de "+ event.nombre);

    const response = {
        nom: (nombre),
        presta : JSON.stringify(prestamo),
        inte : JSON.stringify(interes),
        mes : JSON.stringify(meses),
        cas: JSON.stringify(caso),
    };
    return response;
};
