$(document).ready(function() {
	const toggleSwitch = $('#dark-mode-toggle-switch')
	if ($('body').hasClass('dark-mode')) toggleSwitch.prop('checked', true);
	else  toggleSwitch.prop('checked', false);

	toggleSwitch.on('change', function () {
		$('body').toggleClass('dark-mode');
	});
});