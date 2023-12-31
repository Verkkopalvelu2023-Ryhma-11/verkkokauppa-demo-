import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import './Boards.css';
import axios from 'axios';


//lisäsin article-tagin, gridin muotoilun vuoksi//
export default function Boards() {

//Haetaan backendista nimi ja hinta tuotteille
//Muistakaa että serverin pitää pyöriä taustalla, jotta tiedot näkyvät
  const [products, setProducts] = useState([]);
  const {category, setCategory} = useState('');
  useEffect(()=>{
    axios.get('http://localhost:3001/products', { params: category})
      .then(res => setProducts(res.data))
      .catch(error => console.log(error.message));


  },[]);





  return (
    <div id='Boards'>
    <article>
    <h3>Surffilaudat</h3>

    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://scontent-hel3-1.xx.fbcdn.net/v/t1.6435-9/191109284_4073412502697307_1073918815470777708_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=AuMwxHikbF4AX8lFJp1&_nc_ht=scontent-hel3-1.xx&oh=00_AfBPK4s-ckEUxnrj1KpwCPdjp2ZDewsKDEHNcD98vBprkQ&oe=659BE832" />
        <Card.Body>
          <Card.Title>{products
        .filter(p => p.id === 1)   //haetaan tuotteen tiedot jonka id on 1
        .map(p => <p key={p.id}>{p.productName}</p>) //asetetaan haettu nimi
      }</Card.Title>
          <Card.Text>
            Iso lauta aloittelijalle tai pieniin aaltoihin
          </Card.Text>
          <Button variant="primary">Lisää ostoskoriin</Button>
          {products
        .filter(p => p.id === 1)
        .map(p => <p key={p.id}>{p.price} EUR</p>)} /asetetaan haettu hinta
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://scontent-hel3-1.xx.fbcdn.net/v/t1.6435-9/191109284_4073412502697307_1073918815470777708_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=AuMwxHikbF4AX8lFJp1&_nc_ht=scontent-hel3-1.xx&oh=00_AfBPK4s-ckEUxnrj1KpwCPdjp2ZDewsKDEHNcD98vBprkQ&oe=659BE832" />
        <Card.Body>
          <Card.Title>{products
        .filter(p => p.id === 2)
        .map(p => <p key={p.id}>{p.productName}</p>)
      }</Card.Title>
          <Card.Text>
           Keskikokoinen lauta kaikelle säälle
          </Card.Text>
          <Button variant="primary">Lisää ostoskoriin</Button>
          {products
        .filter(p => p.id === 2)
        .map(p => <p key={p.id}>{p.price} EUR</p>)}
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://scontent-hel3-1.xx.fbcdn.net/v/t1.6435-9/191109284_4073412502697307_1073918815470777708_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=AuMwxHikbF4AX8lFJp1&_nc_ht=scontent-hel3-1.xx&oh=00_AfBPK4s-ckEUxnrj1KpwCPdjp2ZDewsKDEHNcD98vBprkQ&oe=659BE832" />
        <Card.Body>
          <Card.Title>{products
        .filter(p => p.id === 3)
        .map(p => <p key={p.id}>{p.productName}</p>)
      }</Card.Title>
          <Card.Text>
           Pieni lauta kokeneelle surffarille
          </Card.Text>
          <Button variant="primary">Lisää ostoskoriin</Button>
          {products
        .filter(p => p.id === 3)
        .map(p => <p key={p.id}>{p.price} EUR</p>)}

        </Card.Body>
      </Card>
</div>
</article>
</div>
  )
}
