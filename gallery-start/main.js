var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for(var i = 1; i <6; i++)
{
    var xxx = 'images/pic'+i+'.jpg';
    var newImage = document.createElement('img');
    newImage.setAttribute('src', xxx);
    newImage.addEventListener('click', set_active);
    thumbBar.appendChild(newImage);
}

function set_active(e)
{
    var cur_url = e.target.getAttribute('src');
    displayedImage.src = cur_url;
    console.oig
    console.log(displayedImage.src);
}
/* Wiring up the Darken/Lighten button */

function flip_switch(e)
{
    //console.log('Target was : ', e.target);
    var cur_st = e.target.getAttribute('class');
    console.log(cur_st);
    if(cur_st == 'light')
    {
        e.target.setAttribute('class', 'dark');
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        e.target.textContent = 'Darken';
    }
    else if(cur_st == 'dark')
    {
        e.target.setAttribute('class', 'light');
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        e.target.textContent = 'Lighten';
    }
    console.log('Target is : ', e.target);
    console.log(cur_st);
}
btn.addEventListener('click', flip_switch);
