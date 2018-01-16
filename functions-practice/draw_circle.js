var btn_random = document.querySelector('button');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var background_active = 0;

var WIDTH = document.documentElement.clientWidth;
var HEIGHT = document.documentElement.clientHeight;
var time = 2000;

canvas.width = WIDTH;
canvas.height = HEIGHT;

var btn_random = document.querySelector('button.toggleRandomLights');
var btn_clean = document.querySelector('button.cleanRoom');

document.querySelector('html').style.backgroundColor = 'black';

function draw()
{
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (var i = 0; i < 100; i++)
  {
    ctx.beginPath();
    var red = random(255), blue = random(255), green = random(255);
    ctx.fillStyle = 'rgba('+red+','+blue+','+green+','+Math.random()+')';
    //ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}

function clean_canvas()
{
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function flip_background()
{
    console.log('flipping background');
    if(background_active == 1)
    {
        background_active = 0;
        btn_random.style.backgroundColor = 'cyan';
    }
    else
    {
        background_active = 1;
        btn_random.style.backgroundColor = 'orange';
    }
}

function random(number)
{
    return Math.floor(Math.random()*number);
}
btn_random.addEventListener('click', flip_background);
btn_clean.addEventListener('click', clean_canvas);

//repeat_background();

function function1()
{
    console.log(background_active); // run this it is actually funny
}

function runner()
{
    //btn.addEventListener('click', flip_background);
    function1();
    if(background_active == 1)
        draw();
    setTimeout(function(){
        runner();
    }, time);
}

runner();
