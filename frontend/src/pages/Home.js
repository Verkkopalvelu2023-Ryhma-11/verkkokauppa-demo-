import React from "react";
import Stack from "react-bootstrap/Stack";
import finit from "../images/finit_etusivu.png";
import laudat from "../images/laudat_etusivu.png";
import Kuva from "../components/etusivunkuva";

export default function Home() {
  return (
    <div>
      <Stack gap={3}>
        <div className="p-2">
          <h1>
            SURFFILAUDAT JA FINIT <br></br>CUSTOM MADE IN FINLAND
          </h1>
        </div>
        <div className="p-2">
          <a href="/Fins">

          <img src={finit} alt="finit" />
          </a>
        </div>
        <div className="p-2">
          {" "}
          <a href="/Boards">
          <img src={laudat} alt="laudat" />
          </a>
        </div>
      </Stack>
      <Kuva />
    </div>
  );
}
// jätin kuva-komponentin tähän, en onnistunut ratkomaan. Muotoilu löytyy app.css .etusivunkuva//
