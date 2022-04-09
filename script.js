const panels = document.querySelectorAll('.pannels');

panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeAllActives();
		panel.classList.add('active');
	});
});

function removeAllActives(){
	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
}
