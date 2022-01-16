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

function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color ="blue";
}

title.addEventListener("click", handleTitleClick);