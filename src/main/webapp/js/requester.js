function requestData(params) {
    console.log("params: ", params)
    if (!params.r && params.r == null) {
    } else {
        const queryString = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');

    console.log("q: ", queryString)
    fetch('/lab2/process', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Set the content type to URL-encoded form data
        },
        body: queryString, // Use the query string as the request body
    })
        .then(response => response.text())
        .then(text => {
            if (text.includes('<td>')) {
                var tempContainer = $("<div></div>").html(text)

                var trElements = tempContainer.find("#server_values")

                $("#output").html(trElements);
            }
        })

        .catch(() => error('Повторите попытку позже'))
    }
}
