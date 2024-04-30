async function filimo(){

    //filimoTitle

    let filimoData = await fetch("https://alisaadatvand.github.io/jsonServer/db.json");
    let filimoRes = await filimoData.json();
    let filimo = await filimoRes.filimo.map((elem)=>{
        return `        <div class="filimoIcon">
        <img src="${elem.icon}" alt="filimo">
      </div>

      <div class="filimoDescription">
      </div>

      <div class="filimoBtn">
        ${elem.btn}
      </div>`
    });

    document.querySelector(".filimoMain").insertAdjacentHTML("afterbegin",filimo.join(""))

    // filimoDescriptions

    let filimoDescriptionData = await fetch("https://alisaadatvand.github.io/jsonServer/db.json");
    let filimoDescriptionRes = await filimoDescriptionData.json();
    let filimoDescription = await filimoDescriptionRes.filimoDescription.map((elem)=>{
        return `<span>${elem.text}</span>`
    });

    document.querySelector(".filimoDescription").insertAdjacentHTML("afterbegin",filimoDescription.join(""))

}
export default filimo;

// 