const btnEle = document.getElementById("btn"); // tell ma a joke 
let para = document.querySelector("#joke"); 

const apiKey = "bJ1rCe9da21aiuaaNFSwFw==wJC9fhpzkVP7paZ8" ;
const options = {
   method : "GET",
   headers: {
   "X-Api-Key" :apiKey ,
   }
}

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=" ;


async function getJoke(){

    para.innerText = "Updating..." ;
    // console.log("clicked");
    btnEle.disabled = true;
    btnEle.innerText = "Loading..." ;
    const response = await fetch(apiUrl , options);
    const data = await response.json() ;

    // console.log(data);
    // console.log(data[0].joke) ;

    btnEle.disabled = false ;
    btnEle.innerText = "Tell me a joke"
    para.innerHTML = data[0].joke ;
}

btnEle.addEventListener("click" , getJoke)  ;