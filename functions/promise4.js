function generateRandomNumberBetween(min = 1, max = 10, timer = 2000) {
    if (min > max) {
        [max, min] = [min, max];
    };

    return new Promise(resolve => {
        setTimeout(() => {
            const factor = max - min + 1;
            const random = parseInt(Math.random() * factor) + min;
            resolve(random); 
        }, timer);
    });
};

generateRandomNumberBetween(1,3,2000).then((res) => {
    console.log('-- single ', res);
});

console.time('promises time (multiple)');

function generateMultipleRandomNumbers() {
    return Promise.all([
        generateRandomNumberBetween(1,40, 1),
        generateRandomNumberBetween(0,30, 500),
        generateRandomNumberBetween(5,10, 3000)
    ]).then(numbers => console.log('-- multiple ', numbers))
      .then(() => {
        console.timeEnd('promises time (multiple)');
      });
};

generateMultipleRandomNumbers();