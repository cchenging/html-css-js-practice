time =1000;

function function1() {
    console.log({} + [] + " = {} + []"); // run this it is actually funny
}

function runner() {
    function1();
    setTimeout(function() {
        runner();
    }, time);
}

runner();
