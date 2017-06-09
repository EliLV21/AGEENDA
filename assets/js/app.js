$(document).ready(function(){
  $("#enviar").click(function(){
    var textoNombre = $("#contenedorNombre").val();
    var textoTelefono = $("#contenedorTelefono").val();
    var nombre = $("<p></p>");
    var telefono =$("<p></p>");
    var espacio = $("#contenedor");
    var listaContacto = $("<li class='collection-item avatar'></li>");
    var imagenIcono = $("<img class='circle' src='assets/img/img1.jpg'>");
    var directorio = $(".collection");
    var icono = $("<a class='secondary-content'><i class='material-icons'>grade</i></a>");

    directorio.append(listaContacto);
    listaContacto.append(imagenIcono);
    listaContacto.append(nombre);
    nombre.text(textoNombre);
    listaContacto.append(telefono);
    telefono.text(textoTelefono);
    listaContacto.append(icono);
    espacio.preppend(directorio);


  });



});
