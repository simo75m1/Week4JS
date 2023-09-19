const formatBeerData = (beerData) => {
    let tableData;
    if(beerData instanceof Array){
         tableData = beerData.map(beer => `<tr><td>${beer.name}</td><td>${beer.tagline}</td><td>${beer.abv}</td><td>${beer.ibu}</td></tr>`).join("");
    }
    else if(beerData instanceof Object){
        tableData = `<tr><td>${beerData.name}</td><td>${beerData.tagLine}</td><td>${beerData.abv}</td><td>${beerData.ibu}</td></tr>`
    }
    return tableData;
}
let url = "https://api.punkapi.com/v2/beers";
let beerData;
const fetchData = function(url, filter){
    fetch(url)
    .then(res => res.json()) //for this exercise, just do this
    .then(data => {
     // Inside this callback, AND ONLY HERE the response data is available
     beerData = data;
     console.log("data",data);
     beerTable = formatBeerData(beerData);
     document.querySelector("#tbl1").innerHTML = beerTable;
     
    /* data now contains the response, converted to JavaScript
       Observe the output from the log-output above
       Now, just build your DOM changes using the data inside this block*/       
  })
}
fetchData(url); 

const filterBeers = () => {
    const abvValue = document.querySelector("#filter-abv").value;
    const filteredSearch = beerData.filter(beer => beer.abv > abvValue);
    const beerTable = formatBeerData(filteredSearch);
    document.querySelector("#tbl1").innerHTML = beerTable;
}

document.querySelector("#abv-btn").addEventListener("click", filterBeers);