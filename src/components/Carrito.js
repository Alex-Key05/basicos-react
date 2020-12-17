import './carrito.css';

const Carrito = ({carrito}) => {

  console.log(carrito);

  return (
    <div className="carrito text-center mb-4">
      <h1>Tu carrito de compras</h1>
      <span>Artículos comprados</span>  
    </div>
  );
};

export default Carrito;