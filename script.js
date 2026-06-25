
        // Guardamos o tamanho padrão das letras inicializado no CSS (20px)
        let tamanhoFonteAtual = 20;

        /**
         * Altera dinamicamente o tamanho base da fonte da aplicação.
         * Garante que não fique demasiado pequena para leitura nem exagere nos limites do ecrã.
         * @param {number} delta - Quantidade de pixeis a somar ou subtrair
         */
        function alterarTamanhoTexto(delta) {
            tamanhoFonteAtual += delta;
            
            // Limitadores saudáveis para acessibilidade de leitura
            if (tamanhoFonteAtual < 16) {
                tamanhoFonteAtual = 16;
            }
            if (tamanhoFonteAtual > 32) {
                tamanhoFonteAtual = 32;
            }
            
            // Aplicamos a alteração à variável do sistema `:root`
            document.documentElement.style.setProperty('--tamanho-base', tamanhoFonteAtual + 'px');
        }

        /**
         * Monitoriza e atualiza o progresso do Checklist interativo de segurança.
         * Atualiza a barra de progresso visual e exibe uma caixa de felicitações quando completo.
         */
        function atualizarProgresso() {
            const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
            const total = checkboxes.length;
            let marcados = 0;

            checkboxes.forEach(function(item) {
                if (item.checked) {
                    marcados++;
                }
            });

            // Cálculo da percentagem
            const percentagem = Math.round((marcados / total) * 100);

            // Atualização dos elementos na página
            const barra = document.getElementById('barra-progresso');
            const textoProgresso = document.getElementById('texto-progresso');
            const boxSucesso = document.getElementById('box-sucesso');

            barra.style.width = percentagem + '%';
            barra.setAttribute('aria-valuenow', percentagem);

            if (marcados === 0) {
                textoProgresso.innerText = "Nenhum hábito marcado ainda. Vamos começar?";
                boxSucesso.style.display = 'none';
            } else if (marcados < total) {
                textoProgresso.innerText = `Ótimo! Já pratica ${marcados} de ${total} hábitos seguros (${percentagem}% concluído).`;
                boxSucesso.style.display = 'none';
            } else {
                textoProgresso.innerText = `Excelente! Pratica ${marcados} de ${total} hábitos seguros (${percentagem}% concluído).`;
                boxSucesso.style.display = 'block';
            }
        }

        // Executamos uma inicialização limpa ao carregar a página
        window.addEventListener('DOMContentLoaded', () => {
            atualizarProgresso();
        });