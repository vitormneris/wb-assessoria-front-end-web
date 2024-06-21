document.addEventListener('DOMContentLoaded', function() {
    const token = sessionStorage.getItem("token")

    //mudar url

    fetch('https://wb-backend-48ug.onrender.com/installments/token', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json(); 
        } 
    })
    .then(data => {
        console.log('Success:', data)
        const list = document.getElementById("mensalidades")

        numb = 0
        data.forEach(element => {
            const numberOfInstallment = data[numb].numberOfInstallment;
            const description = data[numb].description;
            const amount = data[numb].amount;
            let dueDate = data[numb].dueDate;
            const paymentStatus = data[numb].paymentStatus;

            dueDate = new Date(dueDate) 
            const dueDateString = ('0' + dueDate.getDate()).slice(-2) + "/" + ('0' + dueDate.getMonth()).slice(-2) + "/" + dueDate.getFullYear()

            numb++
            list.innerHTML += 
                    `
                    <div class="col-md-9 mx-auto">
                        <div class="card">
                        <div class="card-body cleartfix">
                            <div class="media align-items-stretch">
        
                            <div class="align-self-center">
                                <i class="icon-wallet success font-large-2" style="padding: 0 20px 0 0; color: rgb(233, 179, 16);"></i>
                            </div>
                            <div class="media-body">
                                <h3> ${description} </h3>
                                <h4>N° da parcela: ${numberOfInstallment} / ${data.length}</h4>
                                <h4>Vencimento:  ${dueDateString} </h4>
                                <span style="background-color: rgb(227, 227, 227); border-radius: 10px; padding: 0 8px;"> ${paymentStatus} </span>
                            </div>
                            <div class="align-self-center">
                                <h2>R$ ${amount.toFixed(2)} </h2>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    `
        });
        
    })
    .catch((error) => {
        console.error('Error:', error)
    });
});