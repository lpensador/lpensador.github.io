var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/lpensador.jpg') {
      myImage.setAttribute ('src','images/joanmaragall.jpg');
	} else {
	  myImage.setAttribute ('src','images/lpensador.jpg');
	}
}

var myButton = document.querySelector('button');
var myTitle = document.querySelector('h1');

function selectionname() {
	var myName = prompt('per favor introdueix el seu nom.');
	localStorage.setItem('nombre', myName);
	myTitle.innerHTML = "Pensar és necessari, " + myName;
	
}

if(!localStorage.getItem('name')) {
	selectionname();
	
}
else{
	var storedName = localStorage.getItem('name');
	myTitle,innerHTML = 'Pensar és necessari, ' + storedName;
}

myButton.onclick = function() {
	selectionname();
}