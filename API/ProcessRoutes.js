
document.getElementById('processoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const numeroProcesso = document.getElementById('numeroProcesso').value;

    fetch('https://wb-backend-48ug.onrender.com/processos', {
        method: 'POST',
        headers: {
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
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});