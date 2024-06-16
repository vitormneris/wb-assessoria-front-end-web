document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    userAuth = {
        "email": email,
        "password": password
    }

    fetch('http://localhost:8080/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userAuth)
    })
    .then(response => response.text())
    .then(text => {

        if (text != "") {
            sessionStorage.setItem("token", text)
            window.location.href = "processo.html"
            return "Login sucessfully"
        }

        const div  = document.getElementById('errorMessage')
        const existingParag = div.querySelector('p');

        if (existingParag) existingParag.remove()
        
        const parag = document.createElement('p');
        parag.textContent = "E-mail ou senha não encontrados"
        parag.setAttribute("style", "color: red;");
        div.appendChild(parag)
        
        return "Login not authorized"

    })
    .then(data => {
        console.log(data)
    })
    .catch((error) => {
        console.error('Error:', error)
    });
});