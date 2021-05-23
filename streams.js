const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', chunk => {
  // console.log('---- NEW CHUNK ----');
  // console.log(chunk);
  writeStream.write('\nNEW CHUNK:\n');//這會寫到blog4.txt
  writeStream.write(chunk);//這會寫到blog4.txt
});

// piping
// readStream.pipe(writeStream);
