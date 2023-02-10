runGame();

let container = $('#creature');
let $h3 = $('#mon-name');
let creatImg = $('#newImg');
let monChallenge = $('#challenge');
let failMess = $('.fail');
let epicMess = $('.epic');

let monsters = [

    Ami = {
        monName: "A-mi-kuk",
        monImage: '../Image/amikuk.jpg',
        weakness: 'fire',
        strong: 'ice',
        challenge: '7'
    },

    Gorgon = {
        monName: "Gorgon",
        monImage:  '../Image/gorgon.jpg',
        weakness: 'lightning',
        strong: 'fire',
        challenge: '5'
    },

    AGD = {
        monName: "Adult Green Dragon",
        monImage: '../Image/adult-green.png',
        weakness: 'lightning',
        strong: 'wind',
        challenge: '15'
    },

    GC = {
        monName: "Gelatinous Cube",
        monImage: '../Image/gelatinous-cube.jpg',
        weakness: 'fire',
        strong: 'ice',
        challenge: '2'
    },

    Succubus = {
        monName: "Succubus",
        monImage: '../Image/succubus.png',
        weakness: 'wind',
        strong: 'lightning',
        challenge: '4'
    },

    Harpy = {
        monName: "Harpy",
        monImage: '../Image/harpy.png',
        weakness: 'lightning',
        strong: 'wind',
        challenge: '1'
    },

    GVB = {
        monName: "Giant Vampire Bat",
        monImage: '../Image/giant-bat.jpg',
        weakness: 'fire',
        strong: 'wind',
        challenge: '2'
    },

    RW = {
        monName: "Ratfolk Warlock",
        monImage: '../Image/ratfolk-warlock.jpg',
        weakness: 'ice',
        strong: 'wind',
        challenge: '1'
    },

   GWS = {
        monName: "Giant Water Scorpion",
        monImage: '../Image/water-scorpion.jpg',
        weakness: 'lightning',
        strong: 'ice',
        challenge: '4'
    },

    Alabaster = {
        monName: "Alabaster Tree",
        monImage: '../Image/tree_monster.jpg',
        weakness: 'ice',
        strong: 'lightning',
        challenge: '7'
    }

]

let monToFight;

let $fire = $('#fire');
let $lightning = $('#lightning');
let $wind = $('#wind');
let $ice = $('#ice');

function guessingGame(){

    monToFight = monsters[Math.floor(Math.random()*monsters.length)];
    
    console.log(monToFight);

    $h3.text(monToFight.monName.toUpperCase());
    //Place Image Here
    let newImag = monToFight.monImage.toString();
    creatImg.attr('src', newImag);
    console.log(creatImg);
    monChallenge.text(`Challenge Level = ${monToFight.challenge}`);
    //console.log($h3);

}

//Sound Manager for battling
var sound = {
    fire: new Howl({
        src: ['../Sounds/Fireball.mp3'],
        autoplay: false,
        loop: false

    }),

    ice: new Howl({
        src: ['../Sounds/ice-magic.ogg'],
        autoplay: false,
        loop: false

    }),

    light: new Howl({
        src: ['../Sounds/thunder.mp3'],
        autoplay: false,
        loop: false

    }),

    wind: new Howl({
        src: ['../Sounds/wind-cut.mp3'],
        autoplay: false,
        loop: false

    }),

    fail: new Howl({
        src: ['../Sounds/fail-laugh.mp3'],
        autoplay: false,
        loop: false

    }),

    epicFail: new Howl({
        src: ['../Sounds/bone-crack.mp3'],
        autoplay: false,
        loop: false

    })
    

};

/*Fight Monster Structure through IF statments
    //base if loop
    if (monToFight.weakness){
        console.log("Win");
    }else if(monToFight.strong){
        console.log('Epic Fail');
    }else{
        console.log("Fail");
    }
*/
//Btns for battle
$fire.click(() => {
    //console.log("hi")
    if (monToFight.weakness === 'fire'){
        console.log("Win");
        sound.fire.play();
        setTimeout(() => {
            guessingGame();
        }, 5000);
    }else if(monToFight.strong === 'fire'){
        console.log('Epic Fail');
        epicMessage();
    }else{
        console.log("Fail");
        failMessage();
    }
});

$wind.click(() => {
    //console.log("hi")
    if (monToFight.weakness === 'wind'){
        console.log("Win");
        sound.wind.play();
        setTimeout(() => {
            guessingGame();
        }, 5000);
    }else if(monToFight.strong === 'wind'){
        console.log('Epic Fail');
        epicMessage();
    }else{
        console.log("Fail");
        failMessage();
    }
});

$ice.click(() => {
    //console.log("hi")
    if (monToFight.weakness === 'ice'){
        console.log("Win");
        sound.ice.play();
        setTimeout(() => {
            guessingGame();
        }, 5000);
    }else if(monToFight.strong === 'ice'){
        console.log('Epic Fail');
        epicMessage();
    }else{
        console.log("Fail");
        failMessage();
    }
});

$lightning.click(() => {
    //console.log("hi")
    if (monToFight.weakness === 'lightning'){
        console.log("Win");
        sound.light.play();
        setTimeout(() => {
            guessingGame();
        }, 5000);
    }else if(monToFight.strong === 'lightning'){
        console.log('Epic Fail');
        epicMessage();
    }else{
        console.log("Fail");
        failMessage();
    }
});

function runGame(){
    let nextMon = $('#restart');
    //let creatImg = 


    nextMon.click(() => {
        guessingGame();
        //creatImg.addClass('active');
    });
}

// function nextRound(){
//     guessingGame();
// }

//Function Messages for other options
function failMessage(){
    failMess.addClass('active');
    sound.fail.play();
    setTimeout(() => {
        failMess.removeClass('active');
    }, 3000);
}

function epicMessage(){
    epicMess.addClass('active');
    sound.epicFail.play();
    setTimeout(() => {
        epicMess.removeClass('active');
        guessingGame();
    }, 3000);
}

