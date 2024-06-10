function logOut() {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("data")
    window.location.reload(true)
}