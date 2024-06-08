const list = document.getElementById("ListagemProcessos")
for(i=0;i<10;i++){
    list.innerHTML+=`
                            <div class="card my-1">
                                    <div class="card-body cleartfix">
                                        <div class="media align-items-stretch">
                                            <div class="align-self-center">
                                                <i class="icon-wallet success font-large-2" style="padding: 0 20px 0 0; color: rgb(233, 179, 16);"></i>
                                            </div>
                                            <div class="media-body">
                                                <h4>N° do Processo:</h4>
                                                <details>
                                                    <summary>Detalhes</summary>
                                                    <div class="d-flex flex-column">
                                                        <p class="py-2 my-1" style="width:fit-content; background-color: rgb(227, 227, 227); border-radius: 10px; padding: 0 8px;">Pendente</p>
                                                        <p class="py-2 my-1" style="width:fit-content; background-color: rgb(227, 227, 227); border-radius: 10px; padding: 0 8px;">Nome</p>
                                                        <p class="py-2 my-1" style="width:fit-content; background-color: rgb(227, 227, 227); border-radius: 10px; padding: 0 8px;">Ultima movimentação</p>
                                                        <p class="py-2 my-1" style="width:fit-content; background-color: rgb(227, 227, 227); border-radius: 10px; padding: 0 8px;">Data e Hora</p>
                                                    </div>
                                                </details>
                                            </div>
                                        </div>
                                    </div>
                            </div>
    `
}