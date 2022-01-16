// hello 클래스
// const title = document.querySelectorAll(".hello h1");

// console.log(title);

// hello id
//const title = document.querySelector("#hello");
//const title = documnet.querySelector("hello");

//
// title[0].style.color ="blue";
// title[1].style.color="red";


// EventListener
const title = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const currentColor = title.style.color;
//     let newColor;
//     if(currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     title.style.color = newColor;
// }

// function handleMouseEnter() {
//     console.log("mouse is here !");
//     title.innerText = "mouse is here!";
// }

// function handleMouseLeave() {
//     console.log("mouse is leave !");
//     title.innerText = "mouse is gone!";
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("copier!");
// }

// function handleWindowOffline() {
//     alert("offline!");
// }

// function handleWindowOnline() {
//     alert("online!");
// }

// css 적용
// function handleTitleClick() {
//     const activeClass = "active";
//     if(title.className === activeClass) {
//         title.className = "";
//     } else {
//         title.className = activeClass;
//     }
// }

function handleTitleClick() { 
    // const clickedClass = "clicked";
    // if(title.classList.contains(clickedClass)) {
    //     title.classList.remove(clickedClass);
    // } else {
    //     title.classList.add(clickedClass);
    // }
    // toggle 사용 : 있으면 삭제, 없으면 추가 !
    title.classList.toggle("clicked");
}

title.addEventListener("click", handleTitleClick);
//title.addEventListener("mouseenter", handleMouseEnter);
//title.addEventListener("mouseleave", handleMouseLeave);
// title.onclick = handleTitleClick;
// title.onmouseenter = handleMouseEnter;
// title.onmouseleave = handleMouseLeave;

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);