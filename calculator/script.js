
var entry = new Array(2);
entry[0] = "";
entry[1] = "";
var curPos = 0;
var cacheOp = "";
var functionalButtons = document.getElementsByClassName("function");
var button = new Array(11);
var displayBar = document.getElementsByClassName("displayBar")[0];

function multiply()
{
    cur = Number(entry[curPos]);
    prev = Number(entry[(curPos+1)%2]);
    var ret = cur*prev;
    return ret;
}

function divide()
{
    cur = Number(entry[curPos]);
    prev = Number(entry[(curPos+1)%2]);
    var ret = prev/cur;
    return ret;
}

function add()
{
    cur = Number(entry[curPos]);
    prev = Number(entry[(curPos+1)%2]);
    var ret = prev + cur;
    return ret;
}

function subtract()
{
    cur = Number(entry[curPos]);
    prev = Number(entry[(curPos+1)%2]);
    var ret = prev - cur;
    return ret;
}

function modulo()
{
    cur = Number(entry[curPos]);
    prev = Number(entry[(curPos+1)%2]);
    var ret = prev%cur;
    return ret;
}

function updateDisplay()
{
    if(entry[curPos] != "")
        displayBar.setAttribute('value', entry[curPos]);
    else
        displayBar.setAttribute('value', "0");
}

function operateFunction(e)
{
    console.log(e.target);
    console.log("Cache op: "+cacheOp + " entries: ("+entry[0]+", "+entry[1]+")");

    if(curPos == 1)
    {
        switch(cacheOp)
        {
            case '*':
                entry[0]=multiply();
                entry[1]="";
                break;
            case '/':
                entry[0]=divide();
                entry[1]+"";
                break;
            case '+':
                entry[0]=add();
                entry[1]="";
                break;
            case '-':
                entry[0]=subtract();
                entry[1]="";
                break;
            case '%':
                entry[0]=modulo();
                entry[1]="";
                break;
            default:
                entry[0] = entry[1];
                entry[1]="";
                console.log('This shouldn\'t happen!');
        }
    }

    curPos = 1;
    cacheOp = e.target.getAttribute('value');

    if(e.target.getAttribute('value') == '=')
    {
        if(curPos == 0)
            return;
        curPos = 0;
        entry[1] = "";
        cacheOp="";
    }
    updateDisplay();
}

function clearFunction()
{
    console.log("Clearing Everything")
    entry[0] = "";
    entry[1] = "";
    curPos = 0;
    cacheOp = "";
    updateDisplay();
}

function update()
{
    console.log(displayBar.textContent);
    entry[curPos] = displayBar.getAttribute('value');
    console.log("Updating value to : " + displayBar.getAttribute('value'));
}

for(var i = 0; i < 10; i++)
{
    button[i] = document.getElementsByClassName("number "+i)[0];
    //console.log("number "+i);
    button[i].addEventListener('click', function(e)
    {
        entry[curPos] += e.target.getAttribute('value').toString();
        console.log('Adding ' + e.target.getAttribute('value'));
        updateDisplay();
    });
}


for(var i = 0; i < functionalButtons.length; i++)
{
    functionalButtons[i].addEventListener('click', operateFunction);
}

var clrbutton = document.getElementsByClassName('clear');

clrbutton[0].addEventListener('click', clearFunction);

//displayBar.addEventListener('keyup', update);