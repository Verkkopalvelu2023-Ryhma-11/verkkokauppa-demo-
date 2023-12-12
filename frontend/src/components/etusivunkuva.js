import React from "react";
import etusivunkuva from '../images/examplephoto_frontpage.png'


export default function Kuva() {
    return (

<div className='etusivunkuva'>
<img src={etusivunkuva} alt='kuva' />
</div>
    ) ; }

// tein tämän koska ajattelin että se olisi helpompi asettelun kautta erillisenä, mutta ei onnistunut//