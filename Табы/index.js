init();

let tab = document.querySelectorAll('.tab');
tab.forEach(function (element) {
    element.onclick = showTabs;
});

function init() {
    let tabBody = document.querySelectorAll('.tab-body');
    for (let i = 1; i < tabBody.length; i++) {
        tabBody[i].style.display = "none";
    }
}


function showTabs() {
    let data = this.getAttribute('data');
    let tabBody = document.querySelectorAll('.tab-body');
    for (let i = 0; i < tabBody.length; i++) {
        tabBody[i].style.display = "none";
    }
    document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
}