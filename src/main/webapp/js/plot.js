var r;

$(document).ready(function() {
    $(".form__r_btn").click(function() {
        // Set the selectedValue when a button is clicked
        r = $(this).text();
        console.log(r)
    });
});


$(document).ready(() => $('svg').on('click', (event) => {
    // if (!validateR()) {
    //     error('Выберите значение R')
    //     return
    // }
    const position = getMousePosition(event)
    // const r = r
    const x = (position.x - 150) / 100 * r
    const y = (150 - position.y) / 100 * r
    const color = isOnPlot(x, y, r) ? "green" : "red"
    if (!r){
        document.querySelector('.main__title-message').innerHTML = "-> Ошибка: значение R не задано!"
    } else {
        document.querySelector('.main__title-message').innerHTML = ""
        createPointer(position.x, position.y, color)
        console.log(x, y ,r)
        requestData({
            x: x,
            y: y,
            r: r
        })
    }
}))

const dots = $('#dots')

$('input[type=checkbox]').on('click', () => dots.empty())

function getMousePosition(event) {
    const rect = document.querySelector("svg").getBoundingClientRect()
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function createPointer(x, y, color) {
    dots.html(`${dots.html()}<circle fill="${color}" 
        cx="${x}" cy="${y}" r="2.25"></circle>`)
}

function isOnPlot(x, y, r) {
    return (x >= 0 && x <= r && y >= 0 && y <= r && x + y <= r)

        ||
        (x<=0 && y>=0 && x>=-r && y<=r)
        ||
        (x >= -r && x <= 0 && y <= 0 && (x**2) + (y**2) <= (r**2))
}

// function validateR() {
//     const rValue = rInput.value;
//     if (isNaN(rValue) || rValue < 1 || rValue > 4) {
//         console.log(isNaN(rValue),  rValue)
//         return false
//     }
// }
//
// function requestData(params) {
//     console.log(params)
//     if (!validateR()) {
//     const queryString = Object.keys(params)
//         .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
//         .join('&');
//
//     const requestOptions = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded', // Set the content type to URL-encoded form data
//         },
//         body: queryString, // Use the query string as the request body
//     };
//
//     fetch('/lab2/process', requestOptions)
//         .then(response => {
//             // location.reload();
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// } else {
//     document.querySelector('.main__title-message').innerHTML = "-> Ошибка: значение R не задано!"
// }
// }