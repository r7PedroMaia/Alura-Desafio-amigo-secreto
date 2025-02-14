//declarando array amigos
let amigos = [];

//Função para adicionar amigo
function adicionarAmigo() {
	let nomeInput = document.getElementById('amigo');
	let nome = nomeInput.value.trim();

	//Validação: campo não pode estar vazio
	if (!nome) {
		alert("Por favor, insira um nome.");
		return;
	}

	//Adiciona o nome ao array de amigos
	amigos.push(nome);

	//Atualiza a lista exibida na tela
	atualizarListaAmigos();

	//Limpa o campo de entrada
	nomeInput.value = "";
	nomeInput.focus(); // Melhor usabilidade: foca novamente no campo
}

//Atualizar lista de amigos
function atualizarListaAmigos() {
	let listaAmigos = document.getElementById('listaAmigos');
	listaAmigos.innerHTML = "";

	amigos.forEach(amigo => {
		const li = document.createElement('li');
		li.textContent = amigo;
		li.classList.add('name-item'); //Classe para estilização futura, se necessário
		listaAmigos.appendChild(li);
	});
}

//Função para sortear um amigo
function sortearAmigo() {
	const resultado = document.getElementById('resultado');

	//Verificar se o array está vazio
	if (amigos.length === 0) {
		alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
		return;
	}

	//Geração do índice aleatório e obtenção do nome sorteado
	const indiceAleatorio = Math.floor(Math.random() * amigos.length);
	const amigoSorteado = amigos[indiceAleatorio];

	//Exibição do resultado
	resultado.innerHTML = `<li class="result-item">Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}
