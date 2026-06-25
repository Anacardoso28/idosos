document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Textos Detalhados para os Modais (Evita poluir a tela inicial)
    const conteudosModais = {
        senha: {
            titulo: "Como criar e lembrar de senhas seguras",
            texto: "<p>Para um idoso, decorar dezenas de senhas difíceis é um desafio. <strong>A solução ideal:</strong> pense em uma frase simples que você gosta, como: <em>'Meu gato Tom comeu 3 peixes!'</em>.</p><p>Use as iniciais e os números para formar a senha: <strong>MgTc3p!</strong>. Fica impossível para um hacker descobrir, mas muito fácil para você lembrar!</p>"
        },
        links: {
            titulo: "O perigo mora nos links urgentes",
            texto: "<p>Os criminosos tentam te assustar criando um senso de urgência falso. Eles mandam mensagens dizendo que sua aposentadoria foi suspensa ou que há uma compra suspeita no seu nome.</p><p><strong>Regra de ouro:</strong> Bloqueie o número imediatamente. Se ficar na dúvida, ligue para o seu gerente do banco ou fale com um familiar de confiança antes de fazer qualquer ação.</p>"
        },
        cadeado: {
            titulo: "Entendendo a Barra de Endereços",
            texto: "<p>O cadeado fechado significa que a comunicação entre o seu celular/computador e o site é criptografada (trancada a sete chaves). Ninguém consegue interceptar o que você digita.</p><p><strong>Atenção:</strong> Golpistas experientes conseguem colocar cadeados em páginas falsas. Portanto, além do cadeado, confira se o nome do site está escrito corretamente (ex: 'www.bb.com.br' e não 'www.bancodobrasil-seguro.com').</p>"
        },
        fakenews: {
            titulo: "Como não ser enganado por notícias falsas",
            texto: "<p>As Fake News usam títulos apelativos para gerar cliques e espalhar vírus ou golpes financeiros. Se o texto pede para você 'compartilhar com urgência com todos os seus contatos', desconfie.</p><p>Procure a mesma notícia no Google ou assista aos jornais da TV. Se nenhum canal confiável deu a notícia, ela não é verdadeira.</p>"
        },
        compras: {
            titulo: "Comprando Online com Segurança máxima",
            texto: "<p>Hoje em dia, a maioria dos aplicativos de banco oferece o <strong>Cartão Virtual</strong>. Ele é um cartão digital que muda o código de segurança (aqueles 3 números de trás) a cada poucos minutos ou após uma compra.</p><p>Usando ele, mesmo que o site de compras seja hackeado, seus dados reais do cartão físico continuam totalmente protegidos!</p>"
        },
        telefone: {
            titulo: "O Golpe do Falso Motoboy ou Funcionário",
            texto: "<p>Este é um dos golpes que mais afeta a terceira idade. Uma pessoa muito educada liga dizendo que seu cartão foi clonado. Ela pede sua senha e diz que o banco enviará um motoboy para recolher o cartão estragado.</p><p><strong>Lembre-se sempre:</strong> O banco NUNCA pede sua senha pelo telefone e NUNCA manda ninguém buscar seu cartão em casa. Se receber essa ligação, desligue na hora.</p>"
        }
    };

    // 2. Elementos da Interface
    const modal = document.getElementById("modal-seguranca");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalCorpo = document.getElementById("modal-corpo");
    const btnFecharModal = document.getElementById("btn-fechar-modal");
    const botoesAbrir = document.querySelectorAll(".btn-abrir-modal");

    // 3. Funções de Abrir e Fechar o Modal
    function abrirModal(idDica) {
        const dados = conteudosModais[idDica];
        if (dados) {
            modalTitulo.textContent = dados.titulo;
            modalCorpo.innerHTML = dados.texto;
            modal.classList.add("ativo");
            modal.setAttribute("aria-hidden", "false");
            btnFecharModal.focus(); // Joga o foco visual no botão fechar por acessibilidade
        }
    }

    function fecharModal() {
        modal.classList.remove("ativo");
        modal.setAttribute("aria-hidden", "true");
    }

    // Ouvintes para os botões dos cartões
    botoesAbrir.forEach(botao => {
        botao.addEventListener("click", (e) => {
            const card = e.target.closest(".cartao-dica");
            const idDica = card.getAttribute("data-id");
            abrirModal(idDica);
        });
    });

    // Fechar ao clicar no botão "Fechar Janela"
    btnFecharModal.addEventListener("click", fecharModal);

    // Fechar ao clicar na área escura fora da caixinha branca
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            fecharModal();
        }
    });

    // Fechar se apertar a tecla 'Esc' do teclado
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("ativo")) {
            fecharModal();
        }
    });

    // --- MANUTENÇÃO DOS RECURSOS ANTERIORES (BUSCA, CONTRASTE E FONTE) ---
    const btnAumentar = document.getElementById("btn-aumentar");
    const btnDiminuir = document.getElementById("btn-diminuir");
    const btnContraste = document.getElementById("btn-contraste");
    const campoBusca = document.getElementById("campo-busca");
    const cartoesDicas = document.querySelectorAll(".cartao-dica");
    const mensagemVazia = document.getElementById("mensagem-vazia");

    let tamanhoFonte = parseInt(localStorage.getItem("tamanhoFonte")) || 20;
    document.body.style.fontSize = tamanhoFonte + "px";

    btnAumentar.addEventListener("click", () => {
        if (tamanhoFonte < 28) {
            tamanhoFonte += 2;
            document.body.style.fontSize = tamanhoFonte + "px";
            localStorage.setItem("tamanhoFonte", tamanhoFonte);
        }
    });

    btnDiminuir.addEventListener("click", () => {
        if (tamanhoFonte > 16) {
            tamanhoFonte -= 2;
            document.body.style.fontSize = tamanhoFonte + "px";
            localStorage.setItem("tamanhoFonte", tamanhoFonte);
        }
    });

    if (localStorage.getItem("altoContraste") === "ativo") {
        document.body.classList.add("alto-contraste");
    }

    btnContraste.addEventListener("click", () => {
        document.body.classList.toggle("alto-contraste");
        localStorage.setItem("altoContraste", document.body.classList.contains("alto-contraste") ? "ativo" : "inativo");
    });

    campoBusca.addEventListener("input", (e) => {
        const termoBusca = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let cartoesVisiveis = 0;

        cartoesDicas.forEach(cartao => {
            const textoCartao = cartao.textContent.toLowerCase();
            const tagsCartao = cartao.getAttribute("data-tags").toLowerCase();
            const tudoAgrupado = (textoCartao + " " + tagsCartao).normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            if (tudoAgrupado.includes(termoBusca)) {
                cartao.style.display = "flex";
                cartoesVisiveis++;
            } else {
                cartao.style.display = "none";
            }
        });

        mensagemVazia.style.display = cartoesVisiveis === 0 ? "block" : "none";
    });
});