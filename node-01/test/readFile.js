const fs = require('fs');

fs.readFile( "test.txt", ( err, data ) => {
    if (err){
        return console.log(err);
    }

    console.log(data.toString());
})