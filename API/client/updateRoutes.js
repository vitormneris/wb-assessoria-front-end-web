document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault()

    const token = sessionStorage.getItem("token")

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const cpf = document.getElementById('cpf').value
    const country = document.getElementById('country').value
    const phone1 = document.getElementById('phone1').value
    const phone2 = document.getElementById('phone2').value
    const phone3 = document.getElementById('phone3').value
    const rnm = document.getElementById('rnm').value
    const rnmClassification = document.getElementById('rnmClassification').value
    const rnmDate = document.getElementById('rnmDate').value
    const state = document.getElementById('state').value
    const city = document.getElementById('city').value
    const neighborhood = document.getElementById('neighborhood').value
    const street = document.getElementById('street').value
    const postalCode = document.getElementById('postalCode').value
    const number = document.getElementById('number').value

    userUpdated = {
        "name": name,
        "email": email,
        "cpf": cpf,
        "rnm": { 
            "number": rnm,
            "classification": rnmClassification,
            "dateOfIssue": rnmDate
        },
        "country": country,
        "phones": [
            phone1,
            phone2 || null,
            phone3 || null
          ].filter(phone => phone !== null),
        "address": {
            "state": state,
            "city": city,
            "neighborhood": neighborhood,
            "street": street,
            "postalCode": postalCode,
            "number": number
        }
    }

    console.log("DATA: ", userUpdated)


    // https://wb-backend-48ug.onrender.com/
    // http://localhost:8080/

    fetch('http://localhost:8080/clients/token', {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userUpdated)
    })
    .then(async response => {
        const div  = document.getElementById('message')
        const existingParag = div.querySelector('p')

        if (existingParag) existingParag.remove()
        
        const parag = document.createElement('p')
        if (response.status === 200) {
            parag.textContent = "Conta atualizada com sucesso!"
            parag.setAttribute("style", "color: green;")
            div.appendChild(parag)
            sessionStorage.setItem("client", JSON.stringify(userUpdated))
            return "Sucess: User updated."
        } 

        const responseObject = JSON.parse(await response.text());
        parag.textContent = responseObject.message
        parag.setAttribute("style", "color: red;")
        div.appendChild(parag)
        return "Error: User doesn't updated."
    })
    .then(data => {
        console.log(data)
    })
    .catch((error) => {
        console.error('Error:', error)
    });
});