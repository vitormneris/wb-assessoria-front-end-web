const list = document.getElementById("ListagemProcessos")

let sessionData = JSON.parse(sessionStorage.getItem('data'))

sessionData.forEach(element => {
    const numeroProcesso = element.informations.numeroProcesso.numerdoDoprocesso;
    const tribunal = element.informations.tribunal;
    const movimentoNome = element.movimentoMaisRecente.nome;
    const movimentoDataHora = new Date(element.movimentoMaisRecente.dataHora).toLocaleString();

    list.innerHTML += `
        <div class="card my-1">
            <div class="card-body clearfix">
                <div class="media align-items-stretch">
                    <div class="align-self-center">
                        <i class="icon-wallet success font-large-2" style="padding: 0 20px 0 0; color: rgb(233, 179, 16);"></i>
                    </div>
                    <div class="media-body">
                        <h4>N° do Processo: ${numeroProcesso}</h4>
                        <details>
                            <summary>Detalhes</summary>
                            <div class="d-flex flex-column">
                                <p class="py-2 my-1" style="width:fit-content; background-color: rgb(227, 227, 227); border-radius: 10px; padding: 0 8px;">Tribunal: ${tribunal}</p>
                                <p class="py-2 my-1" style="width:fit-content; background-color: rgb(227, 227, 227); border-radius: 10px; padding: 0 8px;">Nome: ${movimentoNome}</p>
                                <p class="py-2 my-1" style="width:fit-content; background-color: rgb(227, 227, 227); border-radius: 10px; padding: 0 8px;">Última movimentação: ${movimentoNome}</p>
                                <p class="py-2 my-1" style="width:fit-content; background-color: rgb(227, 227, 227); border-radius: 10px; padding: 0 8px;">Data e Hora: ${movimentoDataHora}</p>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    `;
});