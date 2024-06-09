function logOut() {
    sessionStorage.removeItem("id")
    window.location.reload(true)
}