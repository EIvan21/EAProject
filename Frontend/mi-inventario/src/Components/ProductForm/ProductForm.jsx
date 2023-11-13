// ProductForm.jsx
import React, { useState } from 'react';
import './ProductForm.css'; // Importa los estilos CSS

const ProductForm = () => {
  const [product, setProduct] = useState({
    nombre: '',
    ancho: '',
    largo: '',
    grueso: '',
    cantidad: '',
    madera: '',
    calidad: '',
    tipo: '',
    costo: '',
    precio: ''
  });

  // Maneja los cambios en los campos del formulario y actualiza el estado
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aquí coloca la URL de tu API
      const response = await fetch('http://127.0.0.1:8000/productos/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      // Lógica adicional en caso de éxito
    } catch (error) {
      console.error('Hubo un error al enviar los datos del producto', error);
      // Lógica adicional en caso de error
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" value={product.nombre} onChange={handleChange} placeholder="Introduce el nombre" />
        </div>

        <div className="form-field">
          <label htmlFor="ancho">Ancho</label>
          <input type="number" id="ancho" name="ancho" value={product.ancho} onChange={handleChange} placeholder="Introduce el ancho" />
        </div>

        <div className="form-field">
          <label htmlFor="largo">Largo</label>
          <input type="number" id="largo" name="largo" value={product.largo} onChange={handleChange} placeholder="Introduce el largo" />
        </div>

        <div className="form-field">
          <label htmlFor="grueso">Grueso</label>
          <input type="number" id="grueso" name="grueso" value={product.grueso} onChange={handleChange} placeholder="Introduce el grueso" />
        </div>

        <div className="form-field">
          <label htmlFor="cantidad">Cantidad</label>
          <input type="number" id="cantidad" name="cantidad" value={product.cantidad} onChange={handleChange} placeholder="Introduce la cantidad" />
        </div>

        <div className="form-field">
          <label htmlFor="madera">Madera</label>
          <input type="text" id="madera" name="madera" value={product.madera} onChange={handleChange} placeholder="Tipo de madera" />
        </div>

        <div className="form-field">
          <label htmlFor="calidad">Calidad</label>
          <input type="text" id="calidad" name="calidad" value={product.calidad} onChange={handleChange} placeholder="Calidad de la madera" />
        </div>

        <div className="form-field">
          <label htmlFor="tipo">Tipo</label>
          <input type="text" id="tipo" name="tipo" value={product.tipo} onChange={handleChange} placeholder="Tipo de producto" />
        </div>

        <div className="form-field">
          <label htmlFor="costo">Costo</label>
          <input type="number" id="costo" name="costo" value={product.costo} onChange={handleChange} placeholder="Costo del producto" />
        </div>

        <div className="form-field">
          <label htmlFor="precio">Precio</label>
          <input type="number" id="precio" name="precio" value={product.precio} onChange={handleChange} placeholder="Precio de venta" />
        </div>

        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default ProductForm;
