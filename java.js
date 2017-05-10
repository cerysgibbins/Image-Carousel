var numImages = 5;
var angleRotation = 360/numImages;
var currentRotation = 0;

function RotateCarousel(direction) {
	var rotateY = direction * angleRotation;
	currentRotation = currentRotation + angleRotation;
	document.getElementById("carousel").style.transform = "rotateY(" + currentRotation + "deg)"
}

function StartCarouselSlideshow() {
	document.getElementById("carousel").className = "rotateCarousel";
}

function StopCarouselSlideshow() {
	document.getElementById("carousel").className = "";
	document.getElementById("carousel").style.transform = "rotateY(90deg)";
	currentRotation = 90;
}



