import { SERVER_URL } from "../../settings.js";


export function initFindCar(){
  document.querySelector("#result").innerText = ""
  document.querySelector("#btn").addEventListener("click", findCar)
}

async function findCar() {
  document.querySelector("#error").innerText = "";
  document.querySelector("#result").innerText = "";
  const id = document.querySelector("#car-id").value

  try{
  const car = await fetch( SERVER_URL+"/"+id)
              .then(res => {
                if(!res.ok){
                  throw new Error("Car not found")
                }
                return res.json()
              })
              document.querySelector("#result").innerText = JSON.stringify(car, null, 3);

  } catch(e){
    document.querySelector("#error").innerText = e.message;
  }
}

