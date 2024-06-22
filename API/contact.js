document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const message = document.getElementById('message').value

    userContact = {
        "name": name,
        "email": email,
        "phone": phone,
        "message": message
    }

    const div  = document.getElementById('messageContact')
    const existingParag = div.querySelector('p')
    if (existingParag) existingParag.remove()
    const parag = document.createElement('p')
    parag.textContent = "Enviando..."
    parag.setAttribute("style", "color: green;")
    div.appendChild(parag)

    // https://wb-backend-48ug.onrender.com/
    // http://localhost:8080/

    fetch('https://wb-backend-48ug.onrender.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userContact)
    })
    .then(async response => {

        const existingParag = div.querySelector('p')

        if (existingParag) existingParag.remove()
        
        const parag = document.createElement('p')
        if (response.ok) {
            parag.textContent = "Contato enviado com sucesso!"
            parag.setAttribute("style", "color: green;")
            div.appendChild(parag)
            return "Sucess: contact sent."
        } 

        const responseObject = JSON.parse(await response.text());
        parag.textContent = responseObject.message
        parag.setAttribute("style", "color: red;")
        div.appendChild(parag)
        return "Error: contact doesn't sent."
    })
    .then(data => {
        console.log(data)
    })
    .catch((error) => {
        console.error('Error:', error)
    });
});