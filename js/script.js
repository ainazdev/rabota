const acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
//
// const btn=document.querySelector(".just-btn button")
// btn.addEventListener("click",()  => {
//     document.querySelector(".just-modal").style.display = "block"
// })
// const close=document.querySelector(".just-modal-bg-square-close")
// close.addEventListener("click",()  =>{
//     document.querySelector(".just-modal").style.display = "none"
// })

const modal = document.getElementById('myModal');

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}