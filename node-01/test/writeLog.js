const fs = require('fs');

function writeLog(text) {
    fs.appendFile('logFile.txt', `${text}\n`, 'utf8', (err) => {
        console.log(err)
    })
}

module.exports = writeLog;