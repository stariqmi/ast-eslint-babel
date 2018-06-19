Promise(function(resolve, reject) {
    reject('failed');
})
    .then(function(data) {
    })
    .catch(function(error) {
        console.log(error);
    });

Promise(function(resolve, reject) {
    reject('failed');
})
    .then(function(data) {
    })
    .catch(function(error) {
    });