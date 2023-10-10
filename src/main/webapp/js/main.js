// Define a global variable for r
var r;

$(document).ready(function() {
    $(".form__r_btn").click(function() {
        // Set the selectedValue when a button is clicked
        r = $(this).text();
        console.log(r)
    });
});

$('#submit_button').on('click', () => {
    if (!validate()) {
        return;
    }

    requestData({
        x: $("label[for='" + $('[name="value_X"]:checked').attr('id') + "']").html(),
        y: $('#value_Y').val().replace(',', '.'),
        r: r // Use the global r variable here
    });
});



function error(message) {
    console.log(({
        title: 'Ошибка',
        text: message,
    }))
}

$('#clear_button').on('click', () => {
    console.log("clear")
    const params = {'clear': true}
    // window.location.replace("/lab2/process" + formatParams(params));
    // window.location.replace("/lab2/");
    fetch('/lab2/clear', {
        method: 'POST',
        body: JSON.stringify(params),
    })
        .then(response => {
            console.log('POST request response:', response);
            // location.reload();
        })
        .then(text => {
            $("#output").html(text)
        })
        .then(() => {
            location.reload();
        })
        .catch(error => {
            console.error('Error making POST request:', error);
        });
})



