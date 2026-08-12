import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234', // TODO: Add your MySQL password here
  port: 3306,
  database: 'mksri_website', // TODO: Specify your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export { pool };
