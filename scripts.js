const urlTemp = 'https://api.thingspeak.com/channels/3159128/feeds.json?api_key=SY8EGY52FB7DC1WC&results=1';
const urlFreq = 'https://api.thingspeak.com/channels/3159191/feeds.json?api_key=4H1A89903XG8J1CF&results=1';
const urlOxigen = 'https://api.thingspeak.com/channels/3188878/feeds.json?api_key=2HIR85VDEWQTQX4W&results=1';

freqCard = document.getElementById('freqCard')
temperatura = document.getElementById('temperatura')
oxigen = document.getElementById('oxigen')

async function getData() {
    const responseTemp = await fetch(urlTemp);
    const dataTemp = await responseTemp.json();
    valorTemp = parseFloat(dataTemp.feeds[0]['field1']).toFixed(1);
    temperatura.innerText = `${valorTemp}`;

    const responseFreq = await fetch(urlFreq);
    const dataFreq = await responseFreq.json();
    valorFreq = parseFloat(dataFreq.feeds[0]['field1']).toFixed(1);
    freqCard.innerText = `${valorFreq}`

    const responseOxigen = await fetch(urlOxigen);
    const dataOxigen = await responseOxigen.json();
    valorOxigen = parseFloat(dataOxigen.feeds[0]['field1']).toFixed(1);
    oxigen.innerText = `${valorOxigen}`

    console.log(valorTemps, valorFreq, valorOxigen);
}

setInterval(getData, 20000);
getData();

// async function buscarDados() {
//   const response = await fetch("https://tcc-site-gclc.onrender.com/enviar/");
//   const dados = await response.json();
//   console.log(dados);

//   dados.forEach(mov => {
//     console.log(`Frequência: ${mov.freqCardi}, Pressão: ${mov.presCardi}, Oxigênio: ${mov.oxigen}.`);

//     freqCard.innerText = `${mov.freqCardi}`;
//     presCard.innerText = `${mov.presCardi}`;
//     oxigen.innerText = `${mov.oxigen}`;
//   });
// }

// setInterval(buscarDados, 2000);
// buscarDados();

// fetch("https://tcc-site-gclc.onrender.com/enviar/")
//   .then(res => res.json())
//   .then(data => console.log(data))
