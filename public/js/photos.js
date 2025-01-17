const photos = {
  "Parque_Trianon": ["../imgs/parque-trianon.jpg", "../imgs/parque-trianon-2.jpg", "../imgs/parque-trianon-3.jpg"],
  "Museu_de_Arte_de_Sao_Paulo": ["../imgs/masp.jpg", "../imgs/masp-assis-chateaubriand.jpg", "../imgs/masp-pietro-bardi.jpg", "../imgs/masp-aerea.jpg"]
};

showPhotos = (place) => {
  gallery.innerHTML = `
      <div id='carouselExampleControls' class='carousel slide' data-ride='carousel'>
      <div class='carousel-inner'>
        <div class='carousel-item active'>
          <img class='d-block w-100 photo' src='${photos[place][0]}' alt='First slide'>
        </div>
        <div class='carousel-item'>
          <img class='d-block w-100 photo' src='${photos[place][1]}' alt='Second slide'>
        </div>
        <div class='carousel-item'>
          <img class='d-block w-100 photo' src='${photos[place][2]}' alt='Third slide'>
        </div>
      </div>
      <a class='carousel-control-prev' href='#carouselExampleControls' role='button' data-slide='prev'>
        <span class='carousel-control-prev-icon' aria-hidden='true'></span>
        <span class='sr-only'>Previous</span>
      </a>
      <a class='carousel-control-next' href='#carouselExampleControls' role='button' data-slide='next'>
        <span class='carousel-control-next-icon' aria-hidden='true'></span>
        <span class='sr-only'>Next</span>
      </a>
    </div>
  `;
};
