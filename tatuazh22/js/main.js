

var iconMenu = document.getElementById("iconMenu");
var navigation = document.getElementById("navigation");

iconMenu.addEventListener("click", function(){
	if(navigation.className != "navigation-open" && iconMenu.className != "iconMenu-reverse"){
		navigation.className = "navigation-open"
		iconMenu.className = "iconMenu-reverse"
	}else{
		navigation.className = "navigation"
		iconMenu.className = "iconMenu"
	}
});

 var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 3000);

    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide showing';
};

