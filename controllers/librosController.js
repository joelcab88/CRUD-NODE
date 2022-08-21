var connect = require("../Config/Conexion");
module.exports = {
  /**
   * Solicita la ruta de libros.
   * @param {*} req Solicitud
   * @param {*} res Respuesta
   */
  index: async (req, res) => {
    const query = await connect.query('SELECT * FROM Libros');
    console.dir(query)
    res.render("libros/index");
  },
};
