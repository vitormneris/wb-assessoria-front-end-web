const token = sessionStorage.getItem("token")

if (token != null)  {
    fetch('http://localhost:8080/protected', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer1 ${token}`
        }
    })
    .then(response => {
        if (!response.ok) {
            sessionStorage.removeItem("token")
            document.location.href = "login.html"
        }
    })
    .catch(error => {
        console.log(error)
    });

} else {
    document.location.href = "login.html"
}