function generateRandomNumberBetween(min, max, blackListNumbers) {
    if (min > max) {
        [max, min] = [min, max];
    };

    return new Promise((resolve, reject) => {
        const factor = max - min + 1;
        const random = parseInt(Math.random() * factor) + min;
        if (blackListNumbers.includes(random)) {
            reject('Prohibited number!');
        } else {
            resolve(random);
        }
    });
};

async function generateLoteryNumbers(numbersAmount) {
    try {
        const numbers = [];
        for (let _ of Array(numbersAmount).fill()) {
            numbers.push(
                await generateRandomNumberBetween(1, 60, numbers)
            );
        }
        return numbers;
    } catch(e) {
        throw 'too bad!!';
    };
};


generateLoteryNumbers(8)
    .then(console.log)
    .catch(console.log);