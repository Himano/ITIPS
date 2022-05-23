/* Selectors */

const applianceInput = document.getElementById("appliance-input")
const itemList = document.querySelector(".itemList")
const centerContent = document.querySelector(".frontpage-center-content")
const vhContainer = document.querySelector(".varehus-container")
const varehus = document.querySelector(".varehus")





/* Functions */

function reset() {
    centerContent.innerHTML = "";
}

function loadWhite() {

    applianceArr.forEach(element => {
        itemList.innerHTML += `<a href="javascript:showWhiteInfo(${element.artNr})" class="applianceLink">${element.navn} (${element.artNr})</a>
        `
    });
    
    }


    function showWhiteInfo(xx){
        console.log(xx)
        const hihi = applianceArr.filter(show =>{
            return show.artNr.includes(xx)
        })
        
        console.log(hihi)

        let produsenten =(hihi[0].prod === "21552") ? "Electrolux":"Whirlpool"
        
        let eposten = (hihi[0].prod === "21552") ? "electrolux@ikea.com":"whirlpool@ikea.com"
        
        let telefonen = (hihi[0].prod === "21552") ? "+47 22 72 35 00":"+47 23 50 01 12"
        
        console.log(eposten)

        itemList.innerHTML = `
        <div class="prodShow">

        <img class="prodImg" src="${hihi[0].bilde}" alt="" srcset="">
        
        <h3 id="prodName"> <span class="underline">${hihi[0].navn}</span><br>
        91502345</h3>
        
        <p class="produsent"> Produsent: ${produsenten}</p>
        
        <div class="nrnr">
        <p class="nummer">${telefonen} </p> <button class="copyTlf">Copy</button>
        
        </div>
        
        <div class="nrnr">
        <p class="epost">${eposten} </p> <button class="copyEpost">Copy</button>
        
        </div>
        
        <div class="nrnr">
        <a href="#" target="_blank" class="smsCopy">Sms mal</a>
        <a href="${hihi[0].link}" target="_blank" class="webLink">Nettside</a>
        <a href="${hihi[0].mont}" target="_blank" class="webLink">PDF</a>
        
        </div>`
        
        }


 function oldWeb() {
     centerContent.innerHTML = "";
     
     for (let index = 0; index < webpages.length; index++) {
         
         centerContent.innerHTML += `<a href="${webpages[index].link}" target="_blank" class="pageLink">${webpages[index].year}</a>`
         
     }

 }


 function vhInfo() {

    centerContent.innerHTML =`<div class="varehus-container">
    <div class="varehus">
        <h3 class="vhtitle">Varehus og terminaler</h3>
        <div class="husene">
            

        </div>

    </div>

    <div class="vhinfo">
    <h3 class="vhtitle">Informasjon</h3>
        


    </div>

</div> `

const husene = document.querySelector(".husene")


for (let index = 0; index < vareHus.length; index++) {
    husene.innerHTML += `<a href="javascript:showInfo('${vareHus[index].navn}')" class="vhItem">${vareHus[index].navn}</a>` 
    

}
   

 };

 function showInfo(vhInput) {

    const filterVH = vareHus.filter(vhName => {
        return vhName.navn.includes(vhInput) 
        
      }) 

      console.log(filterVH)

      const vhInfoen = document.querySelector(".vhinfo")

      vhInfoen.innerHTML = `
      <h3 class="vhtitle">Informasjon</h3>

        <div class="infoen">
            <h3>${filterVH[0].navn}</h3>
            <p id="adress">${filterVH[0].adr}</p>
            <p>Åpningstider: ${filterVH[0].hours}</p>
            <p>småland: ${filterVH[0].småland}</p>
            <p>Resturant: ${filterVH[0].resturant}</p>
            <a href="${filterVH[0].link}" class="vhLink">Nettside</a>
        </div>
      
      `

 }






/* EventListeners */

applianceInput.addEventListener("keyup", function(e){
    const whiteSearch = e.target.value.toUpperCase();
    
    itemList.innerHTML = "";
    const filterWhite = applianceArr.filter(product => {
        return product.navn.includes(whiteSearch) 
        
      }) 

      const filterWW = applianceArr.filter(product => {
        return product.artNr.includes(whiteSearch) 
        
      }) 


      filterWhite.map(items =>{
          itemList.innerHTML += `<a href="javascript:showWhiteInfo(${items.artNr})" class="applianceLink">${items.navn} (${items.artNr})</a>`; 
      })

      filterWW.map(items =>{
        itemList.innerHTML += `<a href="javascript:showWhiteInfo(${items.artNr})" class="applianceLink">${items.navn} (${items.artNr})</a>`; 
    })
      
})





    /* Function calls */
    loadWhite()


