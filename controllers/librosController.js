var connect = require("../Config/Conexion");
module.exports = {
  /**
   * Solicita la ruta de libros.
   * @param {*} req Solicitud
   * @param {*} res Respuesta
   */
  index: async (req, res) => {
    const test = await new connect.Request().execute('dbo.st_SelLibros')
    console.dir(test);
    res.render("libros/index");
  },
};
