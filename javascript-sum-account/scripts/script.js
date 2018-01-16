var list = document.querySelector('ul');
var totalBox = document.querySelector('p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
var products = ['Underpants:6.99', 'Socks:5.99', 'T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99'];

function Activate()
{
  document.querySelector('html').style.backgroundColor = 'red';

  for (var i = 0; i < products.length; i++)
  {
    // number 2
    // number 3

    // number 4

    // number 5
    var cur = new String(products[i]);
    var index = cur.indexOf(":");
    var name = cur.slice(0, index);
    var cost = Number(cur.slice(index+1, cur.length));
    var itemText = String(name) +' -  '+ String(cost);
    //alert(name + " : " + cost);
    total += cost;
    var listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
  }

  totalBox.textContent = 'Total: $' + total.toFixed(2);
}
window.onload = Activate();
