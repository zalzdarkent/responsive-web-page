var zalz = document.querySelector(".kelas");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

zalz.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});