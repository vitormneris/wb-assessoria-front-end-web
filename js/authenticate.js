const token = sessionStorage.getItem("token")
// https://wb-backend-48ug.onrender.com/
    // http://localhost:8080/
if (token != null)  {
    fetch('http://localhost:8080/protected', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        if (!response.ok) {
            sessionStorage.removeItem("token")
            document.location.href = "../login.html"
        }
    })
    .catch(error => {
        console.log(error)
    });

} else {
    document.location.href = "../login.html"
}