// Make lis in nav bar by sections number and name dynamically 
let navUl = document.querySelector("nav ul");
let mobileUl = document.querySelector("#mobileNav ul");
let sections = document.querySelectorAll("section")


//apppend for pc screen
for(let i = 0; i < sections.length; i++) {
    let ele = document.createElement("li");
    let link = document.createElement("a");
    link.innerHTML = sections[i].id;
    ele.appendChild(link);
    navUl.appendChild(ele);
};

//apppend for mobile screen
for(let i = 0; i < sections.length; i++) {
    let ele = document.createElement("li");
    let link = document.createElement("a");
    link.innerHTML = sections[i].id;
    ele.appendChild(link);
    mobileUl.appendChild(ele)
};




// append icons for mobile nav
let navEle = document.querySelector("nav");
let navIconEle = document.createElement("i")
let menuEle = document.createElement("i")

// navigation icon
navIconEle.classList = "fa-solid fa-location-crosshairs"
navIconEle.id = "navIcon"
navEle.appendChild(navIconEle)


// menu icon
menuEle.classList = "fa-solid fa-bars"
menuEle.id = "menu"
navEle.appendChild(menuEle)



// Main variables declaration
let menu = document.querySelector("#menu");
let mobileNav = document.querySelector("#mobileNav");
let mark = document.querySelector("#mark");
let navIcon = document.querySelector("#navIcon");


// Hide and Display Mobile Menu
menu.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
})

// Hide and Display Mobile Mark
navIcon.addEventListener("click", function() {
    mark.classList.toggle("active");
})




// scroll To
let lis = document.querySelectorAll("li");

for(let i = 0; i < sections.length; i++) {
}


lis.forEach(li => {
    li.addEventListener("click", getSection)
})

function getSection(li) {
    let secPosition = document.querySelector(`.${this.innerText}`).offsetTop;
    scrollTo({
        top: secPosition,
        left: 0,
        behavior: "smooth"
    })
}



//Set Active function

function secActive() {
    for (let i = 0; i < sections.length; i++) {
        let sec = sections[i];
        if (scrollY >= sec.offsetTop && scrollY < (sec.offsetTop + sec.offsetHeight)) {
            sec.classList.add("active")
            lis[i].classList.add("active")
            mark.innerHTML = sec.id
        } else {
            sec.classList.remove("active")
            lis[i].classList.remove("active")
        }
    }
}
secActive()

document.addEventListener("scroll", secActive)