import {SERVER_URL} from "../../settings.js"
import {makeOptions} from "../../utils.js"

export function initAddCar(){
  document.querySelector("#addCar-btn").addEventListener("click", addCar)
}


async function addCar(){

  //Get Cars from form
  const car = {
    id : 10000,
    brand : document.querySelector("#input-brand").value,
    model : document.querySelector("#input-model").value,
    pricePrDay : document.querySelector("#input-pricePrDay").value,
    bestDiscount : document.querySelector("#input-bestDiscount").value
  }

 const options = makeOptions("POST",car)

 const newCar = await fetch(SERVER_URL,options)
  .then(res=>res.json())
  console.log(newCar)
}