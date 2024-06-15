document.getElementById('insertForm').addEventListener('submit', function(event) {
    event.preventDefault()

    const name = document.getElementById('name').value
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value
    const cpf = document.getElementById('cpf').value
    const rnm = document.getElementById('rnm').value
    const country = document.getElementById('country').value
    const phone = document.getElementById('phone').value

    newUser = {
        "name": name,
        "password": password,
        "email": email,
        "cpf": cpf,
        "rnm": { 
            "number": rnm,
            "classification": "classificacao",
            "dateOfIssue": "11/10/2025"
        },
        "country": country,
        "phones": [
            phone
        ]
    }

    fetch('http://localhost:8080/clients', {
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