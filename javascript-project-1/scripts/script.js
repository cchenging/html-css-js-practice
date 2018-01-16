var list = document.querySelector('ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
function Christmas()
{
  alert(list.tagName);

  for(var i = 0; i < cities.length; i++)
  {
    var input = cities[i];
    var listItem=document.createElement('li');
    input = input.toLowerCase();
    var output = input.slice(0, 1).toUpperCase()+input.slice(1, input.length);
    listItem.textContent=output;
    list.appendChild(listItem);
    // write your code just below here
  }
}

window.onload = Christmas();
