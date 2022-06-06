let search = document.querySelector(".search");
let searchArea = document.querySelector(".search_area");
let icons = document.querySelectorAll('.fill');

search.addEventListener("click", function () {
    changeBg(searchArea, '#fff')
    changeCl(search, '#000')
    icons.forEach(el => {
        changeBg(el, '#00000080')
    })
});

function changeBg(element, color){
    return element.style.background = color
}

function changeCl(element, color){
    return element.style.color = color
}