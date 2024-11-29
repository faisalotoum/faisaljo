const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
    addAnimation();
}   

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

let cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.onmousemove = function(e){
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;

        card.style.setProperty("--x", x + 'px');
        card.style.setProperty("--y", y + 'px');
    }
})

cards.forEach((card, index) => {
    card.addEventListener('click', function() {
        location.href=`showcase.html?index=${index+1}`;
    });
})

window.addEventListener('scroll', reveal);
window.onload = reveal();

function reveal(){
    var reveals = document.querySelectorAll('.reveal, .otherreveal, .delayedreveal');

    for (var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } 
    }
}

const cursorDot = document.querySelector(".cursor-dot");

window.addEventListener("mousemove", function (e) {

    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorDot.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 1000, fill: "forwards"})

});

var index = new URLSearchParams(window.location.search).get('index')

    console.log(`images/${index}/1.png`);

    var image1 = document.getElementById("img1");
    var image2 = document.getElementById('img2');
    var image3 = document.getElementById('img3');
    var image4 = document.getElementById('img4');
    var image5 = document.getElementById('img5');
    var image6 = document.getElementById('img6');
    var image7 = document.getElementById('img7');
    var image8 = document.getElementById('img8');
    var image9 = document.getElementById('img9');
    var image10 = document.getElementById('img10');

    image1.src = `images/${index}/1.png`
    image2.src = `images/${index}/2.png`
    image3.src = `images/${index}/3.png`
    image4.src = `images/${index}/4.png`
    image5.src = `images/${index}/5.png`
    image6.src = `images/${index}/6.png`
    image7.src = `images/${index}/7.png`
    image8.src = `images/${index}/8.png`
    image9.src = `images/${index}/9.png`
    image10.src = `images/${index}/10.png`

function goHome() {
    location.href=`index.html`;
}