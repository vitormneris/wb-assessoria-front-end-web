document.getElementById('processoForm').addEventListener('submit', function(event) {
    const token = sessionStorage.getItem("token")

    event.preventDefault(); 

    const numeroProcesso = document.getElementById('numeroProcesso').value;

    fetch('http://localhost:8080/processos', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer1 ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numeroProcesso: numeroProcesso })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('A resposta da requisição não teve sucesso');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        sessionStorage.setItem('data',  JSON.stringify(data));
        window.location.href = "listProcessos.html";

    })
    .catch((error) => {
        console.error('Error:', error);
    });
});