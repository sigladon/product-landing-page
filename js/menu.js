const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#nav-bar");
const menuItems = document.querySelectorAll(".nav-item");
const showMenu = "header-nav__show"

menuBtn.addEventListener('click', function() {
    if (menu.classList.contains(showMenu)) {
        menu.classList.remove(showMenu);
    } else {
        menu.classList.toggle(showMenu);
    }
});

for (let marca = 0; marca < menuItems.length; marca++) {
    const element = menuItems[marca];
    element.addEventListener('click', function() {
        menu.classList.toggle(showMenu);
    })
}
