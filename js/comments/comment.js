async function comments(){
    let commentsTitData = await fetch("https://alisaadatvand.github.io/jsonServer/db.json");
    let commentsTitRes = await commentsTitData.json();
    let commentsTit = await commentsTitRes.commentsTitle.map((elem)=>{
        return`<h2>${elem.title}</h2>`
    });
    document.querySelector(".commentMain").insertAdjacentHTML("afterbegin",commentsTit.join(""))

    // comments

    let commentsData = await fetch("https://alisaadatvand.github.io/jsonServer/db.json");
    let commentsRes = await commentsData.json();
    let comments = await commentsRes.comments.map((elem)=>{
        return`<div class="swiper-slide">
          <div class="info">
            <h3>${elem.name}</h3>
            <p>${elem.text}</p>
          </div>
        </div>`
    });
    document.querySelector(".commentContainer").insertAdjacentHTML("afterbegin",comments.join(""))
}
export default comments;