let projects=[
    {
        img:"./images/estore.png",text:"estore",paragraph:"ecommerce website",icon1:"fa-brands fa-searchengin",link:"Templates/estore/template.html",icon2:"fa-solid fa-link",
        category:"css"
    },
    {
        img:"./images/pic genial.png",text:"genial",paragraph:"modern genial store",icon1:"fa-brands fa-searchengin",link:"Templates/genial/genial.html",icon2:"fa-solid fa-link",
        category:"css"
    },
    {
        img:"./images/portfoio.png",text:"portfolio",paragraph:"Professional Portfolio",icon1:"fa-brands fa-searchengin",link:"Templates/portfolio/portfolio.html",icon2:"fa-solid fa-link",
        category:"css"
    },
    {
        img:"./images/Screenshot 2025-11-28 175518.png",text:"acdamia",paragraph:"education",icon1:"fa-brands fa-searchengin",link:"Templates/acdamia/acdamia.html",icon2:"fa-solid fa-link",
        category:"css"
    },
    {
        img:"./images/Screenshot 2025-11-28 175632.png",text:"ecommerce",paragraph:"ecommerce website",icon1:"fa-brands fa-searchengin",link:"Templates/ecommerce/ecommerce.html",icon2:"fa-solid fa-link",
        category:"java-scipt"
    },
    {
        img:"./images/Screenshot 2025-11-28 175721.png",text:"acme",paragraph:"covid-19",icon1:"fa-brands fa-searchengin",link:"Templates/acme/acme.html",icon2:"fa-solid fa-link",
        category:"css"
    },
]
let mineprojects=document.querySelector(".mineprojects");
function showprojects(){
mineprojects.innerHTML = "";
    projects.map((mereprojects)=>{
        mineprojects.innerHTML+=`<div class="firstproject">
                    <div class="imgpro imgestore">
                    <img src="${mereprojects.img}" alt="">
                    </div>
                    <div class="contentproject">
                    <div class="estorehead">
                    <h4>${mereprojects.text}</h4>
                    <p>${mereprojects.paragraph}</p>
                    </div>
                    <div class="estoreicons">
                    <i class="${mereprojects.icon1}"></i>
                    <a target="_blank" href="${mereprojects.link}"><i class="${mereprojects.icon2}"></i></a>
                    </div>
                    </div>
                    </div>`
                })
            }
            showprojects();
function showCSSProjects(){
    mineprojects.innerHTML = ""; // container clear karo

    // filter CSS projects
    let filtered = projects.filter(mereprojects => mereprojects.category === "css");

    // map over filtered projects
    filtered.map(mereprojects => {
        mineprojects.innerHTML += `
        <div class="firstproject">
            <div class="imgpro imgestore">
                <img src="${mereprojects.img}" alt="">
            </div>
            <div class="contentproject">
                <div class="estorehead">
                    <h4>${mereprojects.text}</h4>
                    <p>${mereprojects.paragraph}</p>
                </div>
                <div class="estoreicons">
                    <i class="${mereprojects.icon1}"></i>
                    <a target="_blank" href="${mereprojects.link}">
                        <i class="${mereprojects.icon2}"></i>
                    </a>
                </div>
            </div>
        </div>`;
    });
}
function showjavaProjects(){
    mineprojects.innerHTML = ""; // container clear karo

    // filter CSS projects
    let filtered = projects.filter(mereprojects => mereprojects.category === "java-scipt");

    // map over filtered projects
    filtered.map(mereprojects => {
        mineprojects.innerHTML += `
        <div class="firstproject">
            <div class="imgpro imgestore">
                <img src="${mereprojects.img}" alt="">
            </div>
            <div class="contentproject">
                <div class="estorehead">
                    <h4>${mereprojects.text}</h4>
                    <p>${mereprojects.paragraph}</p>
                </div>
                <div class="estoreicons">
                    <i class="${mereprojects.icon1}"></i>
                    <a target="_blank" href="${mereprojects.link}">
                        <i class="${mereprojects.icon2}"></i>
                    </a>
                </div>
            </div>
        </div>`;
    });
}







