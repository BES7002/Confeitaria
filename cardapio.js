alert('oi foi carregado')



function criarItemCardapio(titulo, descricao, foto) {
    const divItemCardapio = document.createElement('div');
    divItemCardapio.className = 'item-cardapio';

    const h3Titulo = document.createElement('h3');
    h3Titulo.textContent = titulo;

    const pDescricao = document.createElement('p');
    pDescricao.className = 'descricao';
    pDescricao.textContent = descricao;

    const img = document.createElement('img');
    img.src = foto;
    img.className = 'img-item';

    const divC = document.getElementById('cardapio')

    divItemCardapio.appendChild(h3Titulo)
    divItemCardapio.appendChild(pDescricao)
    divItemCardapio.appendChild(img)

    divC.appendChild(divItemCardapio);
}

criarItemCardapio('Bolo de chocolate', 'Um classico irresistível com camadas de chocolate.', 'https://images.food52.com/hCMCcgnrNaS51pbWEJUbEXkrLVo=/60a6e4b8-2765-4480-88f3-f96f73107941--2022-0607_angel-food-cake-with-strawberries-and-whipped-cream_seo_3x2_mj-kroeger-067.jpg');

