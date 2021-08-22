/* Error handler */

function workingOrNot(value, errorChance) {
    return new Promise((resolve, reject) => {
        try {
            if (Math.random() < errorChance) {
                reject('an Error occurred');
            } else {
                resolve(value);
            }
        } catch(e) {
            reject(e);
        }
    });
};

workingOrNot('testing', 0.5)
    .then(res => console.log(`Succes: ${res}`))
    .catch(error => console.log(`Error: ${error}`));