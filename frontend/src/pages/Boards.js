import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import './Boards.css';

export default function Boards() {
  return (
    <div id='Boards'>
    <h3>Surffilaudat</h3>

    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://scontent-hel3-1.xx.fbcdn.net/v/t1.6435-9/191109284_4073412502697307_1073918815470777708_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=AuMwxHikbF4AX8lFJp1&_nc_ht=scontent-hel3-1.xx&oh=00_AfBPK4s-ckEUxnrj1KpwCPdjp2ZDewsKDEHNcD98vBprkQ&oe=659BE832" />
        <Card.Body>
          <Card.Title>Surffilauta 1</Card.Title>
          <Card.Text>
            Iso lauta aloittelijalle tai pieniin aaltoihin
          </Card.Text>
          <Button variant="primary">Lisää ostoskoriin</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://scontent-hel3-1.xx.fbcdn.net/v/t1.6435-9/191109284_4073412502697307_1073918815470777708_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=AuMwxHikbF4AX8lFJp1&_nc_ht=scontent-hel3-1.xx&oh=00_AfBPK4s-ckEUxnrj1KpwCPdjp2ZDewsKDEHNcD98vBprkQ&oe=659BE832" />
        <Card.Body>
          <Card.Title>Surffilauta 2</Card.Title>
          <Card.Text>
           Keskikokoinen lauta kaikelle säälle
          </Card.Text>
          <Button variant="primary">Lisää ostoskoriin</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://scontent-hel3-1.xx.fbcdn.net/v/t1.6435-9/191109284_4073412502697307_1073918815470777708_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=AuMwxHikbF4AX8lFJp1&_nc_ht=scontent-hel3-1.xx&oh=00_AfBPK4s-ckEUxnrj1KpwCPdjp2ZDewsKDEHNcD98vBprkQ&oe=659BE832" />
        <Card.Body>
          <Card.Title>Surffilauta 3</Card.Title>
          <Card.Text>
           Pieni lauta kokeneelle surffarille
          </Card.Text>
          <Button variant="primary">Lisää ostoskoriin</Button>
        </Card.Body>
      </Card>
</div>

</div>
  )
}
