var toggle = function (elem) {
	elem.classList.toggle('is-visible');
};


var toggle_arrow_icon = function(arrow, content) {
	
	if (content.offsetParent === null) {
		arrow.classList.remove('fa-arrow-circle-up');
		arrow.classList.add('fa-arrow-circle-down');
	} else {
		arrow.classList.remove('fa-arrow-circle-down');
		arrow.classList.add('fa-arrow-circle-up');
	}
}

// Listen for click events
document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
	if (!event.target.closest('a').classList.contains('preview-toggle')) {
		return;
	}

	// Prevent default link behavior
	event.preventDefault();

	// Toggle the content
	var content = document.querySelector(event.target.closest('a').hash);
	if (!content) return;
	toggle(content);

	// Toggle arrow icon (up/down) according to content
	var arrow_icon = event.target.querySelector('i');
	if (!arrow_icon) return;
	toggle_arrow_icon(arrow_icon, content);

}, false);
