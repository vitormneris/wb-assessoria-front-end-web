function logOut() {
    sessionStorage.removeItem("id")
    window.location.href = "login.html"
}