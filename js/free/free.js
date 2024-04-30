async function free(){

    // title

    let freeTitleData = await fetch("https://alisaadatvand.github.io/jsonServer/db.json");
    let freeeTitleRes = await freeTitleData.json();
    let freeTitle = await freeeTitleRes.freeTitle.map((elem)=>{
        return`<h1>${elem.title}</h1>`
    });
    document.querySelector(".freeMain").insertAdjacentHTML("afterbegin",freeTitle.join(""));

    // free slider

    
    let freeData = await fetch("https://alisaadatvand.github.io/jsonServer/db.json");
    let freeeRes = await freeData.json();
    let free = await freeeRes.free.map((elem)=>{
        return`<div class="swiper-slide">
        <img class="test" src="${elem.src}" alt="free">
        <span>${elem.title}</span>
      </div>`
    });
    document.querySelector(".freeSlider2").insertAdjacentHTML("afterbegin",free.join(""));

    // active border add enevt listener

    let imgs = document.querySelectorAll(".freeSwiper .swiper-wrapper .swiper-slide img")
    console.log(imgs);
    imgs.forEach((elem)=>{
        elem.addEventListener("click",function(){
            imgs.forEach((del)=>{
                if(del.classList.contains("freeActive")){
                    del.classList.remove("freeActive")
                }

                elem.classList.add("freeActive")
            })
        })
    })
}
export default free;