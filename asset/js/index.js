let lastKnownScrollPosition = 0;
let ticking = false;
let header = document.getElementById("header_box");
let logo_title = document.getElementById("logo-title");
let logo_nav = document.getElementById("logo-nav");

function handleScroll() {
    scrollPos = window.scrollY;
    if (scrollPos > 0) {
        header.classList.remove("bg--transparent");
        logo_nav.classList.remove("fcolor--white");

        header.classList.add("bg--white");
        logo_title.style.visibility = "visible";
        logo_nav.classList.add("fcolor--primary");
    } else {
        header.classList.remove("bg--white");
        logo_nav.classList.remove("fcolor--primary");

        header.classList.add("bg--transparent");
        logo_title.style.visibility = "hidden";
        logo_nav.classList.add("fcolor--white");
    }
    // Do something with the scroll position
}

document.addEventListener("scroll", handleScroll);

