song="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"

function preload()

{
    song=loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas ( 600 , 500 );
    canvas.center();

    video = createCapture ( VIDEO );
    video.hide();
}

function draw()
{
    image( video , 0 , 0 , 600 , 500 );
}

function play()
{
    song.play();
}

