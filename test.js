const fs = require('fs');

fs.readdir('.', (err, files) => {
    if (err) {
        console.error('Hata:', err);
    } else {
        console.log('Dizin içeriği:', files);
    }
});
