let popup = document.querySelector(".nav-links");
let open = document.getElementById("btn");

open.onclick = () => {
    popup.classList.toggle('open');
}

window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var nav = document.getElementById('nav-change');

    if (window.scrollY >= header.offsetHeight) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});