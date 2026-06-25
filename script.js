 document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Elementos da Interface
    const btnAumentar = document.getElementById("btn-aumentar");
    const btnDiminuir = document.getElementById("btn-diminuir");
    const btnContraste = document.getElementById("btn-contraste");
    const campoBusca = document.getElementById("campo-busca");
    const cartoesDicas = document.querySelectorAll(".cartao-dica");
    const mensagemVazia = document.getElementById("mensagem-vazia");
    const btnNovaDica = document.getElementById("btn-nova-dica");
    const textoDicaDinamica = document.getElementById("texto-dica-dinamica");

    // 2. Banco de Dados de Dicas Adicionais
    const maisDicas = [
        "Antivírus ativo: Mantenha o sistema do seu celular e computador atualizado. Essas atualizações fecham portas para os invasores.",
        "Cuidado com promessas de aposentadoria ou revisão de benefício por mensagens de desconhecidos. Busque sempre canais oficiais como o Meu INSS.",
        "Verificação em duas etapas: Ative essa proteção no seu WhatsApp. Ela impede que criminosos clonem seu aplicativo mesmo se eles conseguirem o seu código.",
        "Se um amigo ou parente pedir dinheiro emprestado de forma repentina pelo WhatsApp, ligue para ele por chamada comum para confirmar se é ele mesmo.",
        "Evite usar redes de Wi-Fi públicas e abertas (como de praças ou rodoviárias) para acessar o aplicativo do banco."
    ];

    // 3. Controle de Tamanho de Fonte (Persistente)
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

    // 4. Controle de Alto Contraste (Persistente)
    if (localStorage.getItem("altoContraste") === "ativo") {
        document.body.classList.add("alto-contraste");
    }

    btnContraste.addEventListener("click", () => {
        document.body.classList.toggle("alto-contraste");
        
        if (document.body.classList.contains("alto-contraste")) {
            localStorage.setItem("altoContraste", "ativo");
        } else {
            localStorage.setItem("altoContraste", "inativo");
        }
    });

    // 5. Sistema de Filtro/Busca Inteligente
    campoBusca.addEventListener("input", (e) => {
        const termoBusca = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let cartoesVisiveis = 0;

        cartoesDicas.forEach(cartao => {
            const textoCartao = cartao.textContent.toLowerCase();
            const tagsCartao = cartao.getAttribute("data-tags").toLowerCase();
            
            // Combina conteúdo e tags puras sem acentos para uma busca fácil
            const tudoAgrupado = (textoCartao + " " + tagsCartao).normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            if (tudoAgrupado.includes(termoBusca)) {
                cartao.style.display = "flex";
                cartoesVisiveis++;
            } else {
                cartao.style.display = "none";
            }
        });

        // Mostra mensagem se nada for encontrado
        if (cartoesVisiveis === 0) {
            mensagemVazia.style.display = "block";
        } else {
            mensagemVazia.style.display = "none";
        }
    });

    // 6. Sorteador de Dicas Extras
    btnNovaDica.addEventListener("click", () => {
        const itemAleatorio = Math.floor(Math.random() * maisDicas.length);
        textoDicaDinamica.textContent = maisDicas[itemAleatorio];
    });
});