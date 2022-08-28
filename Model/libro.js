module.exports = {
  /**
   * Obtiene el listado de todos los libros.
   * @param conexion_ conexión a base de datos.
   * @returns listado de libros.
   */
  ObtieneLibros: (conexion_) => {
    return new conexion_.Request()
      .execute("dbo.st_SelLibros")
      .then((data) => {
        return data.recordset; //Conjunto de registros del SP.
      })
      .catch((err) => {
        console.log("Mensaje de error: " + err.message);
      });
  },
  /**
   * Inserta un nuevo libro en la base de datos.
   * @param {*} conexion_ conexión a base de datos.
   * @returns
   */
  CreaLibro: (conexion_) => {
    return 0;
  },
};
