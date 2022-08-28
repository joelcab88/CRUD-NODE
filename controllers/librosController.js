var connect = require("../Config/Conexion");
var model = require("../Model/libro");
module.exports = {
  /**
   * Solicita la ruta de libros.
   * @param {*} req Solicitud
   * @param {*} res Respuesta
   */
  index: async (req, res) => {
    const libro = await model.ObtieneLibros(connect);
    res.render("libros/index", { books: libro });
  },
  /**
   * Inserta un nuevo libro en la base de datos.
   * @param {*} req Solicitud
   * @param {*} res Respuesta
   * @returns
   */
  agregaLibro: async (req, res) => {
    await model.CreaLibro(connect, req.body);
    res.redirect("/libros");
  },
};
