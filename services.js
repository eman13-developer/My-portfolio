let servicesdata=[
    {img:"./images/Screenshot 2025-11-26 175320.png",name:"nascient mete",text:"Life often moves in unpredictable directions, but sometimes those unexpected moments lead to the most meaningful discoveries."
    },
    {
        img:"./images/Screenshot 2025-11-26 175923.png",name:"eolse commandi",text:"Life often moves in unpredictable directions, but sometimes those unexpected moments lead to the most meaningful discoveries."
    },
    {
        img:"./images/Screenshot 2025-11-26 175944.png",name:"ledo markt",text:"Life often moves in unpredictable directions, but sometimes those unexpected moments lead to the most meaningful discoveries."
    },
    {img:"./images/Screenshot 2025-11-26 175320.png",name:"nascient mete",text:"Life often moves in unpredictable directions, but sometimes those unexpected moments lead to the most meaningful discoveries."
    },
    {
        img:"./images/Screenshot 2025-11-26 175923.png",name:"eolse commandi",text:"Life often moves in unpredictable directions, but sometimes those unexpected moments lead to the most meaningful discoveries."
    },
    {
        img:"./images/Screenshot 2025-11-26 175944.png",name:"ledo markt",text:"Life often moves in unpredictable directions, but sometimes those unexpected moments lead to the most meaningful discoveries."
    },
]
let servicescard=document.querySelector(".servicecard1");
servicesdata.forEach((meriserivice)=>{
    servicescard.innerHTML+=` <div class="sercard1">
        <div class="serimg">
            <img src="${meriserivice.img}" alt="">
        </div>
        <h2>${meriserivice.name}</h2>
        <p>${meriserivice.text}</p>
       </div>`

})

