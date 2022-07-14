module.exports.wait = function(amountInMilliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), amountInMilliseconds);
    })
}
