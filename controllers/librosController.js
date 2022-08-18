module.exports = {
  /**
   * Solicita la ruta de libros.
   * @param {*} req Solicitud
   * @param {*} res Respuesta
   */
  index: (req, res) => {
    res.render("libros/index");
  },
};
