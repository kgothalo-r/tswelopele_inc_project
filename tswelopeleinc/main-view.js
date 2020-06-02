function dataSection(name) {
    let data = document.getElementById("data-section");
    console.log(name);

    if (name === "adhoc") {
        data.appendChild("section\ad-hoc\ad-hoc.html");
    } else if (name == "dash") {
        alert("dash");
    } else if (name == "clients") {
        data.append("section\clients\clients.html");
    }
}