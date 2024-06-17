const token = sessionStorage.getItem("token")

if (token != null)  {
    fetch('https://wb-backend-48ug.onrender.com/protected', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
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