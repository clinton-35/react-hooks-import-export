import React from "react";
import howManyParks from "./parks/howManyParks";
import { trees, wildlife, elevation } from "./parks/RockyMountain";
import Hogwarts from "./Hogwarts";
import MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return (<> 
  <h1>Colorado State Parks!</h1>;

  <Hogwarts/>
  
  </>)
}


export default ColoradoStateParks;
