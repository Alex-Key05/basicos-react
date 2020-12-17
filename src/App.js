import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
 
  // Crear listado de productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa Mongo', precio: 30 },
    { id: 2, nombre: 'Camisa Express', precio: 20 },
    { id: 3, nombre: 'Camisa React', precio: 60 },
    { id: 4, nombre: 'Camisa NodeJs', precio: 50 },
  ]);

  // State para un carrito de compras
  const [ carrito, agregarProducto ] = useState([]);

  const year = new Date().getFullYear();

  return (
    <div>
      <Header titulo="Tienda virtual" />
        <h1>Lista de productos</h1>
        { productos.map( producto => 
          <Producto 
            key={producto.id}
            producto={producto}
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
          />  
        )}

        <Carrito
          guardarProductos={guardarProductos}          
        />
      <Footer year={year} />
    </div>
  );
}

export default App;
