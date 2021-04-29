function RequestError(response) {
    this.response = response;
}

function handleErrors(response) {
    if (!response.ok) {
        throw RequestError(response);
    }
    return response;
}

module.exports = {
    handleErrors: handleErrors,
    RequestError: RequestError
}