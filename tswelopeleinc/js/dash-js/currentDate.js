function currentDate() {
    let element = document.getElementById("date");
    let today = new Date();

    let month = today.getMonth() + 1;
    let day = today.getDay();
    let year = today.getFullYear();

    let mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let strMonth = mon[month];

    if (day === 0)
        day = 1;

    element.innerHTML = strMonth.toString() + " " + day.toString() + ", " + year.toString();
}