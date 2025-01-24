// 1° challenge da alura/ONE - Amigo Secreto
let listaDeNomes = [];

let lista = document.getElementById('listaAmigos');
let nomesInseridos = document.getElementById('amigo');
let resultado = document.getElementById('resultado');

function adicionarAmigo() {
    let amigos = nomesInseridos.value.trim();
    if (amigos == '') {
        alert('Digite o nome de algum amigo');
        return;
    }
    if (listaDeNomes.includes(amigos)) {
        alert('Este amigo ja foi adicionado');
        nomesInseridos.value = '';
        return;
    }  

    listaDeNomes.push(amigos); //puxa o nome do amigo para a lista
    atualizarLista();
    nomesInseridos.value = '';
}

function atualizarLista() { // Inserir os nomes na lista
    lista.innerHTML = '';

    listaDeNomes.forEach(amigo => {
     let itemLista = document.createElement('li');
     itemLista.textContent = amigo; //define o texto do item, que é o nome do amigo
     lista.appendChild(itemLista); // adiciona o novo item á lista na tela
    });
}

nomesInseridos.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});


function sortearAmigo() {
    if (listaDeNomes.length == 0) {
        alert('Adicione amigos para sortear!');
        return;
    }

    let nomeSorteado = Math.floor(Math.random() * listaDeNomes.length);
    resultado.innerHTML = `o amigo sorteado é: ${listaDeNomes[nomeSorteado]}`;

}






















