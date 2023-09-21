import { SERVER_URL } from "../../settings.js"

export async function initAllCars(){
  console.log("initAllCars")

  const cars = await getCars();
  const listItems = cars.map(car => `<li>Id: ${car.id}, Brand: ${car.brand}</li>`)
  .join("")
    document.querySelector("#cars").innerHTML = listItems;
  }
  
   async function getCars (){
    const cars = await fetch(SERVER_URL).then(res=>res.json());
    return cars;
  }

  //Tegn UI med cars


  //Gamle udgave
  // fetch(SERVER_URL)
  // .then(res => res.json())
  // .then(cars => {
  //   const listItems = cars.map(car => `<li>Id: ${car.id}, Brand: ${car.brand}</li>`).join("")
  //   document.querySelector("#cars").innerHTML = listItems;
  // })