
const Producto = ({ producto, carrito, agregarProducto, productos }) => {
  const { nombre, precio, id, img } = producto;

  const seleccionarProducto = id => {
    const producto = productos.filter( camisa => camisa.id === id )[0];

    agregarProducto([ ...carrito, producto ]);
  };

  return (
    <div className="container">
      {/* CARD */}
      <div className="card" style={{ 'width': '13rem' }}>
        <img src={img} className="card-img-top" alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
            <span className="badge bg-info text-dark">${precio}</span>
          </p>
          <button
            type="button"
            onClick={ () => seleccionarProducto(id) }
            className="btn btn-primary"
          >Comprar</button>
        </div>
      </div>            

      
    </div>
  );
};
export default Producto;
