var http = require('http');
const fs = require('fs');
require('log-timestamp');

const checkMe = './test';

console.log(`Watching for file changes on ${checkMe}`);

fs.watch(checkMe, (event, filename) => {
  console.log('${checkMe} has been modified with event : ' + event );
});
