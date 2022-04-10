const panels = document.querySelectorAll('.pannels'); // select all panels and keep them in varriable

// add event listener for each of pannels
panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeAllActives();
		panel.classList.add('active');
	});
});
// one f to remove all active pannels
function removeAllActives(){
	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
}
// slideshow f and setinterval
let cunter = 1;
function slideShow(){
	removeAllActives();

	if (cunter < panels.length) {
		panels[cunter].classList.add('active');
		cunter++;
	}
	if (cunter == panels.length) {
		cunter = 0;
	}
}
const butt = document.querySelector('button');
butt.addEventListener('click', startSlideShow);
let switchh;
function startSlideShow(){
	if (butt.value == 'ON') {
		slideShow();
		switchh = setInterval(slideShow, 3200);
		butt.innerText = 'Stop The Slideshow';
		butt.value = 'OFF';
	} else {
		clearInterval(switchh);
		butt.innerText = 'Start The Slideshow Again';
		butt.value = 'ON';
	}
}
