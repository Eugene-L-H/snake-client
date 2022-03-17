let connection;

const handleUserInput = function (key) {
  if(key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write('Move: up');
    console.log('UP');
  }
  

  if (key === 's') {
    connection.write('Move: down');
    console.log('DOWN');

  }

  if (key === 'a') {
    connection.write('Move: left');
    console.log('LEFT');

  }

  if (key === 'd') {
    connection.write('Move: right');
    console.log('RIGHT');
  }

  if(key === 'x'){
    connection.write("Say: WATCH OUT!")
  }

  if(key === 'c'){
    connection.write("Say: MUHAHAHAHAHAH")
  }

  if(key === 'v'){
    connection.write("Say: INCOMING!")
  }

  if(key === 'b'){
    connection.write("Say: :(")
  }

  if(key === 'n'){
    connection.write("Say: HOWDY!")
  }

  if(key === 't'){
    connection.write("Say: CHOO CHOOddd")
  }
  
  if(key === 'y'){
    connection.write("Say: PLZ DON'T KILL ME")
  }
  

  if(key === '\u0003') {
    process.exit();
  }
}

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}


 module.exports = { setupInput };
