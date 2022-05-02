var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-img.jpg') {
        myImage.setAttribute ('src','images/test-img-2.jpg');
    } else {
        myImage.setAttribute ('src','images/test-img.jpg');
    }
}

var myButton =  document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Учи английский, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Учи английский, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}