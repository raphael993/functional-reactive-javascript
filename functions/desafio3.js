const fs = require('fs');
const path = require('path');

const openFile = (dirPath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(dirPath, (_, content) => {
            try {
                if (content) {
                    resolve(content.toString());
                } else {
                    reject('Some ERROR happened');
                }
            } catch(e) {
                reject(e);
            };
        });
    });
};
 
openFile(path.join(__dirname, 'dadows.txt'))
    .then(console.log)
    .catch(console.log)
    .finally(console.log('That\'s it folks'));