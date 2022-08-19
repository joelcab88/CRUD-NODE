const SQLCONEXION = require("mssql");

const ConnectSQL = new SQLCONEXION.ConnectionPool({
  database: "Biblioteca",
  server: "LAPTOP-147FCBJT",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
});

let conn = SQLCONEXION.connect(ConnectSQL, (err) => {
  console.log(
    !err
      ? "Conexión establecida con el servidor de BD."
      : "Ha ocurrido un error al intentar establecer la conexión con el sercvidor de BD."
  );
});

module.exports = conn;

// const conn = async () => {
//   let configureSQL = await SQLCONEXION.connect(ConnectSQL, (err) => {
//     console.log(
//       !err
//         ? "Conexión establecida con el servidor de BD."
//         : "Ha ocurrido un error al intentar establecer la conexión con el sercvidor de BD."
//     );
//   });

//   let querySQL = await configureSQL.request().query("SELECT * FROM libros");
//   return querySQL;
// };

//module.exports = conn;

// ConnectSQL.connect((err) => {
//   console.log(err);
//   console.log(
//     !err
//       ? "Conexión establecida con el servidor de BD."
//       : "Ha ocurrido un error al intentar establecer la conexión con el sercvidor de BD."
//   );
// });

//module.exports = ConnectSQL;
