document.addEventListener('DOMContentLoaded', function() {
    data = JSON.parse(sessionStorage.getItem("client"))

    if (data != null) {
        document.getElementById('name').value = data.name;
        document.getElementById('email').value = data.email;
        document.getElementById('cpf').value = data.cpf;
        document.getElementById('country').value = data.country;
        document.getElementById('phone1').value = data.phones[0];
        document.getElementById('phone2').value = data.phones[1] || "";
        document.getElementById('phone3').value = data.phones[2] || "";
        document.getElementById('rnm').value = data.rnm.number;
        document.getElementById('rnmClassification').value = data.rnm.classification;
        document.getElementById('rnmDate').value = data.rnm.dateOfIssue;
        document.getElementById('state').value = data.address.state;
        document.getElementById('city').value = data.address.city;
        document.getElementById('neighborhood').value = data.address.neighborhood;
        document.getElementById('street').value = data.address.street;
        document.getElementById('postalCode').value = data.address.postalCode;
        document.getElementById('number').value = data.address.number;
    } else {
        document.location.href = "perfil.html"
    }
});