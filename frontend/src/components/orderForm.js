import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import { useCart } from "../pages/Fins";

import "./orderForm.css";
import axios from 'axios';
import { Ostoskori } from "../pages/Fins";

export default function Order() {
  const [orderData, setOrderData] = useState({
    f_name: "",
    l_name: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    payment: "",
    cardNumber: "",
    cardHolder: "",
  });
  const { cartItems } = useCart();
  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price), 
    0
  );

  const [orderConfirmed, setOrderConfirmed] = useState(false);


  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    //tähän voitaisiin tehdä tulostaa lomakkeen tiedoista tilausvahvistus
    e.preventDefault();
    console.log(orderData);

    const Endpoint = "http://localhost:3001/customer";

    const formData = {
      first_name: orderData.f_name,
      last_name: orderData.l_name,
    };

    try {
      const resp = await axios.post(Endpoint, formData);
      if (resp.status === 201) {
        setOrderConfirmed(true);;
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  if (orderConfirmed) {
    return (
      <div>
        <h2>Kiitos tilauksestasi!</h2>
        <p>Tilaajan nimi: {orderData.f_name} {orderData.l_name}</p>
        <p>Osoite: {orderData.address}, {orderData.city}, {orderData.zip}, {orderData.country}</p>
        <p>Maksutapa: {orderData.payment}</p>
        {orderData.payment === "Luottokortti" && (
          <p>Kortin omistaja: {orderData.cardHolder}</p>
        )}

        <h3>Ostoskorin sisältö:</h3>
        {cartItems.map((item, index) => (
          <p key={index}>{item.productName} - {item.price} EUR</p>
        ))}
        <h4>Yhteensä: {totalPrice.toFixed(2)} EUR</h4>
      </div>
    );
  }

  //Tähän luodaan muuttuja joka hakee ostoskorin sisällön

  return (
    <div>
      <Card>
      <Card.Body>Ostoskorin sisältö: <Ostoskori/></Card.Body>
    </Card>
      <Form onSubmit={handleSubmit}>
        <h1>Tilaustiedot</h1>
        <br></br>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Etunimi</Form.Label>
            <Form.Control
              type="name"
              placeholder="Kirjoita etunimesi"
              name="f_name"
              value={orderData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Sukunimi</Form.Label>
            <Form.Control
              type="name"
              placeholder="Kirjoita tähän sukunimesi"
              name="l_name"
              value={orderData.name}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Osoite</Form.Label>
          <Form.Control
            placeholder="Esimerkkikatu 8"
            type="text"
            name="address"
            value={orderData.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Kaupunki</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={orderData.city}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Maa</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              name="country"
              value={orderData.country}
              onChange={handleChange}
            >
              <option>Choose...</option>
              <option>Suomi</option>
              <option>Ruotsi</option>
              <option>Norja</option>
              <option>Viro</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Postinumero</Form.Label>
            <Form.Control
              name="zip"
              value={orderData.zip}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <br></br>
        <h5>Valitse Maksutapa</h5>
        <Form.Group as={Col} controlId="formGridPay">
          <Form.Label>Maa</Form.Label>
          <Form.Select
            defaultValue="payment"
            name="payment"
            value={orderData.payment}
            onChange={handleChange}
          >
            <option>Maksutapa...</option>
            <option>Applepay</option>
            <option>Luottokortti</option>
          </Form.Select>
        </Form.Group>

        {orderData.payment === "Luottokortti" && ( //jos maksutapa luottokortti kysytään kortin tiedot
          <div>
            <Form.Group as={Col} controlId="formGridCredit">
              <Form.Label>Kortin omistaja</Form.Label>
              <Form.Control
                name="cardHolder"
                value={orderData.cardHolder}
                onChange={handleChange}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCredit">
                <Form.Label>Kortin numero</Form.Label>
                <Form.Control
                  name="cardNumber"
                  value={orderData.cardNumber}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
          </div>
        )}
        {orderData.payment === "Applepay" && <h8>Maksutapa: Applepay</h8>}

        <br></br>

        <Button variant="primary" type="submit">
          Lähetä
        </Button>
        <div>
          <li>
            
          </li>
        </div>
      </Form>
    </div>
  );
}
