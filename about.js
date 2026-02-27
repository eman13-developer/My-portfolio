let bars=document.querySelectorAll('.skillbar');
bars.forEach(bar=>{
    let fill=bar.querySelector('.fill');
    let percent=bar.getAttribute('data-percent');
    setTimeout(()=>{
        fill.style.width=percent+"%";
    },100);
})
// window.addEventListener("load", () => {  // wait till page fully loads
//     let bars = document.querySelectorAll('.skillbar');

//     bars.forEach(bar => {
//         let fill = bar.querySelector('.fill');
//         let percent = bar.getAttribute('data-percent');

//         // thoda delay for smooth transition
//         setTimeout(() => {
//             fill.style.width = percent + "%";  // CSS transition se smooth fill
//         }, 100);
//     });
// });
// function runCounters(){
//     counters.forEach(counter=>{
//         let counter=document.querySelector('.count');
//         const interval=20;
//         const duration=2000;
//     let target=parseInt(counter.getAttribute('data-target'));
//     const steps=Math.round(duration/interval);
//     const increment=Math.ceil(target/steps);
//     let current=0;
//     const timer=setInterval(()=>{
//         current+=increment;
//         if(current>=target){
//             counter.textContent=target;
//             clearInterval(timer);
//         }
//         else{
//             counter.textContent=current;
//         }
//     },interval)

// })
// }
// function runCounters(){
    let counter=document.querySelectorAll('.count');
    const interval=20;
    const duration=2000;
    counter.forEach(counter=>{
        let target=parseInt(counter.getAttribute('data-target'));
        const steps=Math.round(duration/interval);
        const increment=Math.ceil(target/steps);
        let current=0;
        const timer=setInterval(()=>{
            current+=increment;
            if(current>=target){
                counter.textContent=target;
                clearInterval(timer);
            }
            else{
                counter.textContent=current;
            }
        },interval)
    })
// }
// let data=[
//     {

//         img:"./images/ahmer picture.png",name:"ahmer khan",role:"web developer",
//         icon:"fa-solid fa-star",
//         text:"She is a dedicated, detail-oriented frontend developer who consistently delivers clean, responsive UIs. A great teammate to work with."
//     },
//      {
//         img:"./images/hussnain.jpg",name:"hussnain kabir",role:"web developer",
//         icon:"fa-solid fa-star",
//         text:"She delivers intuitive UI/UX with great attention to responsive, accessible design, and her front-end performance is consistently impressive."
//     },
//      {
//         img:"./images/bhai pic.png",name:"junaid saeed",role:"digital marketer",
//         icon:"fa-solid fa-star",
//         text:"Her front-end work is sharp and reliable, and she’s great to work with in a team setting."
//     },
//      {
//         img:"./images/monneza.png",name:"moneeza noor",role:"digital marketer",
//         icon:"fa-solid fa-star",
//         text:"A talented frontend developer who brings clarity, creativity, and great energy to the team."
//     },
//     {
//         img:"./images/hamza.png",name:"hamza rafiq",role:"uI designer",
//         icon:"fa-solid fa-star",
//         text:
// "A skilled frontend developer delivering smooth, responsive, and polished interfaces with confidence."

//     },

// ]
// let cards=document.querySelector(".cards");
// const circles = document.querySelectorAll(".circle");
// data.forEach((meradata)=>{
//     cards.innerHTML+=`<div class="card1">
//                         <div class="imgcard">
//                         <img src="${meradata.img}" alt="">
//                     </div>
//                     <h2>${meradata.name}</h2>
//                     <h4>${meradata.role}</h4>
//                     <div class="star">
//                         <i class="${meradata.icon}"></i> 
//                          <i class="${meradata.icon}"></i> 
//                           <i class="${meradata.icon}"></i> 
//                            <i class="${meradata.icon}"></i>  
//                             <i class="${meradata.icon}"></i>            
//                     </div>
//             <p>${meradata.text}</p>
//                 </div>`
// },)
// // let index = 0;
// // const cardsArray = document.querySelectorAll(".card1");
// // const totalCards = cardsArray.length;
// // const delay = 3000; // 3 seconds

// // setInterval(() => {
// //     const card = cardsArray[index];
// //     const cardCenter = card.offsetLeft + card.offsetWidth / 2;
// //     const containerCenter = cards.offsetWidth / 2;
// //     const scrollPos = cardCenter - containerCenter;

// //     cards.scrollTo({
// //         left: scrollPos,
// //         behavior: 'smooth'
// //     });

// //     index++;
// //     if(index >= totalCards) index = 0;
// // }, delay);

// // const cardList = document.querySelectorAll(".card1");
// // let index = 0;

// // // function to highlight current circle
// // function setActiveCircle(i) {
// //     circles.forEach((c, idx) => {
// //         c.classList.toggle("active", idx === i);
// //     });
// // }

// // // function to center card
// // function centerCard(i) {
// //     const card = cardList[i];
// //     const cardCenter = card.offsetLeft + card.offsetWidth / 2;
// //     const containerCenter = cards.offsetWidth / 2;
// //     const scrollPos = cardCenter - containerCenter;

// //     cards.scrollTo({
// //         left: scrollPos,
// //         behavior: "smooth"
// //     });
// // }

// // // initial
// // setActiveCircle(0);
// // centerCard(0);

// // const delay = 3000;
// // setInterval(() => {
// //     index++;
// //     if (index >= cardList.length) index = 0;

// //     centerCard(index);
// //     setActiveCircle(index);
// // }, delay);

// // // optional: make circles clickable
// // circles.forEach((dot, i) => {
// //     dot.addEventListener("click", () => {
// //         index = i;
// //         centerCard(i);
// //         setActiveCircle(i);
// //     });
// // });







/* ================= SKILL BARS ================= */

/* ================= TESTIMONIAL DATA ================= */

let data = [
    {
        img:"./images/ahmer picture.png",
        name:"ahmer khan",
        role:"web developer",
        icon:"fa-solid fa-star",
        text:"She is a dedicated, detail-oriented frontend developer who consistently delivers clean, responsive UIs."
    },
    {
        img:"./images/hussnain.jpg",
        name:"hussnain kabir",
        role:"web developer",
        icon:"fa-solid fa-star",
        text:"She delivers intuitive UI/UX with great attention to responsive design."
    },
    {
        img:"./images/bhai pic.png",
        name:"junaid saeed",
        role:"digital marketer",
        icon:"fa-solid fa-star",
        text:"Her front-end work is sharp and reliable."
    },
    {
        img:"./images/monneza.png",
        name:"moneeza noor",
        role:"digital marketer",
        icon:"fa-solid fa-star",
        text:"A talented frontend developer who brings clarity and creativity."
    },
    {
        img:"./images/hamza.png",
        name:"hamza rafiq",
        role:"UI designer",
        icon:"fa-solid fa-star",
        text:"A skilled frontend developer delivering smooth, polished interfaces."
    }
];


/* ================= CREATE CARDS ================= */

let cardsContainer = document.querySelector(".cards");
let circlesContainer = document.querySelector(".circles");

cardsContainer.innerHTML = "";
circlesContainer.innerHTML = "";

data.forEach((item, i) => {

    cardsContainer.innerHTML += `
        <div class="card1">
            <div class="imgcard">
                <img src="${item.img}" alt="">
            </div>
            <h2>${item.name}</h2>
            <h4>${item.role}</h4>
            <div class="star">
                <i class="${item.icon}"></i>
                <i class="${item.icon}"></i>
                <i class="${item.icon}"></i>
                <i class="${item.icon}"></i>
                <i class="${item.icon}"></i>
            </div>
            <p>${item.text}</p>
        </div>
    `;

    circlesContainer.innerHTML += `<div class="circle"></div>`;
});


/* ================= AUTO SLIDER ================= */

const cardList = document.querySelectorAll(".card1");
const circles = document.querySelectorAll(".circle");

let index = 0;
const delay = 3000;

/* Highlight Active Dot */
function setActiveCircle(i){
    circles.forEach((c, idx) => {
        c.classList.toggle("active", idx === i);
    });
}

/* Center Card Properly */
function centerCard(i){
    const card = cardList[i];
    const containerWidth = cardsContainer.clientWidth;
    const cardWidth = card.clientWidth;

    const scrollPosition =
        card.offsetLeft - (containerWidth / 2 - cardWidth / 2);

    cardsContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
    });
}

/* Auto Slide Without Reverse */
function autoSlide(){

    if(index < cardList.length - 1){
        index++;
        centerCard(index);
        setActiveCircle(index);
    } 
    else {
        index = 0;

        // Instant jump to first (no reverse)
        cardsContainer.scrollTo({
            left: 0,
            behavior: "auto"
        });

        setActiveCircle(0);
    }
}

let sliderInterval = setInterval(autoSlide, delay);


/* Clickable Dots */
circles.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        clearInterval(sliderInterval);
        index = i;
        centerCard(i);
        setActiveCircle(i);
        sliderInterval = setInterval(autoSlide, delay);
    });
});


/* Responsive Fix */
window.addEventListener("resize", () => {
    centerCard(index);
});

/* Initial Load */
window.addEventListener("load", () => {
    centerCard(0);
    setActiveCircle(0);
});




/* ================= TESTIMONIAL DATA ================= */

