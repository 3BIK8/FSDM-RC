document.getElementById("cards").onmousemove = (e) => {
	for (const card of document.getElementsByClassName("card")) {
		const rect = card.getBoundingClientRect(),
			x = e.clientX - rect.left,
			y = e.clientY - rect.top;

		card.style.setProperty("--mouse-x", `${x}px`);
		card.style.setProperty("--mouse-y", `${y}px`);
	}
};
// #############################################################
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

function startTextAnimation(elementId) {
	let iteration = 0;
	clearInterval(interval);

	interval = setInterval(() => {
		const element = document.querySelector(`#${elementId}`);
		if (!element) {
			clearInterval(interval);
			return;
		}
		element.style.color = "var(--primary)";

		element.innerText = element.innerText
			.split("")
			.map((letter, index) => {
				if (index < iteration) {
					return element.dataset.value[index];
				}

				return letters[Math.floor(Math.random() * 26)];
			})
			.join("");
		element.style.color = "#8779b6";

		if (iteration >= element.dataset.value.length) {
			clearInterval(interval);
			element.style.color = "var(--primary)";
		}

		iteration += 1 / 3;
	}, 30);
}

document.querySelector("#section-title").addEventListener("mouseover", () => {
	startTextAnimation("section-title");
});

document.querySelector("#sectionTitle").addEventListener("mouseover", () => {
	startTextAnimation("sectionTitle");
});
document.querySelector("#section3title").addEventListener("mouseover", () => {
	startTextAnimation("section3title");
});

// #############################################################
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
// #############################################################>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#####################
document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("scrollButton");

    if (scrollButton) {
      scrollButton.addEventListener("click", function() {
        // Get the target section by its ID
        const targetSection = document.getElementById("add");

        if (targetSection) {
          // Calculate the position to scroll to
          const offset = targetSection.getBoundingClientRect().top + window.scrollY;
          
          // Scroll smoothly to the target section
          window.scrollTo({
            top: offset,
            behavior: "smooth"
          });
        }
      });
    }
  });