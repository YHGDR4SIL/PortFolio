var load_screen = document.getElementById("load_screen");
var arrow = document.getElementById("arrow_down");





setTimeout(() => {
    load_screen.style.visibility = 'hidden';
}, 3000);

var arrowToDown = anime({
    targets: '#arrow_down',
    translateY: 50,
    duration: 1000,
    autoplay: false
});

var arrowToUp = anime({
    targets: '#arrow_down',
    translateY: -25,
    duration: 1000,
    autoplay: false
});

arrow.addEventListener('mouseover', () => {
    arrowToDown.play();
    setTimeout(() => {
        arrowToUp.play();
    },2000);
});
arrow.addEventListener('click', event => {
    $(".main").moveDown();
})


$(".main").onepage_scroll({
    pagination: false,
    loop: false
});