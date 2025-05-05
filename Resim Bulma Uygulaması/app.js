const fromWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("form");
const saerchInput = document.querySelector("#search-input");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imagelist-wapper");

runEventListeners();

function runEventListeners() {
    form.addEventListener("submit", search);
    clearButton.addEventListener("click", clear);
}

function clear(){
    // imageListWrapper.innerHTML = "";
    saerchInput.value = "";
    Array.from(imageListWrapper.children).forEach((child)=>child.remove())
}

function search(e) {
    const value = saerchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method: "GET",
        headers: {
            Authorization :"Client-ID -NLI23JaESktyEE55MTV5MCMRlsrQDt0fLO_7g_fQhA"
        }
    })
    .then((res)=> res.json())
    .then((data)=>{
        Array.from(data.results).forEach((image)=>{
            addImageToUI(image.urls.small)
        })
    })
    .catch((err)=> console.log(err));

    e.preventDefault();
}

function addImageToUI(url){
    const div = document.createElement("div");
    div.className = "card";

    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.height = "400";
    img.width = "400";

    div.append(img);
    imageListWrapper.append(div);
}