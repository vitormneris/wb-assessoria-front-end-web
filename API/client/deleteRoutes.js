function deleteClient() {

    let resp = confirm("VOCÊ TEM CERTEZA QUE DESEJA APAGAR SUA CONTA?")

    if (resp) {
        const token = sessionStorage.getItem("token")
        
        fetch('http://localhost:8084/clients/token', {
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