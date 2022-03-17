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
