const chaveDaApi = "7d45fd35c36042b0875230237242403"

const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;

    if (!cidade) return;

    const dados = await buscarDadosDaCidade(cidade);

    if (dados) preencherDadosNaTela(dados, cidade);
})

async function buscarDadosDaCidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${"7d45fd35c36042b0875230237242403"}&q=${cidade}&aqi=no&lang=pt`;

    const response = await fetch(apiUrl);

    if (response.status !== 200) return;

    const dados = response.json();

    return dados;

}

function preencherDadosNaTela(dados, cidade) {
    const hora = dados.location.localtime;
    const temperatura = dados.current.temp_c;
    const condicao = dados.current.condition.text;
    const humidade = dados.current.humidity;
    const velocidadeDoVento = dados.current.wind_kph;
    const iconeCondicao = dados.current.condition.icon;


    document.getElementById("cidade").textContent = cidade;
    document.getElementById("hora").textContent = hora;
    document.getElementById("temperatura").textContent = `${temperatura}°C`;
    document.getElementById("condicao").textContent = condicao;
    document.getElementById("humidade").textContent = `${humidade}%`;
    document.getElementById("velocidade-do-vento").textContent = `${velocidadeDoVento}km/h`;
    document.getElementById("icone-condicao").setAttribute("src", iconeCondicao)


}