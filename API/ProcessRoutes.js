document.getElementById('processoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const token = sessionStorage.getItem("token")
    const numeroProcesso = document.getElementById('numeroProcesso').value;

    const div  = document.getElementById('message')
    const existingParag = div.querySelector('p')

    if (existingParag) existingParag.remove()

    const parag = document.createElement('p');
    parag.textContent = "Processando requisição... aguarde um momento."
    parag.setAttribute("style", "color: green;");
    div.appendChild(parag)

    // https://wb-backend-48ug.onrender.com/
    // http://localhost:8080/

    fetch('https://wb-backend-48ug.onrender.com/processos', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numeroProcesso: numeroProcesso })
    })
    .then(response => {
        if (!response.ok) {
   
            if (existingParag) existingParag.remove()
    
            const parag = document.createElement('p')
            parag.textContent = "Não foi possível consultar o processo - Tente novamento mais tarde!"
            parag.setAttribute("style", "color: red;")
            div.appendChild(parag)

            throw new Error('A resposta da requisição não teve sucesso')
        }
        return response.json()
    })
    .then(data => {
        console.log('Success:', data)
        const containerP = document.getElementById("Processos")
        containerP.style.display = "block"
       
        const list = document.getElementById("ListagemProcessos");
        data.forEach(element => {
            
            const nomeProcesso = element.informations.classe.nome;
            const numeroProcesso = element.informations.numeroProcesso.numerdoDoprocesso;
            const tribunal = element.informations.tribunal;
            const movimentoNome = element.movimentoMaisRecente.nome;
            const movimentoDataHora = new Date(element.movimentoMaisRecente.dataHora).toLocaleString();
        
            list.innerHTML += `
                <div class="card my-1" style="border-radius: 20px; width: 90%; margin: 0 auto; background-color: #f8f9fa; padding: 12px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
                    <div class="card-body clearfix">
                        <div class="media align-items-stretch">
                            <div class="align-self-center">
                                <i class="icon-wallet success font-large-2" style="padding: 0 20px 0 0; color: rgb(233, 179, 16);"></i>
                            </div>
                            <div class="media-body">
                                <h5 style="font-family: 'Poppins'; font-size: 18px;"><b style="background: linear-gradient(#B07908 10%, #E8B158); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Nome do Processo:</b> ${nomeProcesso}</h5>
                                <br>
                                <h5 style="font-family: 'Poppins'; font-size: 18px;"><b style="background: linear-gradient(#B07908 10%, #E8B158); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">N° do Processo:</b> ${numeroProcesso}</h5>
                                <br>
                                <details>
                                    <summary style="font-family: 'Poppins-Bold'; background: linear-gradient(#B07908 10%, #E8B158); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Detalhes</summary>
                                    <br>
                                    <div class="d-flex flex-column">
                                        <p class="py-2 my-1" style="width: fit-content; background-color: rgb(227, 227, 227); border-radius: 10px; padding: 0 8px;">Tribunal: ${tribunal}</p>
                                        <p class="py-2 my-1" style="width: fit-content; background-color: rgb(227, 227, 227); border-radius: 10px; padding: 0 8px;">Nome: ${movimentoNome}</p>
                                        <p class="py-2 my-1" style="width: fit-content; background-color: rgb(227, 227, 227); border-radius: 10px; padding: 0 8px;">Última movimentação: ${movimentoNome}</p>
                                        <p class="py-2 my-1" style="width: fit-content; background-color: rgb(227, 227, 227); border-radius: 10px; padding: 0 8px;">Data e Hora: ${movimentoDataHora}</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })
        const consP = document.getElementById("ConsultaP")
        consP.style.display="none"
    })
    .catch((error) => {
        console.error('Error:', error)
    });
});