import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";
import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";


console.log(RMFunctions.trees);
RMFunctions.wildlife();


console.log(parkTrees);
parkWildlife();

export default function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}