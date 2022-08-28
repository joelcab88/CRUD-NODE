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
        console.log("Error: " + err.message);
      });
  },
  /**
   * Inserta un nuevo libro en la base de datos.
   * @param {*} conexion_ conexión a base de datos.
   * @returns
   */
  CreaLibro: (conexion_, datos) => {
    console.log(datos);
    return new conexion_.Request()
      .input("NombreLibro", conexion_.VarChar(2500), datos.nombrelibro)
      .input("Imagen", conexion_.VarChar(2500), datos.archivo)
      .execute("dbo.st_InsLibros")
      .then((data) => {
        return "Se ha insertado un nuevo registro con éxito.";
      })
      .catch((err) => {
        console.log("Error: " + err.message);
      });
  },
};
