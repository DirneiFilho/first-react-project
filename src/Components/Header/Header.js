import React from "react";
import "./Header.css";

// Props recebidas do App.js
function Header({
  namePesquisa,
  setPesquisa,
  pricePesquisa,
  setPricePesquisa,
  ordem,
  setOrdem,
  cart,
  setCart,
}) {
  // Função que captura o valor do namee
  const handleName = (e) => {
    setPesquisa(e.target.value);
  };
  // Função que captura a ordem
  const handleSortOrder = (e) => {
    setOrdem(e.target.value);
  };
  // Função para calcular o valor total
  const calcTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };
  // Função para remover os itens do carrinho
  const handleRemove = (index) => {
    setCart((remove) => remove.filter((_, i) => i !== index));
  };

  return (
    <nav>
      <h1>Filtros</h1>
      <select onChange={handleSortOrder} value={ordem}>
        <option value="">Ordem</option>
        <option value="decrescente">Decrescente</option>
        <option value="crescente">Crescente</option>
      </select>
      <input
        type="text"
        name=""
        id=""
        placeholder="Digite um nome"
        value={namePesquisa}
        onChange={handleName}
      />
      <input
        type="number"
        name=""
        id=""
        placeholder="Digite um preço"
        value={pricePesquisa}
        onChange={(e) => setPricePesquisa(e.target.value)}
      />

      <div className="cart">
        {cart.map((product, index) => (
          <div key={index}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <img src={product.image} alt={product.name} className="cartImage" />
            <button onClick={() => handleRemove(index)} className="btn-remover">
              Remover
            </button>
          </div>
        ))}
      </div>
      <span>Total R${calcTotal()}</span>
    </nav>
  );
}

export default Header;
