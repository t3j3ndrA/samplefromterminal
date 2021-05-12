const heading = document.body.querySelector("h1");
console.log(heading);


function addClassRed(){
    heading.classList.add("red");
}

function removeClassRed(){
    heading.classList.remove("red");
}

function addClassBlue(){
    heading.classList.add("blue");
}

function removeClassBlue() {
    heading.classList.remove("blue");
}

// heading.addEventListener("mouseover",addClassRed);
// heading.addEventListener("mouseleave",removeClassRed);
heading.addEventListener("select",addClassBlue);