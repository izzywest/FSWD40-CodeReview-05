// Like buttons increase
// -----------
// -----------

// Button 1
var i = 0;

function increase1() {
    i++;
    document.getElementById('like1').innerHTML = +i;
}

// Button 2
var j = 0;

function increase2() {
    j++;
    document.getElementById('like2').innerHTML = +j;
}

// Button 3
var k = 0;

function increase3() {
    k++;
    document.getElementById('like3').innerHTML = +k;
}

// Button 4
var l = 0;

function increase4() {
    l++;
    document.getElementById('like4').innerHTML = +l;
}

// Button 5
var m = 0;

function increase5() {
    m++;
    document.getElementById('like5').innerHTML = +m;
}

// Button 6
var n = 0;

function increase6() {
    n++;
    document.getElementById('like6').innerHTML = +n;
}

// Button 7
var p = 0;

function increase7() {
    p++;
    document.getElementById('like7').innerHTML = +p;
}

// Button 8
var q = 0;

function increase8() {
    q++;
    document.getElementById('like8').innerHTML = +q;
}






// sort like number first try

var likes = [i, j, k, l, m, n, p, q];
document.getElementById("demo").innerHTML = likes;

function myFunction() {
    likes.sort(function(a, b) { return a - b });
    document.getElementById("demo").innerHTML = likes;
}




// sort like number second try

function testFunction() {

    var x = document.getElementById("myNumber");
    var currentVal = x.value;

    document.getElementById("testFnc").innerHTML = "The new, current value is: " + currentVal;
}