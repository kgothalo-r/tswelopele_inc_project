$(document).ready(function() {
    $("#login").click(function() {
        let uname = document.getElementById("uname").value;
        let username = document.getElementById("username").value;

        username.innerText = uname;
    });
});