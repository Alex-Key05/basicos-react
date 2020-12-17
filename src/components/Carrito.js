
const Carrito = ({guardarProductos}) => {

    const { nombre, precio } = guardarProductos;

  return (
    <div>
      <h2>{nombre}</h2>
      <p>{precio}</p>
    </div>
  );
};

export default Carrito;