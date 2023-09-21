import { SERVER_URL } from "../../settings.js";
import { makeOptions } from "../../utils.js";

export function initEditCar(){
  document.querySelector("#editCar-btn").addEventListener("click", findEdit)
  document.querySelector("#save-btn").addEventListener("click", saveEdit)
}

async function findEdit(){
  document.querySelector("#error").innerText = "";
  
  const id = document.querySelector("#edit-id").value

  try{
  const car = await fetch( SERVER_URL+"/"+id)
              .then(res => {
                if(!res.ok){
                  throw new Error("Car not found")
                }
                return res.json()
              })
              document.querySelector("#edit-brand").value = car.brand;
              document.querySelector("#edit-model").value = car.model;
              document.querySelector("#edit-pricePrDay").value = car.pricePrDay;
              document.querySelector("#edit-bestDiscount").value = car.bestDiscount;
  } catch(e){
    document.querySelector("#error").innerText = e.message;
  }
}

async function saveEdit(){
  const editId = document.querySelector("#edit-id").value;
  const editBrand = document.querySelector("#edit-brand").value;
  const editModel = document.querySelector("#edit-model").value;
  const editPrice = document.querySelector("#edit-pricePrDay").value;
  const editDiscount = document.querySelector("#edit-bestDiscount").value;

  const editCar = {
    id : editId,
    brand : editBrand,
    model : editModel,
    pricePrDay : editPrice,
    bestDiscount : editDiscount
  }
  const options = makeOptions("PUT", editCar);
  const editUrl = SERVER_URL+"/"+editId;
  const editedCar = await fetch(editUrl,options)
  .then(res=>res.json())
  console.log(editedCar)
  document.querySelector("#edit-id").value = "";
  document.querySelector("#edit-brand").value = "";
  document.querySelector("#edit-model").value = "";
  document.querySelector("#edit-pricePrDay").value = "";
  document.querySelector("#edit-bestDiscount").value = "";
}