var i = 0;
var width;

function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("bar");
        width = 0;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 33) {
                i = 0;
            } else {
                width += 33;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}

function moveTwo() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("bar");
        width = 0;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 66) {
                i = 0;
            } else {
                width += 33;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}

function moveThree() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("bar");
        width = 0;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 100) {
                i = 0;
            } else {
                if ((width < 66) || (width <= 33)) {
                    width += 33;
                    elem.style.width = width + "%";
                    elem.innerHTML = width + "%";
                } else {
                    width += 33;
                    elem.style.width = "99%";
                    elem.innerHTML = "100%";
                }
            }
        }
    }
}