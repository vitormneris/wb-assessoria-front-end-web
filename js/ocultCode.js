document.addEventListener('DOMContentLoaded', function() {

    const id = sessionStorage.getItem("token")

    if (id != null) {
        document.getElementById('dropdown').style.display = 'block';
        document.getElementById('register').style.display = 'none';
        document.getElementById('loginUser').style.display = 'none';
    } else {
        document.getElementById('dropdown').style.display = 'none';
        document.getElementById('register').style.display = 'block';
        document.getElementById('loginUser').style.display = 'block';
    }
});