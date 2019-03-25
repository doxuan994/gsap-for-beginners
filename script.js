// let header = document.getElementById('header');
// let h1 = document.getElementsByTagName('h1');
// let intro = document.getElementsByClassName('intro');
// let firstItem = document.getElementsByClassName('list')[0].firstElementChild;
// let secondItem = document.getElementsByClassName('list')[0].children[1];
// let lastItem = document.getElementsByClassName('list')[0].lastElementChild;
//
// TweenLite.to(lastItem, 1, { opacity: 0, y: 50 });


let img = document.getElementById('img');
let h2 = document.getElementsByTagName('h2');
console.log(h2);

// TweenLite.to(img, 1, { width: 100 });
// TweenLite.to(img, 1, { x: 200 });
// TweenLite.from(img, 1, { x: -200 });
// TweenLite.fromTo(img, 1, { x: -200 }, { x: 200 });
// TweenLite.set(img, { x: -200 });
// TweenLite.from(img, 1, { x: -200, ease: SteppedEase.config(20) });
// TweenLite.from(h2, 1, { autoAlpha: 0, delay: 1 });

let i = 0;

TweenLite.from(img, 1, {
    x: -200,
    ease: Power1.easeInOut,
    onStart: onStart,
    onUpdate: onUpdate,
    onComplete: onComplete
});

function onStart() {
    console.log("onStart");
}

function onUpdate() {
    console.log("onUpdate");

    h2[0].innerHTML = "" + i++;
}

function onComplete() {
    console.log("onComplete");
}



















































//
