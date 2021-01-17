const path = require('path');
const fs = require('fs')

const nosuchfileInvalidExtension = (filePath) => {
    return new Promise(function(resolve, reject) {
        var ext = path.extname(filePath);
        if(ext != '.csv') {   
            reject(new Error('Invalid file type Extension'));
        }
        if(!fs.existsSync(filePath)) {
            reject(new Error('Invalid file path Exception'));
        }
    })
}
module.exports = nosuchfileInvalidExtension;