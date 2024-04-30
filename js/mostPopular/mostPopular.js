async function mostPopular(){
    
    // هدر محبوب ترین های فیلیمو

    let mostPupularHeaderData = await fetch("https://alisaadatvand.github.io/jsonServer/db.json");
    let mostPopularHeaderRes = await mostPupularHeaderData.json();
    let mostPopularHeader = await mostPopularHeaderRes.mostPopularHeader.map((elem)=>{
        return `<h4>${elem.text}</h4>`
    })
    
    document.querySelector(".headerMostPopular").insertAdjacentHTML("afterbegin",mostPopularHeader.join(""))

    // انتخاب فیلم یا سریال

    let mostPupularHeaderSelectData = await fetch("https://alisaadatvand.github.io/jsonServer/db.json");
    let mostPopularHeaderSelectRes = await mostPupularHeaderSelectData.json();
    let mostPopularHeaderSelect = await mostPopularHeaderSelectRes.mostPopularHeaderSelect.map((elem)=>{
        if(elem.text==="سریال"){
            return `<span class="selectActive serialBtn">${elem.text}</span>`
        }else{
            return `<span class="filmBtn">${elem.text}</span>`
        }
    })

    document.querySelector(".select").insertAdjacentHTML("afterbegin",mostPopularHeaderSelect.join(""))

    // سریال ها 

    let serialsMostPopularData = await fetch("https://alisaadatvand.github.io/jsonServer/db.json");
    let serialsMostPopularRes = await serialsMostPopularData.json();
    let serialsMostPopular = await serialsMostPopularRes.serialsMostPopular.map((elem)=>{
        if(elem.id===1){
            return `<div class="firstCover"><img src="${elem.src}" alt="${elem.alt}"><img class="special" src="./public/images/specialfilimo/special.svg"></div>`
        }else{
            return `<div><img src="${elem.src}" alt="${elem.alt}"><img class="special" src="./public/images/specialfilimo/special.svg"></div>`
        }
    })

    document.querySelector(".serialsMostPopular").insertAdjacentHTML("afterbegin",serialsMostPopular.join(""))

    // فیلم ها

    let filmsMostPopularData = await fetch("https://alisaadatvand.github.io/jsonServer/db.json");
    let filmsMostPopularRes = await filmsMostPopularData.json();
    let filmsMostPopular = await filmsMostPopularRes.filmsMostPopular.map((elem)=>{
        if(elem.id===1){
            return `<div class="firstCover"><img src="${elem.src}" alt="${elem.alt}"><img class="special" src="./public/images/specialfilimo/special.svg"></div>`
        }else{
            return `<div><img src="${elem.src}" alt="${elem.alt}"><img class="special" src="./public/images/specialfilimo/special.svg"></div>`
        }
    })

    document.querySelector(".filmsMostPopular").insertAdjacentHTML("afterbegin",filmsMostPopular.join(""))

    // انتخاب فیلم یا سریال

    let serialBtn = document.querySelector(".selectActive")
    let filmBtn = document.querySelector(".filmBtn")
    let serialBox = document.querySelector(".serialsMostPopular")
    let filmBox = document.querySelector(".filmsMostPopular")

    document.querySelector(".filmBtn").addEventListener("click",()=>{
        filmBtn.classList.add("selectActive")
        serialBtn.classList.remove("selectActive")

        serialBox.classList.add("notActive")
        filmBox.classList.add("active")
    })
    document.querySelector(".serialBtn").addEventListener("click",()=>{
        serialBtn.classList.add("selectActive")
        filmBtn.classList.remove("selectActive")

        serialBox.classList.remove("notActive")
        filmBox.classList.remove("active")

    })

}

export default mostPopular;