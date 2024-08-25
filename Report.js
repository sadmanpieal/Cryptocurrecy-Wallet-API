const newman = require('newman');
require('dotenv').config();

const collectionUrl = `https://api.postman.com/collections/37031452-15ef52db-4a6a-4071-a947-64d4e7ebf347?access_key=${process.env.ACCESS_KEY}`;


newman.run({
    
    collection: collectionUrl,
    
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
