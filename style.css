/* --- VARIÁVEIS DE CORES E TAMANHO --- */

:root {

    --bg-principal: #f0f4f8;

    --bg-card: #ffffff;

    --texto-principal: #1a202c;

    --texto-secundario: #4a5568;

    --cor-primaria: #0056b3;

    --cor-primaria-hover: #004494;

    --cor-destaque: #d97706;

    --cor-sucesso: #16a34a;

    --bg-barra: #2d3748;

    --borda-foco: #2563eb;

    --overlay-cor: rgba(0, 0, 0, 0.6);

    --tamanho-base: 16px; /* Para controle de zoom */

}



/* --- MODO ALTO CONTRASTE --- */

body.alto-contraste {

    --bg-principal: #000000;

    --bg-card: #121212;

    --texto-principal: #ffff00;

    --texto-secundario: #ffffff;

    --cor-primaria: #000000;

    --cor-primaria-hover: #333333;

    --cor-destaque: #ffff00;

    --cor-sucesso: #00ff00;

    --bg-barra: #1a1a1a;

    --borda-foco: #ffff00;

    --overlay-cor: rgba(255, 255, 255, 0.2);

}



body.alto-contraste button, body.alto-contraste header {

    border: 2px solid #ffff00;

    color: #ffff00;

}



body.alto-contraste .card {

    border: 2px solid #ffff00;

}



/* --- RESET E BASE --- */

* {

    box-sizing: border-box;

    margin: 0;

    padding: 0;

}



body {

    font-family: system-ui, -apple-system, sans-serif;

    background-color: var(--bg-principal);

    color: var(--texto-principal);

    font-size: var(--tamanho-base);

    transition: background-color 0.3s, color 0.3s, font-size 0.3s;

}



*:focus {

    outline: 3px solid var(--borda-foco);

    outline-offset: 2px;

}



/* --- BARRA DE ACESSIBILIDADE --- */

.barra-acessibilidade {

    background-color: var(--bg-barra);

    padding: 10px;

    position: sticky;

    top: 0;

    z-index: 100;

}



.container-acessibilidade {

    display: flex;

    flex-wrap: wrap;

    gap: 10px;

    justify-content: center;

    max-width: 1200px;

    margin: 0 auto;

}



.container-acessibilidade button {

    background-color: #ffffff;

    color: #1a202c;

    border: none;

    padding: 8px 16px;

    border-radius: 6px;

    font-weight: bold;

    cursor: pointer;

    font-size: 1rem;

    transition: transform 0.1s;

}



.container-acessibilidade button:active {

    transform: scale(0.95);

}



/* --- CABEÇALHO --- */

header {

    text-align: center;

    padding: 2rem 1rem;

    background-color: var(--cor-primaria);

    color: white;

    margin-bottom: 2rem;

}



header h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }

header p { font-size: 1.2rem; }



/* --- CONTEÚDO E BUSCA --- */

.conteudo-principal {

    max-width: 1200px;

    margin: 0 auto;

    padding: 0 1rem;

}



.secao-busca {

    text-align: center;

    margin-bottom: 2rem;

    background-color: var(--bg-card);

    padding: 1.5rem;

    border-radius: 8px;

    box-shadow: 0 4px 6px rgba(0,0,0,0.1);

}



.secao-busca label {

    display: block;

    font-size: 1.2rem;

    margin-bottom: 10px;

}



.secao-busca input {

    width: 100%;

    max-width: 500px;

    padding: 12px;

    font-size: 1.1rem;

    border: 2px solid #ccc;

    border-radius: 6px;

}



/* --- CARTÕES (GRID) --- */

.grid-dicas {

    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    gap: 20px;

}



.card {

    background-color: var(--bg-card);

    border-radius: 10px;

    padding: 1.5rem;

    box-shadow: 0 4px 6px rgba(0,0,0,0.1);

    display: flex;

    flex-direction: column;

    transition: transform 0.2s;

}



.card:hover { transform: translateY(-5px); }

.card h3 { font-size: 1.5rem; margin-bottom: 10px; color: var(--cor-primaria); }

.card p { margin-bottom: 15px; color: var(--texto-secundario); flex-grow: 1; line-height: 1.5; }



.btn-abrir-modal {

    background-color: var(--cor-destaque);

    color: white;

    border: none;

    padding: 12px;

    font-size: 1.1rem;

    font-weight: bold;

    border-radius: 6px;

    cursor: pointer;

    width: 100%;

}



/* --- MODAL --- */

.modal-overlay {

    display: none;

    position: fixed;

    top: 0; left: 0; width: 100%; height: 100%;

    background-color: var(--overlay-cor);

    z-index: 1000;

    justify-content: center;

    align-items: center;

    padding: 1rem;

}



.modal-overlay.ativo {

    display: flex;

}



.modal-content {

    background-color: var(--bg-card);

    padding: 2rem;

    border-radius: 12px;

    width: 100%;

    max-width: 600px;

    max-height: 90vh;

    overflow-y: auto;

    position: relative;

    box-shadow: 0 10px 25px rgba(0,0,0,0.2);

}



.btn-fechar {

    background-color: #ef4444;

    color: white;

    border: none;

    padding: 10px 15px;

    border-radius: 6px;

    font-weight: bold;

    cursor: pointer;

    float: right;

    margin-bottom: 15px;

}



#modal-titulo { color: var(--cor-primaria); margin-bottom: 15px; font-size: 1.8rem; }



.btn-acessibilidade {

    background-color: var(--cor-primaria);

    color: white;

    border: none;

    padding: 10px 20px;

    font-size: 1.1rem;

    font-weight: bold;

    border-radius: 8px;

    cursor: pointer;

    margin-bottom: 20px;

    display: inline-flex;

    align-items: center;

    gap: 8px;

}



#modal-corpo { font-size: 1.1rem; line-height: 1.6; }

#modal-corpo p { margin-bottom: 15px; }



footer { text-align: center; padding: 2rem 1rem; background-color: var(--bg-barra); color: white; margin-top: 3rem; }

