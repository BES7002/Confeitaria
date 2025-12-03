alert('oi foi carregado');

async function criarItemCardapio() {
    try {
        // Fazendo a requisição para obter os dados
        const response = await fetch('https://confeitaria-api-wlky.onrender.com/cardapio');
        
        // Verificando se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Falha na requisição');
        }

        alert(response)
        // Extraindo os dados do JSON
        const dados = await response.json();

        // Criando o item do cardápio com base nos dados recebidos
        const divItemCardapio = document.createElement('div');
        divItemCardapio.className = 'item-cardapio';

        // Criando e preenchendo o título
        const h3Titulo = document.createElement('h3');
        h3Titulo.textContent = dados.nome;

        // Criando e preenchendo a descrição
        const pDescricao = document.createElement('p');
        pDescricao.className = 'descricao';
        pDescricao.textContent = dados.descricao;

        // Criando a imagem (foto)
        const img = document.createElement('img');
        img.src = dados.foto; // Aqui é esperado que "foto" seja o caminho da imagem
        img.className = 'img-item';

        // Criando o preço
        const pPreco = document.createElement('p');
        pPreco.className = 'preco';
        pPreco.textContent = `R$ ${dados.preco.toFixed(2)}`;

        // Selecionando o container do cardápio onde os itens serão adicionados
        const divC = document.getElementById('cardapio');

        // Adicionando os elementos criados ao divItemCardapio
        divItemCardapio.appendChild(h3Titulo);
        divItemCardapio.appendChild(pDescricao);
        divItemCardapio.appendChild(img);
        divItemCardapio.appendChild(pPreco);

        // Adicionando o item ao container
        divC.appendChild(divItemCardapio);
    } catch (error) {
        console.error('Erro ao carregar o cardápio:', error);
    }
}

// Chama a função para criar o item no cardápio
criarItemCardapio();
