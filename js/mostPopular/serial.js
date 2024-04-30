async function serial(){

    // let selectSerial =  [...document.querySelectorAll(".serialsMostPopular div")]
    // let parentSelectSerial =  document.querySelector(".serialsMostPopular")
    // console.log(selectSerial);
    // // parentSelectSerial.addEventListener("click",function(){
    // //     selectSerial.classList
    // //     // selectSerial.forEach((elem)=>{
    // //     //     elem.addEventListener(("click",function(){
    // //     //         elem.classList.add("firstCover")
    // //     //     }))
    // //     // })
    // // })



    let bgBox = document.querySelector(".serialDetail")
    let serialData = await fetch("https://alisaadatvand.github.io/jsonServer/db.json")
    let serialRes = await serialData.json()
    let serial = await serialRes.serials.map((elem)=>{
    // bgBox.style.backgroundImage=`url(${elem.img})`
        return`<div class="upDetail">

        <div class="right">
        <h4>${elem.title}</h4>
        <span>کارگردان : ${elem.director}</span>
        <div class="type">
          <span>${elem.type1}</span>
          <span>${elem.type2}</span>
        </div>
        <p>${elem.description}</p>
        </div>

        <div class="left"><img src="${elem.icon}" alt="${elem.alt}">
        </div>

      </div>`
    })
    document.querySelector(".detail").insertAdjacentHTML("afterbegin",serial.join(""))

    // swiper serial 1

    let serialSwiperData = await fetch("https://alisaadatvand.github.io/jsonServer/db.json")
    let serialSwiperRes = await serialSwiperData.json()
    let serialSwiper = await serialSwiperRes.swiperserial1.map((elem)=>{
        if(elem.id===1){
            return`<div class="swiper-slide"><img src="${elem.src}" alt="">
            <span>${elem.title}</span></div>`
        }else{
            return`<div class="swiper-slide"><img class="private" src="${elem.src}" alt="">
            <span>${elem.title}</span></div>`
        }
    })
  document.querySelector(".serialSwiper .swiper-wrapper").insertAdjacentHTML("beforeend",serialSwiper.join(""))


}
export default serial;