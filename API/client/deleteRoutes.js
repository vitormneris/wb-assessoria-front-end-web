function deleteClient() {

    let resp = confirm("VOCÊ TEM CERTEZA QUE DESEJA APAGAR SUA CONTA?")

    if (resp) {
        const token = sessionStorage.getItem("token")

        // https://wb-backend-48ug.onrender.com/
        // http://localhost:8080/
        
        fetch('https://wb-backend-48ug.onrender.com/clients/token', {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (response.ok) {
                sessionStorage.removeItem("token")
                sessionStorage.removeItem("data")
                sessionStorage.removeItem("client")
                window.location.reload(true)
            } 
        })
        .catch((error) => {
            console.error('Error:', error)
        });
    }
}