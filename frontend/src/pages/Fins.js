import React, { useEffect, useState, useContext, createContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Boards.css";
import axios from "axios";

//lisäsin article-tagin, gridin muotoilun vuoksi//
export default function Boards() {
  const [products, setProducts] = useState([]);
  const [changeCategory, setChangeCategory] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/products", { params: category })
      .then((res) => {
        setProducts(res.data);
        setChangeCategory(res.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const changeProducts = (category) => {
    if (category === "All") {
      setChangeCategory(products);
    } else {
      setChangeCategory(
        products.filter((product) => product.category === category)
      );
    }
  };

  const { addToCart } = useCart();

  return (
    <div id="Boards">
      <article>
        <h3>Evät</h3>
        <div className="mb-3">
          <Button variant="secondary" onClick={() => changeProducts("Fins")}>
            Fins
          </Button>
          <Button variant="secondary" onClick={() => changeProducts("Boards")}>
            Boards
          </Button>
          <Button variant="secondary" onClick={() => changeProducts("All")}>
            Kaikki
          </Button>
        </div>
        <div className="d-flex justify-content-around">
          {changeCategory.map((product) => (
            <Card key={product.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.image_url} />
              <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Lisää ostoskoriin
                </Button>
                <p>{product.price} EUR</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </article>
    </div>
  );
}

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((currentItems) => [...currentItems, product]);
  };

  const value = {
    cartItems,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function Ostoskori() {
  const { cartItems } = useCart();

  return (
    <div>
      <h2>Ostoskori</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <span>{item.productName}</span>
          <span> - </span>
          <span>{item.price} EUR</span>
        </div>
      ))}
    </div>
  );
}
