var connect = require("../Config/Conexion");
module.exports = {
  /**
   * Solicita la ruta de libros.
   * @param {*} req Solicitud
   * @param {*} res Respuesta
   */
  index: (req, res) => {
    // connect.query("SELECT * FROM Libros", (err,datos) =>{
    //     console.log(datos);
    // });
    res.render("libros/index");
  },
};
