// const channelId = 2978477;
// const url = 'https://api.thingspeak.com/channels/{channelId}/feeds.json?results=2';

freqCard = document.getElementById('freqCard')
presCard = document.getElementById('presCard')
oxigen = document.getElementById('oxigen')

// async function getData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     dados_atuais = data.feeds[data.feeds.length - 1]
//     console.log(dados_atuais);

//     oxigen.innerText = `100`
    // freqCard.innerText = `${dados_atuais.field1}`
    // presCard.innerText = `${dados_atuais.field2}`
// }

// setInterval(getData, 20000);
// getData();

async function buscarData() {
  const response = await fetch("https://tcc-site-gclc.onrender.com/enviar/");
  const dados = await response.json();
  console.log(dados);

  dados.forEach(mov => {
    console.log(`Frequência: ${mov.freqCardi}, Pressão: ${mov.presCardi}, Oxigênio: ${mov.oxigen}.`);

    freqCard.innerText = `${mov.freqCardi}`;
    presCard.innerText = `${mov.presCardi}`;
    oxigen.innerText = `${mov.oxigen}`;
  });
}

setInterval(buscarDados, 2000);
buscarDados();

fetch("https://tcc-site-gclc.onrender.com/enviar/")
  .then(res => res.json())
  .then(data => console.log(data))
