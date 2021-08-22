const waitFor = (tempo = 2000) => new Promise((resolve) => {
    setTimeout(() => {
        resolve({ message: 'Vish' })
    }, tempo);
});


/* waitFor(2000)
    .then(() => console.log('Executando Promise 1'))
    .then(waitFor)
    .then(() => console.log('Executando Promise 2'))
    .then(waitFor)
    .then(() => console.log('Executando Promise 3')); */

function returnValue() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000);
    });
}


async function exec() {

    let value = await returnValue();

    await waitFor();
    console.log(`Async/Await ${value} ...`);

    await waitFor();
    console.log(`Async/Await ${value + 1} ...`);

    await waitFor();
    console.log(`Async/Await ${value + 2} ...`);

    return value + 3;
};

async function realExec() {
    const value = await exec();
    console.log(value);
};


realExec();