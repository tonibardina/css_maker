function moveEye(m, eye) {
	// Elements
	const [iris, retina] = eye.children

	// Sizes
	const [eyeWidth, eyeHeight] = [eye.offsetWidth, eye.offsetHeight];
	const [pageWidth, pageHeight] = [window.innerWidth, window.innerHeight];

	const eyePosition = document.querySelector('.eye').getBoundingClientRect()
	const [eyePositionX, eyePositionY] = [eyePosition.x, eyePosition.y]
	const [centerX, centerY] = [eyePositionX + eyeWidth/2, eyePositionY + eyeHeight / 2];
	
	const [widthFromEyeAsPointZero, heighthFromEyeAsPointZero] = [pageWidth - centerX, pageHeight - centerY]

	// Init all values as 0
	let [tx, ty] = [0, 0];

	const [xChangeFromCenter, yChangeFromCenter] = [
		m.pageX - centerX,
		m.pageY - centerY,
	];

	const [propChangeX, propChangeY] = [
		(xChangeFromCenter * 100) / widthFromEyeAsPointZero,
		(yChangeFromCenter * 100) / heighthFromEyeAsPointZero,
	];

	rx = xChangeFromCenter / centerX;
	ry = yChangeFromCenter / centerY;

	switch (true) {
		case Math.abs(rx) < 0.4:
			rx = 0;
			break;
	}
	switch (true) {
		case Math.abs(ry) < 0.4:
			ry = 0;
			break;
	}

	ry = ry > 0 ? -Math.abs(ry) : Math.abs(ry)

	tx = (propChangeX * 100) / (eyeWidth / 1.2);
	ty = (propChangeY * 100) / (eyeHeight / 1.2);

	iris.style.transform = `rotate3d(${ry}, ${rx}, ${0}, ${45}deg) translate(${tx}px, ${ty}px)`;
	retina.style.transform = `rotate3d(${ry}, ${rx}, ${0}, ${45}deg) translate(${tx}px, ${ty}px)`;
}

window.addEventListener("mousemove", (e) => {
	document.querySelectorAll('.eye').forEach(eye => moveEye(e, eye))
});
window.addEventListener("click", (e) => {
	document.querySelectorAll('.eye').forEach(eye => moveEye(e, eye))
});
window.addEventListener("touchstart", (e) => {
	document.querySelectorAll('.eye').forEach(eye => moveEye(e, eye))
});