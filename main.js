let menu = document.querySelector("#menu-icon");
let Navbar = document.querySelector(".Navbar");

menu.oneclick = () => {
    menu.classList.toggle("bx-x");
    Navbar.classList.toggle("active");
}
Window.onscroll = () => {
    menu.classList.remove("bx-x");
    Navbar.classList.remove("active");
}