import "./carrito.css";
import Producto from "./Producto";

const Carrito = ({ carrito, agregarProducto }) => {
  return (
    <div className="carrito mb-5">
      <h1 className="mb-5">Tu carrito de compras</h1>
      {
        carrito.length === 0
        ?
        <p>Tu carrito de compras está vacío</p>
        :
        carrito.map(producto => (
          <Producto
           key={producto.id}
           producto={producto}
           nombre={ producto.nombre }
           img={ producto.img }
           carrito={ carrito }
           agregarProducto={agregarProducto} 
          />
        ))
      }
    </div>
  );
};
export default Carrito;
