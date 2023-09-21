let sharedText = ""

export function initP2(){
    document.querySelector("#btn-save-text").addEventListener("click", readText);
    document.querySelector("#text").innerText = sharedText;
  }

export function getText(){
    return sharedText;
}

function readText(){
    sharedText = document.querySelector("#input-text").value;
    document.querySelector("#text").innerText = sharedText;
}