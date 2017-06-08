function addClass() {
	document.getElementById("elem").classList.add("active");
};

function removeClass() {
	document.getElementById("elem").classList.remove("active");
};

function checkClass() {
	if (document.getElementById("elem").classList.contains("active")) {
		removeClass();
	} else {
		addClass();
	}
};