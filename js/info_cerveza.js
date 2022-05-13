$("btn-cargar").click(function (event) {
    event.preventDefault();
    var url = "https://api.punkapi.com/v2/beers/random";
  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
    fetch(url)
        .then(response => response.json())
        .then(data => 
            {
                var $nombre_cerveza = $('<h1>').text(data[0].name);
                var $grados = $('<p>').text(data[0].abv);
                var $tem=$('<p>').text(data[0].volume.value)
                var $foto_cerveza = $("<p><img src='"+data[0].image_url+"'>");
                  // para limpiar el contedor antes de desplegar
                $("#info").empty();
                $('#info')
                    .append($nombre_cerveza)
                    .append($grados)
                    .append($tem)
                    .append($foto_cerveza);
            })
        .catch(error => console.error(error));
});
