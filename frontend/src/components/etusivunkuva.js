import React from "react";
import etusivunkuva from '../images/examplephoto_frontpage.png'


export default function Kuva() {
    return (
      <article style={{ position: 'absolute', top: 200, right: 10, padding: 5, display: "flex" }}>
        <img src={etusivunkuva} alt='kuva' />
      </article>
    );
  }
// tein tämän koska ajattelin että se olisi helpompi asettelun kautta erillisenä, mutta ei onnistunut//