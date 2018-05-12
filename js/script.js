// store data of all people

var names, text, list, i;
pers1 = ["Gabriella Charming", "25 years", ["Justin Timberlake", " Ed Sheeran", " Emma Watson"]];
pers2 = ["Stephanie Cutie", "21 years", ["Michael Jackson", " Avicii", " Rita Ora"]];
pers3 = ["Michelle Lovely", "23 years", ["Jason Derulo", " David Guetta", " Felix Jaehn"]];
pers4 = ["Vanessa Delightful", "28 years", ["Axwell", " G-Eazy", " Daddy Yankee"]];
pers5 = ["Ashley Stunning", "35 years", ["Chris Brown", " Sia", " The Chainsmokers"]];
pers6 = ["Alex Graceful", "28 years", ["Maroon 5", " Sean Paul", " Imagine Dragons"]];
pers7 = ["Tom Elegant", "38 years", ["Eminem", " Kygo", " Marshmello"]];
pers8 = ["David Handsome", "33 years", ["The Weeknd", " Pitbull", " Fedde Le Grand"]];

// text for every person, like Name:, Age: etc

commonText = ["<br><b>name: </b>", "<b>age: </b>", "<b>fav. performers: </b>"];


// Person 1 to 8
// ------------
// ------------


// Woman 1

list = pers1.length;
text = "<ul>";
text += "<img src='img/woman1.jpg'";
text += "<p><b class='likeAmount' id='like1'>0</b></p><input value='&#10084; Like' type='button' class='btn' onclick='increase1();'>";
for (i = 0; i < list; i++) {
    text += commonText[i];
    text += "<li>" + pers1[i] + "</li>";
}
text += "</ul>";
document.getElementById("woman1").innerHTML = text;


// Woman 2

list = pers2.length;
text = "<ul>";
text += "<img src='img/woman2.jpg'";
text += "<p><b class='likeAmount' id='like2'>0</b></p><input value='&#10084; Like' type='button' class='btn' onclick='increase2();'>";
for (i = 0; i < list; i++) {
    text += commonText[i];
    text += "<li>" + pers2[i] + "</li>";
}
text += "</ul>";
document.getElementById("woman2").innerHTML = text;

// Woman 3

list = pers3.length;
text = "<ul>";
text += "<img src='img/woman3.jpg'";
text += "<p><b class='likeAmount' id='like3'>0</b></p><input value='&#10084; Like' type='button' class='btn' onclick='increase3();'>";
for (i = 0; i < list; i++) {
    text += commonText[i];
    text += "<li>" + pers3[i] + "</li>";
}
text += "</ul>";
document.getElementById("woman3").innerHTML = text;

// Woman 4

list = pers4.length;
text = "<ul>";
text += "<img src='img/woman4.jpg'";
text += "<p><b class='likeAmount' id='like4'>0</b></p><input value='&#10084; Like' type='button' class='btn' onclick='increase4();'>";
for (i = 0; i < list; i++) {
    text += commonText[i];
    text += "<li>" + pers4[i] + "</li>";
}
text += "</ul>";
document.getElementById("woman4").innerHTML = text;

// Man 1

list = pers5.length;
text = "<ul>";
text += "<img src='img/man1.jpg'";
text += "<p><b class='likeAmount' id='like5'>0</b></p><input value='&#10084; Like' type='button' class='btn' onclick='increase5();'>";
for (i = 0; i < list; i++) {
    text += commonText[i];
    text += "<li>" + pers5[i] + "</li>";
}
text += "</ul>";
document.getElementById("man1").innerHTML = text;

// Man 2

list = pers6.length;
text = "<ul>";
text += "<img src='img/man2.jpg'";
text += "<p><b class='likeAmount' id='like6'>0</b></p><input value='&#10084; Like' type='button' class='btn' onclick='increase6();'>";
for (i = 0; i < list; i++) {
    text += commonText[i];
    text += "<li>" + pers6[i] + "</li>";
}
text += "</ul>";
document.getElementById("man2").innerHTML = text;

// Man 3

list = pers7.length;
text = "<ul>";
text += "<img src='img/man3.jpg'";
text += "<p><b class='likeAmount' id='like7'>0</b></p><input value='&#10084; Like' type='button' class='btn' onclick='increase7();'>";
for (i = 0; i < list; i++) {
    text += commonText[i];
    text += "<li>" + pers7[i] + "</li>";
}
text += "</ul>";
document.getElementById("man3").innerHTML = text;

// Man 4

list = pers8.length;
text = "<ul>";
text += "<img src='img/man4.jpg'";
text += "<p><b class='likeAmount' id='like8'>0</b></p><input value='&#10084; Like' type='button' class='btn' onclick='increase8();'>";
for (i = 0; i < list; i++) {
    text += commonText[i];
    text += "<li>" + pers8[i] + "</li>";
}
text += "</ul>";
document.getElementById("man4").innerHTML = text;