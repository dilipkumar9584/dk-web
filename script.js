function show() {
    var x = document.getElementsByClassName('member-lists')[0];
    var y = document.getElementsByClassName('games-list')[0];
    var down1 = document.getElementsByClassName('ri-arrow-down-s-fill')[0];
    var up1 = document.getElementsByClassName('ri-arrow-up-s-fill')[0];


    if (x.style.display === "none") {
        x.style.display = 'flex';
        down1.style.display = 'none';
        up1.style.display = 'inline';
        if (y.style.display === 'flex') {
            y.style.display = 'none'
        }
    }
    else {
        x.style.display = 'none'
        down1.style.display = 'inline';
        up1.style.display = 'none';
    }
}
function shown() {
    var x = document.getElementsByClassName('games-list')[0];
    var y = document.getElementsByClassName('member-lists')[0];
    var down1 = document.getElementsByClassName('ri-arrow-down-s-fill')[1];
    var up1 = document.getElementsByClassName('ri-arrow-up-s-fill')[1];


    if (x.style.display === "none") {
        x.style.display = 'flex';
        down1.style.display = 'none';
        up1.style.display = 'inline';
        if (y.style.display === 'flex') {
            y.style.display = 'none'
        }
    }
    else {
        x.style.display = 'none'
        down1.style.display = 'inline';
        up1.style.display = 'none';
    }
}

var typed = new Typed('#element', {
    strings: ['Web Designer', 'Front End Web Developer', 'Web Developer'],
    typeSpeed: 50,
});

function showmenu() {
    var disply = document.getElementsByClassName('header-link')[0];
    if (disply.style.display === "none") {
        disply.style.display = 'flex';
        document.getElementsByClassName('left')[0].style.display = 'none'
    }
    else {
        document.getElementsByClassName('left')[0].style.display = 'flex'
        disply.style.display = 'none'
    }
}

var manx = document.getElementsByClassName('body')[0];
manx.addEventListener('click', () => {
    var xm = document.getElementsByClassName('member-lists')[0];
    var xm2 = document.getElementsByClassName('games-list')[0];
    if (xm.style.display === 'flex' || xm2.style.display === 'flex') {
        xm.style.display = 'none';
        xm2.style.display = 'none';
    }
})

// guess Game


var randn = Math.ceil(Math.random() * 1000);
console.log(randn)
var sugg = document.getElementById('guess-suggestion');
var inc = 0;
function guess() {
    var valu = document.getElementById('guessinput').value;
    if (valu > randn) {
        sugg.innerText = "please enter small number:"
        
        document.getElementById('guessinput').value = "";
        inc++;
    }
    else if (valu == randn) {
        document.getElementById('guess-suggestion').style.color='rgb(101, 227, 17)';
        sugg.innerHTML = "you are guessed is right";
        document.getElementById('won').innerHTML="You are Won"


    }
    else if(valu==""){
        sugg.innerText = "please enter any number";
    }
    else {
        sugg.innerText = "please enter large number"
        document.getElementById('guessinput').value = "";
        inc++;

    }
    
    document.getElementById('attem').innerHTML = inc;

}





// multiply game 






