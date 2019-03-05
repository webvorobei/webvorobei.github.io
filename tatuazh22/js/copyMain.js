
//var carusel = document.getElementById('carusel');
//var btn = document.getElementById('btn');
//
//var left = 0;
//btn.onclick = function(){
//	left += -150;
//	if(left == -600){
//		left = 0;
//	}
//	carusel.style.marginLeft = left + "px";
////	console.log(left);
//}




var modal = document.querySelector('.modal > img');
var galery = document.querySelectorAll('.galery > .smallimg');
var massiv = [];
var atrmodal = modal.getAttribute('src');

for(var b in galery)
galery[b].onclick = function(){
	var atr = this.getAttribute('src');
	atrmodal.setAttribute('src', atr);
	console.log(atr);
	console.log(atrmodal);
	
//	if(this.className != 'bigimg' ){
//		this.className = 'bigimg';
//		if(!modal.hasAttribute(atr))
//			modal.setAttribute(atr)
//	}else{
//		this.classList.toggle('smallimg')
//	}
//	console.log('yes');
}