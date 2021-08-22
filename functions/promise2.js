
/* CallBack Hell */

/* setTimeout(() => {
    console.log('Executado CallBack');

    setTimeout(() => {
        console.log('Executado CallBack');

        setTimeout(() => {
            console.log('Executado CallBack');
        }, 2000);
    }, 2000);
}, 2000); */


/* Promise */

const waitFor = (tempo = 2000) => new Promise((resolve) => {
    setTimeout(() => {
        console.log('Executando promise...');
        resolve({ message: 'Vish' })
    }, tempo);
})

waitFor()
    .then(() => waitFor())
    .then(() => waitFor());