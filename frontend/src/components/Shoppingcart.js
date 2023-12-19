import { cartSignal } from "./signals";

//nämä oli vaan itseäni varten testimielessä. Miten haetaan tuo products eli fins ja boards?
const products = [ 
    {id:1, pname: 'evä'},
    {id:2, pname: 'evä2'},
    {id:3, pname: 'evä3'},
];



export default function ShoppingCart(){
    return(
        <div>
            <h2>Ostoskori</h2>
            <CartContents/>
        </div>
    );
}

function CartContents(){

    const cartProducts = cartSignal.value;

    return(
        <div>
            <h3>Sisältö</h3>
        <ul>
            {cartProducts.map( p => <li key={p.id}>{p.pname} x {p.count} </li>)}
        </ul>
        </div>
    )
}