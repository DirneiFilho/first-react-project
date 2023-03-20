import "./App.css";
// Components:
import Home from "./Components/Pages/Home";
import Header from "./Components/Header/Header";
// Hooks:
import { useState } from "react";
// Array de produtos, banco de dados:
import products from "./Products Db/products-db";

function App() {
  // Estados de Armazenamento
  // Estado 1 - Busca pelo nome
  const [namePesquisa, setPesquisa] = useState("");
  // Função que faz a busca pelo nome
  const handleFilter = (product) => {
    return product.name
      .toLowerCase()
      .includes(namePesquisa.toLocaleLowerCase());
  };

  // Estado 2 - Busca pelo preço
  const [pricePesquisa, setPricePesquisa] = useState("");
  // Função que faz a busca pelo preço
  const handleFilterPrice = (product) => {
    return pricePesquisa ? product.price <= pricePesquisa : true;
  };

  // Estado 3 - Buscando a ordem
  const [ordem, setOrdem] = useState("");

  // Estado 4 - Carrinho de compras
  const [cart, setCart] = useState([]);
  // Função para adicionar ao carrinho de compras
  const handleClick = (product) => {
    const filterProduct = {
      name: product.name,
      price: product.price,
      image: product.image,
    };
    setCart([...cart, filterProduct]);
  };

  return (
    <div className="App">
      <Header
        namePesquisa={namePesquisa}
        setPesquisa={setPesquisa}
        pricePesquisa={pricePesquisa}
        setPricePesquisa={setPricePesquisa}
        ordem={ordem}
        setOrdem={setOrdem}
        cart={cart}
        setCart={setCart}
      />
      {products
        .filter(handleFilter)
        .filter(handleFilterPrice)
        .sort((atualEstado, proximoEstado) => {
          if (ordem === "crescente") {
            if (atualEstado.name < proximoEstado.name) {
              return -1;
            } else if (atualEstado.name > proximoEstado.name) {
              return 1;
            } else {
              return 0;
            }
          }
          if (ordem === "decrescente") {
            if (atualEstado.name < proximoEstado.name) {
              return +1;
            } else if (atualEstado.name > proximoEstado) {
              return -1;
            } else {
              return 0;
            }
          }
        })
        .map((product) => (
          <Home
            product={product}
            key={product.id}
            handleClick={handleClick}
          ></Home>
        ))}
    </div>
  );
}

export default App;
