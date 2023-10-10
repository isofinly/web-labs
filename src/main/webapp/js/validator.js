function validate() {
    return validateX() && validateY() && validateR();
}

function validateX() {
    return true;
}

function validateY() {
    const valueY = parseFloat($("#value_Y").val().replace(",", "."))
    if (isNaN(valueY) || valueY < -3.0 || valueY > 5.0) {
        error('Некорректное значение Y')
        return false
    }
    return true;
}

var r;

$(document).ready(function() {
    $(".form__r_btn").click(function() {
        // Set the selectedValue when a button is clicked
        r = $(this).text();
        console.log(r)
    });
});

function validateR() {
    if (!r) {
        error('Выберите значение R')
        return false
    }
    return true;
}