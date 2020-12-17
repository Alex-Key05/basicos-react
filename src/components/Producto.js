const Producto = ({
  producto,
  carrito,
  agregarProducto,
  productos,
  guardarProductos,
}) => {
  const { nombre, precio, id, img } = producto;

  const seleccionarProducto = (id) => {
    const producto = productos.filter((camisa) => camisa.id === id)[0];

    agregarProducto([...carrito, producto]);
  };

  const eliminarProducto = (id) => {
    const productos = carrito.filter((camisa) => camisa.id !== id);

    agregarProducto(productos);

  };

  return (
    <div className="container">
      {productos ? (
        <div className="card" style={{ width: "11rem" }}>
          <img src={img} className="card-img-top" alt={nombre} />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              <span className="badge bg-info text-dark">Precio: ${precio}</span>
            </p>

            <button
              type="button"
              onClick={() => seleccionarProducto(id)}
              className="btn btn-primary"
            >
              Comprar
            </button>
          </div>
        </div>
      ) : (
        <div className="card" style={{ width: "11rem" }}>
          <img src={img} className="card-img-top" alt={nombre} />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <button
              type="button"
              onClick={() => eliminarProducto(id)}
              className="btn btn-danger"
            >
              Eliminar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Producto;
