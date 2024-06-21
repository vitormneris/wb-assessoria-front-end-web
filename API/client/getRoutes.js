document.addEventListener('DOMContentLoaded', function() {
    const token = sessionStorage.getItem("token")

    //mudar url
    fetch('http://localhost:8080/clients/token', {
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
        document.getElementById('name').textContent = data.name;
        document.getElementById('email').textContent = data.email;
        document.getElementById('cpf').textContent = data.cpf;
        document.getElementById('country').textContent = data.country;
        document.getElementById('phone').textContent = data.phones;
        document.getElementById('rnm').textContent = data.rnm.number;
        document.getElementById('rnmClassification').textContent = data.rnm.classification;
        document.getElementById('rnmDate').textContent = data.rnm.dateOfIssue;
        document.getElementById('state').textContent = data.address.state;
        document.getElementById('city').textContent = data.address.city;
        document.getElementById('neighborhood').textContent = data.address.neighborhood;
        document.getElementById('street').textContent = data.address.street;
        document.getElementById('number').textContent = data.address.number;
    })
    .catch((error) => {
        console.error('Error:', error)
    });
});