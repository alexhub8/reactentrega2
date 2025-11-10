import React, { useState, useEffect } from "react";

const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Laptop Gaming", price: 1200 },
        { id: 2, name: "Monitor Ultra-Wide", price: 450 },
      ]);
    }, 2000);
  });
};

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container mt-4">
      {/* Saludo */}
      <h2 className="text-center mb-4">{greeting}</h2>
      
      {loading ? (
        <div className="text-center">Cargando productos...</div>
      ) : (
        <div className="row">
          {/* Mapeo de los productos*/}
          {products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  <a href="#" className="btn btn-primary">Ver detalle</a>
                </div>
              </div>
            </div>
          ))}
          {products.length === 0 && <p>No hay productos disponibles.</p>}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;