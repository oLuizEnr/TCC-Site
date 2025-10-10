// const channelId = 2978477;
// const url = 'https://api.thingspeak.com/channels/{channelId}/feeds.json?results=2';

// freqCard = document.getElementById('freqCard')
// presCard = document.getElementById('presCard')
// oxigen = document.getElementById('oxigen')

// async function getData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     dados_atuais = data.feeds[data.feeds.length - 1]
//     console.log(dados_atuais);

//     oxigen.innerText = `100`
//     freqCard.innerText = `${dados_atuais.field1}`
//     presCard.innerText = `${dados_atuais.field2}`
// }

// setInterval(getData, 20000);
// getData();

fetch("https://seusite.com/api/dados/")
  .then(res => res.json())
  .then(data => console.log(data))