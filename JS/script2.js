const textElement = document.getElementById("text")
const optionButtons = document.getElementById("option-buttons")
const sakshistorikk = document.getElementById("sakshistorikk")
const tipContainer = document.getElementById("tipper-links")
const produktListe = document.querySelector(".produkt-liste")
const kopier = document.getElementById("kopier")
const input = document.getElementById('story');

let productList = [
    {
        "product":"Sofa",
        "room":"Stue",
        "id": 0,
        
        
        },

        {
            "product":"Seng",
            "room":"Soverom",
            "id": 1,
            },

            {
                "product":"Madrass",
                "room":"Soverom",
                "id": 2,
                "url": "javascript:startGame()",
            
            },

                {
                    "product":"FAKTUM",
                    "room":"Kjøkken",
                    "id":3,
                    },

                


]


/* Experimental */

function selectText() {
    
    input.focus();
    input.select();

    document.execCommand("copy")
  }










/* The good stuff */

function onLoad() { 

    productList.forEach(function (product) {
        console.log(product.product)
        produktListe.innerHTML += `<a href="${product.url}" class="product-item">${product.product}</a>`;
    })
}

function startGame() {
    showTextNode(1)
    input.innerText = test;


}


function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text;

    
     while (optionButtons.firstChild) {
         optionButtons.removeChild(optionButtons.firstChild)
         
     }

     textNode.options.forEach(option => {
         const button = document.createElement("button")
         button.innerText = option.text
         button.classList.add('btn')
         button.addEventListener("click", () => selectOption(option))
         optionButtons.appendChild(button)
     })

}

function selectOption(option) {
    input.innerText = test;
    test += option.testNode;
    input.innerText = test;
    const nextTextNodeId = option.nextText
    showTextNode(nextTextNodeId)

    console.log(option.hasOwnProperty("tip"))

    if(option.hasOwnProperty("tip") ==true ){

        console.log(option.tip)
        tipContainer.innerHTML += ` <a href="${option.url}" target="_blank" class="caseTip">${option.tip}</a> `;

    };
    
}

function hei(){
    console.log("Hei")
}


onLoad();