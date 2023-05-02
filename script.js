const nome = document.getElementById('nome')
let tel = document.getElementById('tel')
const tbody = document.getElementById('tbody')

const contatos = []
const numeros = []

addEventListener('submit', function(e) {
    e.preventDefault()

    if (contatos.includes(nome.value) || numeros.includes(tel.value)) {
        alert(`O contato ${nome.value} ou o telefone ${tel.value} já foi adicionado!`)
    } else {
        const linha = document.createElement('tr')
        linha.innerHTML = `<td>${nome.value}</td><td>${tel.value}</td>`
        tbody.appendChild(linha)
    
        contatos.push(nome.value)
        numeros.push(tel.value)
    }   
})
