function logOut() {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("data")
    sessionStorage.removeItem("client")
    window.location.reload(true)
}