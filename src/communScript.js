document.addEventListener("DOMContentLoaded", function () {
	const menuIcon = document.querySelector(".menu-icon");
	const navList = document.querySelector(".nav");

	menuIcon.addEventListener("click", function () {
		navList.classList.toggle("active");
		document.body.classList.toggle("no-scroll");
	});
});
document.addEventListener("DOMContentLoaded", function () {
	const menuIcon = document.querySelector(".menu-icon");
	const iconElement = menuIcon.querySelector("i");
	let isMenuOpen = false;

	menuIcon.addEventListener("click", function () {
		if (isMenuOpen) {
			// Close the menu: Rotate back and change the icon
			iconElement.classList.remove("rotate");
			iconElement.classList.remove("fa-x");
			iconElement.classList.add("fa-bars");
		} else {
			// Open the menu: Rotate and change the icon
			iconElement.classList.add("rotate");
			iconElement.classList.remove("fa-bars");
			iconElement.classList.add("fa-x");
		}

		// Toggle the menu state
		isMenuOpen = !isMenuOpen;
	});
});

// #############################################################
const gridContainer = document.getElementById("grid-container");

const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
const cellSize = viewportHeight / 200; // Adjust this to set the size of each grid cell
const numColumns = Math.floor(viewportWidth / cellSize);
const numRows = Math.floor(viewportHeight / cellSize);

for (let row = 0; row < numRows; row++) {
	for (let col = 0; col < numColumns; col++) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		gridContainer.appendChild(cell);
	}
}
