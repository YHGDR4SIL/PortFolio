var load_screen = document.getElementById("load_screen");
var arrow = document.getElementById("arrow_down");


// fonction qui change la visibiltité du texte avec l'id cf_num
function changepvisibility(num, vis){
    let cf = "cf_"
    let id = cf.concat('', num);
    // console.log(id);
    document.getElementById(id).style.transitionDuration = "300ms";
    document.getElementById(id).style.transitionProperty = "visibility";
    document.getElementById(id).style.transition
    document.getElementById(id).style.visibility = vis;
};

//attendre que tout charge + anim stylé
setTimeout(() => {
    load_screen.style.visibility = 'hidden';
}, 3000);

//animation fleche qui descend
var arrowToDown = anime({
    targets: '#arrow_down',
    translateY: 50,
    duration: 1000,
    autoplay: false
});
//anime inverse
var arrowToUp = anime({
    targets: '#arrow_down',
    translateY: -25,
    duration: 1000,
    autoplay: false
});
//jouer animation fleche qui monte et redescent
arrow.addEventListener('mouseenter', () => {
    arrowToDown.play();
    setTimeout(() => {
        arrowToUp.play();
    },2000);
});
//click = descendre de la page
arrow.addEventListener('click', event => {
    $(".main").moveDown();
})

// script de onepage scroll
$(".main").onepage_scroll({
    pagination: false,
    loop: false
});
