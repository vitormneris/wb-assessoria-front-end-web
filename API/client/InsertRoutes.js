document.getElementById('insertForm').addEventListener('submit', function(event) {
    event.preventDefault()

    const name = document.getElementById('name').value
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value
    const cpf = document.getElementById('cpf').value
    const rnm = document.getElementById('rnm').value
    const rnmClassification = document.getElementById('rnmClassification').value
    const rnmDate = document.getElementById('rnmDate').value
    const country = document.getElementById('country').value
    const phone1 = document.getElementById('phone1').value
    const phone2 = document.getElementById('phone2').value
    const phone3 = document.getElementById('phone3').value
    const state = document.getElementById('state').value
    const city = document.getElementById('city').value
    const neighborhood = document.getElementById('neighborhood').value
    const street = document.getElementById('street').value
    const postalCode = document.getElementById('postalCode').value
    const number = document.getElementById('number').value

    newUser = {
        "name": name,
        "password": password,
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

    fetch('https://wb-backend-48ug.onrender.com/clients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(async response => {
        const div  = document.getElementById('message')
        const existingParag = div.querySelector('p')

        if (existingParag) existingParag.remove()
        
        const parag = document.createElement('p')
        if (response.status === 201) {
            parag.textContent = "Conta criada com sucesso!"
            parag.setAttribute("style", "color: green;")
            div.appendChild(parag)
            return "Sucess: User inserted."
        } 

        const responseObject = JSON.parse(await response.text());
        parag.textContent = responseObject.message
        parag.setAttribute("style", "color: red;")
        div.appendChild(parag)
        return "Error: User doesn't inserted."
    })
    .then(data => {
        console.log(data)
    })
    .catch((error) => {
        console.error('Error:', error)
    });
});