function muestra(arregloFin){

   $("#saludo").html("Bienvenido "+arregloFin["nom"]);
   $("#formulario").hide();
   $("#cartaFin").show();
   switch (arregloFin["cas"]) {
       case '1':
           x='<select><option val="1">6 meses</option><option val="2">12 meses</option><option val="3">'+arregloFin["mes"]+' meses</option></select>';
           $("#cotizacion").html("Se le otorga un credito de $"+Math.floor(arregloFin["presta"])+" + el 25% de intereses dando un total de $"+Math.floor(arregloFin["inte"]));
           $("#informacion").html("Elige a cuanto quieres aplazar el pago   "+x);
           break;
       case '2':
           x='<select><option val="1">12 meses</option><option val="2">'+arregloFin["mes"]+' meses</option></select>';
           $("#cotizacion").html("Se le otorga un credito de $"+Math.floor(arregloFin["presta"])+" + el 29% de intereses dando un total de $"+Math.floor(arregloFin["inte"]));
           $("#informacion").html("Elige a cuanto quieres aplazar el pago   "+x);
           break;
       case '3':
           x='<select><option val="1">12 meses</option><option val="2">'+arregloFin["mes"]+' meses</option></select>';
           $("#cotizacion").html("Se le otorga un credito de $"+Math.floor(arregloFin["presta"])+" + el 35% de intereses dando un total de $"+Math.floor(arregloFin["inte"]));
           $("#informacion").html("Elige a cuanto quieres aplazar el pago   "+x);
           break;
       default:
           $("#cotizacion").html("Lo sentimos la Propuesta Fue Rechazada");
           $("#informacion").html("Cualquier aclaracion porfavor contactenos");
           break;
   }
 }
function fin(){
  window.alert("Tu proceso a terminado, Gracias por elegir Konfío");
  window.location="file:///C:/xampp5.6/htdocs/HackMX/index.html";
}
function enviarDatos(val1,val2,val3,val4,val5,val6){
  if(val1=="" || val2=="" || val3=="" || val4=="" || val5=="" || val6==""){
    alert("Porfavor, Complete todos los campos");
    if(val1!="")
      $("#nombre").val=val1;
    if(val2!="")
        $("#buro").val=val2;
    if(val3!="")
      $("#sat").val=val3;
    if(val4!="")
      $("#ingreso").val=val4;
    if(val5!="")
      $("#pedido").val=val5;
    if(val6!="")
      $("#propuesta").val=val6;
  }else{
    var parametros ={
        "nombre" : val1,
        "puntosBuro" : val2,
        "puntoSAT" : val3,
        "ingresoMensual" : val4,
        "pedidoPrestamo" : val5,
        "propuestaPago" : val6
    };
    para=JSON.stringify(parametros);
    console.log(para);
    $.ajax({
        data: para,
        url: "https://ttuea0pe5b.execute-api.us-east-1.amazonaws.com/stage-konfio",
        type: 'POST',
        success: function(res){
          muestra(res);
        },
        failed: function(){
          $("#cotizacion").html("ERROR Intente mas Tarde");
        }
       });
     }
  }

  function puntos(dat){
    var num = dat.value;
    if (num > 100) {
      dat.value="";
      alert("Solo se aceptan numeros entre 0 y 100");
    }else if(num < 0){
      dat.value="";
      alert("Solo se aceptan numeros entre 0 y 100");
    }
  }

    function naturales(dat){
      var num = dat.value;
      if(num < 0){
        dat.value="";
        alert("Solo se aceptan numeros mayores a 0 ");
      }
   }
