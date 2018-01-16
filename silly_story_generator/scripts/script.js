var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


function randomValueFromArray(array)
{
  return array[Math.floor(Math.random()*array.length)];
}

function result()
{
  var newStory = storyText;

  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  while(newStory.indexOf(':insertx:') != -1)
  {
    //alert('Yaaay');
    newStory = newStory.replace(':insertx:', xItem);
  }

  while(newStory.indexOf(':inserty:') != -1)
  {
    //alert('Yaaay');
    newStory = newStory.replace(':inserty:', yItem);
  }
  while(newStory.indexOf(':insertz:') != -1)
  {
    //alert(zitem+String(newStory.indexOf(':insertz:')));
    newStory = newStory.replace(':insertz:', zItem);
  }
  if(customName.value != '')
  {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked)
  {
    var weight = Math.round(300*0.0714286);
    var temperature =  Math.round((94-32)*5/9);
    newStory = newStory.replace('300 pounds', String(weight) + ' stones');
    newStory = newStory.replace('94 farenheit', String(temperature)+' celsius');
  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
  //alert(newStory);

}

randomize.addEventListener('click', result);
