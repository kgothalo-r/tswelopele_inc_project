function getSection(section) {
    let secHead = document.getElementById("section");

    if (section === 'dash')
        secHead.innerText = 'Dashboard';
    else if (section === 'clients')
        secHead.innerText = 'Clients';
    else if (section === 'adhoc')
        secHead.innerText = 'Ad-Hoc';
    else if (section === 'schedule')
        secHead.innerText = 'Schedule';
}

$(document).ready(function() {
    let secHead = document.getElementById("section");
    secHead.innerText = 'Dashboard';
});