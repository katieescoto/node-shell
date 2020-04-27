const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

if(cmd === 'pwd'){
  pwd();
}

if(cmd==='ls'){
  ls();
}

if(cmd.split(' ')[0]==='cat'){
  process.stdout.write(`${cmd.split(' ')[1]}\n`)
  cat(cmd.split(' ')[1])
}

//process.stdout.write('\nprompt > ');

})
