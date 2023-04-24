const navbar = document.querySelector("nav");
document.addEventListener("scroll",function(){
    if (window.scrollY >=2) {
        navbar.setAttribute("class", "mo1");
        navbar.style.transition = "0.3s all";

    }else {
        navbar.classList.remove("mo1");
        navbar.classList.add("mo");
        navbar.style.transition = "0.3s all";
    }
})
const dropDown = document.querySelector(".Dropdown");
const muneDrop = document.querySelector(".btn");

muneDrop.addEventListener("click", () => { 
    dropDown.style.display = "flex"
}
)
muneDrop.addEventListener("blur", () => { 
    dropDown.style.display = "none"
}
)




// const about_ = document.querySelector("#About");
// const pro = document.querySelector("#project");

// pro.addEventListener("click", () => {
//    window.scrollY({
//     top:0,
//     behavior:"smooth",
//    });

// }



// )












// const navbarOne = document.querySelector("ul");
// document.addEventListener("scroll",function(){
//     if (window.scrollY >=2) {
//         navbarOne.setAttribute("class", "navbar1");
//         navbarOne.style.transition = "0.3s all";

//     }else {
//         navbarOne.classList.remove("navbar1");
//         navbarOne.setAttribute("class", "navbar2");
//         navbar.style.transition = "0.3s all";
//     }
// })
// const clickNav = document.querySelector("#About");

// document.addEventListener("click",function(){
//     if () {
//         clickNav.setAttribute("class","aboutclick" );

//     }
// })
