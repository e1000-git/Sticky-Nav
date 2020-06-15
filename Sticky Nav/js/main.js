function nav() {
    if (window.scrollY >= 301) {
        document.querySelector(".lost").style.maxWidth = "500px";
        document.querySelector(".second").style.position = "fixed";
        document.querySelector(".kagiz").style.paddingTop = "12%";
    } else {
        document.querySelector(".lost").style.maxWidth = "0px";
        document.querySelector(".second").style.position = "unset";
        document.querySelector(".kagiz").style.paddingTop = "7%";

    }
}