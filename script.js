// let header = document.getElementById('header');
// let h1 = document.getElementsByTagName('h1');
// let intro = document.getElementsByClassName('intro');
// let firstItem = document.getElementsByClassName('list')[0].firstElementChild;
// let secondItem = document.getElementsByClassName('list')[0].children[1];
// let lastItem = document.getElementsByClassName('list')[0].lastElementChild;
//
// TweenLite.to(lastItem, 1, { opacity: 0, y: 50 });





// let img = document.getElementById('img');
// let h2 = document.getElementsByTagName('h2');
// console.log(h2);

// TweenLite.to(img, 1, { width: 100 });
// TweenLite.to(img, 1, { x: 200 });
// TweenLite.from(img, 1, { x: -200 });
// TweenLite.fromTo(img, 1, { x: -200 }, { x: 200 });
// TweenLite.set(img, { x: -200 });
// TweenLite.from(img, 1, { x: -200, ease: SteppedEase.config(20) });
// TweenLite.from(h2, 1, { autoAlpha: 0, delay: 1 });

// let i = 0;
//
// TweenLite.from(img, 1, {
//     x: -200,
//     ease: Power1.easeInOut,
//     onStart: onStart,
//     onUpdate: onUpdate,
//     onComplete: onComplete
// });
//
// function onStart() {
//     console.log("onStart");
// }
//
// function onUpdate() {
//     console.log("onUpdate");
//
//     h2[0].innerHTML = "" + i++;
// }
//
// function onComplete() {
//     console.log("onComplete");
// }




let img = document.getElementById('img');
let h2 = document.querySelector('h2');
let h1 = document.getElementsByTagName('h1');
let intro = document.getElementsByClassName('intro');
let listItem = document.querySelectorAll('ul li');
console.log(listItem);

let tl = new TimelineLite({paused: true});


let dot = document.getElementsByClassName('dot');
console.log(dot);
let loader = document.getElementById('loader');
console.log(loader);


// tlLoader = new TimelineLite();
tlLoader = new TimelineMax({repeat: 2, onComplete: loadContent});



// tl
// .from(h1, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.2 })
// .from(intro, 0.3, { y:-15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.4 })
// .from(img, 0.3, { y:-15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.6 })
// .from(h2, 0.3, { y:-15, autoAlpha: 0, ease: Power1.easeOut, delay: 0.8 })
// .from(listItem, 0.3, { y:-15, autoAlpha: 0, ease: Power1.easeOut, delay: 1 });






// tl
// .from(h1, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
// .from(intro, 0.3, { y:-15, autoAlpha: 0, ease: Power1.easeOut }, '-=0.15')
// .from(img, 0.3, { y:-15, autoAlpha: 0, ease: Power1.easeOut }, '-=0.15')
// .from(h2, 0.3, { y:-15, autoAlpha: 0, ease: Power1.easeOut }, '-=0.15')
// .from(listItem, 0.3, { y:-15, autoAlpha: 0, ease: Power1.easeOut }, '-=0.15');



// tl
// .from(h1, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
// .from(intro, 0.3, { y:-15, autoAlpha: 0, ease: Power1.easeOut }, '+=1')
// .from(img, 0.3, { y:-15, autoAlpha: 0, ease: Power1.easeOut }, 3)
// .from(h2, 0.3, { y:-15, autoAlpha: 0, ease: Power1.easeOut }, 2)
// .from(listItem, 0.3, { y:-15, autoAlpha: 0, ease: Power1.easeOut }, 2.5);

// let buttons = document.querySelectorAll('button');
// let buttons = document.getElementsByClassName('button');
let buttons = document.getElementsByTagName('button');
console.log(buttons);



// Staggering Animations
tl
.from(h1, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
.from(intro, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, '-=0.15')
.from(img, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, '-=0.15')
.from(h2, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, '-=0.15')
.from(listItem, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut }, '-=0.15')
.staggerFrom(buttons, 0.2, { x: 200, ease: Power1.easeOut }, 0.1);

// tl.pause();


// Loader Timeline



tlLoader
    .staggerFromTo(dot, 0.3,
        { y: 0, autoAlpha: 0 },
        { y: 20, autoAlpha: 1, ease: Back.easeInOut },
        0.05
    )
    .fromTo(loader, 0.3,
        { autoAlpha: 1, scale: 1.3 },
        { autoAlpha: 0, scale: 1, ease: Power0.easeNone },
        0.9
    );





function loadContent() {
    let tlLoaderOut = new TimelineLite({ onComplete: contentIn });
    tlLoaderOut
        .set(dot, { backgroundColor: 'black' })
        .to(loader, 0.3, { autoAlpha: 1, scale: 1.3, ease: Power0.easeNone })
        .staggerFromTo(dot, 0.3,
            { y: 0, autoAlpha: 0 },
            { y: 20, autoAlpha: 1, ease: Back.easeInOut },
            0.05, 0
        )
        .to(loader, 0.3, { y: -150, autoAlpha: 0, ease: Back.easeIn }, '+=0.3');
}


function contentIn() {
    tl.play();
}












let btnPlay = document.getElementById('btnPlay');
let btnPause = document.getElementById('btnPause');
let btnResume = document.getElementById('btnResume');
let btnReserve = document.getElementById('btnReserve');
let btnSpeedUp = document.getElementById('btnSpeedUp');
let btnSlowDown = document.getElementById('btnSlowDown');
let btnSeek = document.getElementById('btnSeek');
let btnProgress = document.getElementById('btnProgress');
let btnRestart = document.getElementById('btnRestart');


btnPlay.addEventListener('click', function() {
tl.play();
}, false);

btnPause.addEventListener('click', function() {
tl.pause();
}, false);

btnResume.addEventListener('click', function() {
tl.resume();
}, false);

btnReserve.addEventListener('click', function() {
tl.reverse();
}, false);

btnSpeedUp.addEventListener('click', function() {
tl.timeScale(2);
}, false);

btnSlowDown.addEventListener('click', function() {
tl.timeScale(0.5);
}, false);

btnSeek.addEventListener('click', function() {
tl.seek(1);
}, false);

btnProgress.addEventListener('click', function() {
tl.progress(0.5);
}, false);

btnRestart.addEventListener('click', function() {
tl.restart();
}, false);




























//
