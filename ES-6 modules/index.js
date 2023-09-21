//TODO: Import loadHtml and renderHtml from the util.js file
import {loadHtml, renderHtml} from "./utils.js"

//TODO: import initP2 from p2.js and use it in handleButtonClicks (just comment it in)
import { initP2 } from "./pages/p2/p2.js"
import { initP3 } from "./pages/p3/p3.js"

window.addEventListener("load", async () => {
    const templateP1 = await loadHtml("./pages/p1/p1.html")
    const templateP2 = await loadHtml("./pages/p2/p2.html")
    const templateP3 = await loadHtml("./pages/p3/p3.html")
     
     document.getElementById("btns").addEventListener("click", handleButtonClicks);
     renderHtml(templateP1, "content");
 
     function handleButtonClicks(evt) {
         const target = evt.target
         const isMenuBtn = target.tagName === "BUTTON" && target.id.startsWith("menu-btn-")
         if (target.id === "menu-btn-p1") {
             renderHtml(templateP1, "content")
         }
         if (target.id === "menu-btn-p2") {
             renderHtml(templateP2, "content")
             initP2()
         }
         if (target.id === "menu-btn-p3") {
             renderHtml(templateP3, "content")
             initP3()
         }
     }  
 })
 