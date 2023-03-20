import React from "react";

//CSS para Homee
import "./Home.css";

function Home({ product, handleClick }) {
  return (
    <div>
      <section>
        <div className="card">
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} className="image" />{" "}
          {/** Imagem */}
          <p>{product.price}</p>
          <p>{product.description}</p>
          <button className="btn-comprar" onClick={() => handleClick(product)}>
            Comprar
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
