// Start Header
let navbarDropdown = document.querySelector('#navbarDropdown');
let list = document.querySelector('.dropdownlist');
let clickAction = true ;
navbarDropdown.onclick = function(){
    if(clickAction){
        list.classList.remove("invisible");
        clickAction = false;
    }else{
        list.classList.add("invisible");
        clickAction = true;
    };
};
let listsm = document.querySelector('.dropdownlist-sm');
let listInSmall = document.querySelector(".navbar-toggler-icon");
listInSmall.onclick =function(){
    if(clickAction){
        listsm.classList.remove("invisible");
        clickAction = false;
    }else{
        listsm.classList.add("invisible");
        clickAction = true;
    };
};
// End Header
// Start Team Achievements
let closebt = document.createElement("button");
closebt.innerHTML = "See less";
closebt.classList.add("close","rounded")
closebt.onclick = function(){
    el.forEach(element => {
        element.children[3].classList.add("invisible","position-absolute");
    });
    closebt.remove()
}
let wind = document.querySelector("#window");
let el = document.querySelectorAll("#teamachieve div");
let bt = document.querySelector("#window button");
console.log(wind)
let Boolean = false;
el.forEach(element => {
    element.onclick = function (){
        if(window.screen.width >= 400){
            if(Boolean){
                wind.lastChild.remove();
            }
            Boolean = true;    
            wind.classList.remove("invisible");
            let ele = element.cloneNode(true);
            let ele2 = element.children[3].cloneNode(true);
            ele2.classList.remove("invisible","position-absolute");
            wind.appendChild(ele);
            ele.appendChild(ele2);
            document.querySelector("#teamachieve").style.opacity="0.5";
            window.onscroll = function () { window.scrollTo(0, 775); };
            window.scrollTo({
                top: 775,
                behavior: "instant",
            });
        }else{
            el.forEach(element => {
                element.children[3].classList.add("invisible","position-absolute");
            });
            element.children[3].classList.remove("invisible","position-absolute");
            element.after(closebt);
        };
    }; 
});
bt.onclick = function(){
    wind.classList.add("invisible");
    document.querySelector("#teamachieve").style.opacity="1";
    window.onscroll = function () {};
};
// End Team Achievements
