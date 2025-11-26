const channelId = 3159128;
const url = 'https://api.thingspeak.com/channels/3159128/feeds.json?api_key=SY8EGY52FB7DC1WC&results=2';

freqCard = document.getElementById('freqCard')
presCard = document.getElementById('presCard')
oxigen = document.getElementById('oxigen')

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    dados_atuais = data.feeds[data.feeds.length - 1]
    console.log(dados_atuais);
    valor = dados_atuais.field2.toFixed(1)
    dado = dados_atuais.field3
    dado_tratado = dado.toFixed(1)

    oxigen.innerText = `${dados_atuais.field1.toFixed(1)}`
    freqCard.innerText = `${valor}`
    presCard.innerText = `${dado_tratado}`
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
