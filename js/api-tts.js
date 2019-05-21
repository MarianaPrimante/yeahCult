const voiceUrl = 'http://api.voicerss.org/';
const apiKey = '4f7e97301b1f4542b90ca9ffaa0c9e81';

function fetchTTS(text) {
  fetch(`${voiceUrl}?key=${apiKey}&hl=pt-BR&src=${text}&f=48khz_16bit_stereo`)
    .then(resp => {
      player.preload = 'auto';
      const source = document.createElement('source');
      source.type = 'audio/wav';
      source.src = resp.url;

      player.appendChild(source);
    })
    .catch(error => {
      errorMsg.textContent = error + 'Erro. Não foi possível carregar o áudio!';
    });
}