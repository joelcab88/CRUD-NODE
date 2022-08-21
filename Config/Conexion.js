const SQLCONEXION = require("mssql");

const ConnectSQL = {
  user: "Joe1997_SQLLogin_1",
  password: "z4tcfq1oyt",
  database: "Biblioteca",
  server: "Biblioteca.mssql.somee.com",
  options: {
    encrypt: false,
    synchronize: true,
    trustServerCertificate: true,
  },
};

SQLCONEXION.connect(ConnectSQL)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.dir(err);
  });

module.exports = SQLCONEXION;
