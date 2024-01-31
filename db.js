const mysql = require('mysql2');

class Database {
  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'yourpassword',
      database: 'employee_tracker_db'
    });
  }

  initialize() {
    this.connection.connect(err => {
      if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
      }
      console.log('Connected to MySQL database.');
    });
  }

  close() {
    this.connection.end();
  }
}

module.exports = Database;
