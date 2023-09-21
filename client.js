import { getUrl } from "./settings.js";

let url;
const fetchData = function(url, object){
    fetch(url)
    .then(res => res.json()) //for this exercise, just do this
    .then(data => {
     // Inside this callback, AND ONLY HERE the response data is available
     console.log("data",data);
     if(object === "cars"){
        const formattedData = formatCarData(data);
        document.querySelector("#show-all-data").innerHTML = formattedData;
     }else if(object === "oneCar"){
        const formattedData = formatCarData(data);
        document.querySelector("#show-single-data").innerHTML = formattedData;
     } else if(object === "members"){
        const formattedData = formatMemberData(data);
        document.querySelector("#show-all-data").innerHTML = formattedData;
     } else if(object === "oneMember"){
        const formattedData = formatMemberData(data);
        document.querySelector("#show-single-data").innerHTML = formattedData;
     } else if(object === "editOneCar"){
        document.querySelector("#edit-brand").value = data.brand;
        document.querySelector("#edit-model").value = data.model;
        document.querySelector("#edit-price").value = data.pricePrDay;

     }

    /* data now contains the response, converted to JavaScript
       Observe the output from the log-output above
       Now, just build your DOM changes using the data inside this block*/       
  })
}

const fetchAllCars = () => {
    url = getUrl()+"/api/cars";
    fetchData(url, "cars");
}
const fetchAllMembers = () => {
    url = getUrl()+"/api/members"
    fetchData(url, "members");
}
const fetchDataFromId = () => {
    const searchId = document.querySelector("#text-for-id").value;
    const selected = document.querySelector(`input[name="result"]:checked`);
    let searchType;
    if(selected.value === "Car"){
        url = getUrl()+"/api/cars/"+searchId;
        searchType = "oneCar";
    } else if(selected.value === "Member"){
        url = getUrl()+"/api/members/"+searchId;
        searchType = "oneMember";
    }
    fetchData(url, searchType);
}

const fetchDataToEdit = () => {
    const searchId = document.querySelector("#text-for-id2").value;
    if(searchId > 0){
        url = getUrl()+"/api/cars/"+searchId;
        fetchData(url, "editOneCar")
    }
    else{
       searchId.value = ""; 
    }
}

const formatCarData = (data) => {
    let dataString = "";
    if(data instanceof Array){
        dataString = data.map(car => `Id: ${car.id}, Brand: ${car.brand}, Model: ${car.model}, Price: ${car.pricePrDay}`).join("<br>")
    } else if(data instanceof Object){
        dataString = `Id: ${data.id}, Brand: ${data.brand}, Model: ${data.model}, Price: ${data.pricePrDay}`
    }
    return dataString;
}

//Reservations not included yet, but is available to grab from API
const formatMemberData = (data) => {
    let dataString = "";
    if(data instanceof Array){
        dataString = data.map(member => `Username: ${member.username}, Email: ${member.email}, Name: ${member.firstName} ${member.lastName}, Address: ${member.street}, ${member.zip} ${member.city}`).join("<br>")
    } else if(data instanceof Object){
        dataString = `Username: ${data.username}, Email: ${data.email}, Name: ${data.firstName}" "${data.lastName}, Address: ${data.street}, ${data.zip} ${data.city}`
    }
    return dataString;
}

function makeOptions(method, body) {
    const opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }
    if (body) { //Observe how we can add new fields to an object when needed
      opts.body = JSON.stringify(body);
    }
    return opts;
  }
  
const addMember = async () => {
    const usernameInput = document.querySelector("#input-field1").value;
    const emailInput = document.querySelector("#input-field2").value;
    const passwordInput = document.querySelector("#input-field3").value;
    const data = {username: usernameInput, email: emailInput, password: passwordInput};
    const options = makeOptions("POST", data);
    try{
        const response = fetch(getUrl+"/api/members", options);
        if(response.ok){
            const responseData = await response.json();
            console.log("Member created: " +responseData);
            //document.querySelector("#post-request-return").innerHTML = "Member Created: "+usernameInput;
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

const editCar = () => {
    const carId = document.querySelector("#text-for-id2").value;
    const brandInput = document.querySelector("#edit-brand").value;
    const modelInput = document.querySelector("#edit-model").value;
    const priceInput = document.querySelector("#edit-price").value;
    const data = {id: carId, brand: brandInput, model: modelInput, pricePrDay: priceInput};
    const options = makeOptions("PUT", data);
    fetch(getUrl()+"/api/cars/"+carId, options);

}

document.querySelector("#btn-get-all-cars").addEventListener("click", fetchAllCars);
document.querySelector("#btn-get-all-members").addEventListener("click", fetchAllMembers);
document.querySelector("#search-for-id-btn").addEventListener("click", fetchDataFromId);
document.querySelector("#submit-post-btn").addEventListener("click", addMember);
document.querySelector("#find-for-edit").addEventListener("click", fetchDataToEdit);
document.querySelector("#submit-for-edit").addEventListener("click", editCar);
