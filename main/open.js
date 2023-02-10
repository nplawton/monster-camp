//functionality Test
function test(){
    console.log('This has been a test of the emergency broadcast service.');
}

let sound = {
    door: new Howl({
        src: ['../Sounds/door.mp3'],
        autoplay: false,
        loop: false

    })
}

let adoor = $('.img-arena')

adoor.click(() => {
    sound.door.play()
});

let sdoor = $('.img-survey');

sdoor.click(() => {
    sound.door.play()
});