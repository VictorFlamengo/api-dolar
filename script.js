const apikey = 'ac17baca3778890db1da7ac8'
const apikeyhist = 'f30634439113c99f401ef30b'
const URL = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`
const data = new Date();
data.setDate(1)
const dia = data.getDate()
const mes = data.getMonth()+1
const ano = data.getFullYear()
const URL_HISTORICO = `https://v6.exchangerate-api.com/v6/${apikey}/history/USD/YEAR/MONTH/DAY`

function atualizarPreco() {
 fetch(URL).then(Response => {
    if(!Response.ok){
        console.log("erro ao buscar a API")
    }
    else{
    return Response.json()
    }
 })

.then(data => {
    const precodolar = data.conversion_rates.BRL;
    document.getElementById('precodolar').textContent = `R$ ${precodolar}`
})
}

function dataprime() {
    const hoje = new Date()
    hoje.setDate(1)
    return hoje.toLocaleDateString()
}
    
document.getElementById('dia-mes').textContent = `Data do Preço ${dataprime()}`

function precohisto() {
fetch(URL_HISTORICO).then(Response => {
    if(!Response.ok){
        console.log("erro ao buscar a o valor do começo do mês")
    }

    else{
        return Response.json()
    }
})

.then(data => {
    const precoinicial = data.conversion_rates.BRL
    document.getElementById('precoinicial').textContent = `Preço no começo do mes: ${precoinicial}`
})
}

document.addEventListener('DOMContentLoaded', function(){
    atualizarPreco()
    precohisto()
})


