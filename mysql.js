const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'interview'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
  connection.query('SELECT DATABASE interview', (err, result) => {
    if (err) throw err;
    console.log('Database selected!');
    
      (err, result) => {
        if (err) throw err;
        console.log('User created!');
        connection.query(
          "GRANT ALL PRIVILEGES ON interview.* TO 'root'@'localhost'",
          (err, result) => {
            if (err) throw err;
            console.log('Privileges granted!');
            connection.end();
          }
        );
      }
    
  });
});
