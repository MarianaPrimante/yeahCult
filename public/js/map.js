flip = () => {
  $('.card').toggleClass('flipped');
}


initMap = () => {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -23.5629,
      lng: -46.6544
    },
    zoom: 15
  });
  let locations = [
    ['Museu_de_Arte_de_São_Paulo', -23.561414, -46.6558819],
    ['Parque_Trianon', -23.5623276, -46.6573249],
  ]
  for (i = 0; i < locations.length; i++) {
    let homeMarker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      title: locations[i][0],
      map: map
    });

    homeMarker.addListener('click', function () {
      window.location = `wiki.html?placeName=${homeMarker.title}`;
    });
  }
}
