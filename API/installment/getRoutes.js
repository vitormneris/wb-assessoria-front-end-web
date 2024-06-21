document.addEventListener('DOMContentLoaded', function() {
    const token = sessionStorage.getItem("token")

    //mudar url
    // https://wb-backend-48ug.onrender.com/
    // http://localhost:8080/
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

        data.forEach(element => {
            const numberOfInstallment = element.numberOfInstallment;
            const description = element.description;
            const amount = element.amount;
            let dueDate = element.dueDate;
            const paymentStatus = element.paymentStatus;

            dueDate = new Date(dueDate) 
            const dueDateString = ('0' + dueDate.getDate()).slice(-2) + "/" + ('0' + dueDate.getMonth()).slice(-2) + "/" + dueDate.getFullYear()

            list.innerHTML += 
                    `
                        <div class="card w-full">
                            <div class="">
                                <i class="icon-wallet success font-large-2" style="padding: 0 20px 0 0; color: rgb(233, 179, 16);"></i>
                            <div class="">
                                <h3> ${description} </h3>
                                <h4>N° da parcela: ${numberOfInstallment} / ${data.length}</h4>
                                <h4>Vencimento:  ${dueDateString} </h4>
                                <span style="background-color: rgb(227, 227, 227); border-radius: 10px; padding: 0 8px;"> ${paymentStatus} </span>
                            </div>
                            <div class="">
                                <h2>R$ ${amount.toFixed(2)} </h2>
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