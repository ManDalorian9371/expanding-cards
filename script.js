const panels = document.querySelectorAll('.pannels'); // select all panels and keep them in varriable
let cunter = 1;
// add event listener for each of pannels
panels.forEach((panel, i) => {
	panel.addEventListener('click', () => {
		removeAllActives();
		panel.classList.add('active');
		cunter = i + 1;
	});
});
// one f to remove all active pannels
function removeAllActives(){
	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
}
// slideshow f and setinterval

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
		butt.innerText = 'Stop !';
		butt.value = 'OFF';
	} else {
		clearInterval(switchh);
		butt.innerText = 'Start Again !';
		butt.value = 'ON';
	}
}
