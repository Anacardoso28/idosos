 // Banco de dados simples com orientações extras
const dicasAdicionais = [
    "Em caso de dúvida sobre um boleto ou cobrança, ligue para o seu filho, neto ou vá direto à agência bancária antes de pagar.",
    "Nunca instale aplicativos no celular se alguém que você não conhece pediu por telefone.",
    "Se um site parecer muito confuso ou cheio de anúncios piscando na tela, prefira fechar a página.",
    "Computadores públicos (como em hotéis ou lan houses) não devem ser usados para acessar contas do banco.",
    "Lembre-se: nenhum funcionário de banco vai até a sua casa buscar o seu cartão magnético ou senha!"
];

// Selecionando os elementos da página
const textoDica = document.getElementById("texto-dica");
const btnNovaDica = document.getElementById("btn-nova-dica");
const btnAumentar = document.getElementById("btn-aumentar");
const btnDiminuir = document.getElementById("btn-diminuir");

// Configuração do tamanho de fonte padrão
let tamanhoFonteAtual = 19;

// Ação de sortear uma dica aleatória
btnNovaDica.addEventListener("click", () => {
    const indiceAleatorio = Math.floor(Math.random() * dicasAdicionais.length);
    textoDica.textContent = dicasAdicionais[indiceAleatorio];
});

// Ação de Aumentar a Letra
btnAumentar.addEventListener("click", () => {
    if (tamanhoFonteAtual < 28) { // Limite máximo para não desconfigurar o design
        tamanhoFonteAtual += 2;
        document.body.style.fontSize = tamanhoFonteAtual + "px";
    }
});

// Ação de Diminuir a Letra
btnDiminuir.addEventListener("click", () => {
    if (tamanhoFonteAtual > 16) { // Limite mínimo aceitável
        tamanhoFonteAtual -= 2;
        document.body.style.fontSize = tamanhoFonteAtual + "px";
    }
});