// Function to animate the counting effect
function countUp(elementId, target) {
	const element = document.getElementById(elementId);
	let current = 0;
	const increment = target / 100; // Adjust the speed of counting

	const interval = setInterval(() => {
		current += increment;
		element.textContent = Math.ceil(current) + " +"; // Add the plus sign

		if (current >= target) {
			element.textContent = target + " +"; // Set the final value with a plus sign
			clearInterval(interval);
		}
	}, 20); // Adjust the interval speed
}

// Call the countUp function for each statistic
countUp("membersCount", 30);
countUp("eventsCount", 10);
countUp("followersCount", 2300);

// Rest of your code here

// ##################################################################3
/*
	This pen cleverly utilizes SVG filters to create a "Morphing Text" effect. Essentially, it layers 2 text elements on top of each other, and blurs them depending on which text element should be more visible. Once the blurring is applied, both texts are fed through a threshold filter together, which produces the "gooey" effect. Check the CSS - Comment the #container rule's filter out to see how the blurring works!
*/

const elts = {
	text1: document.getElementById("text1"),
	text2: document.getElementById("text2"),
};

// The strings to morph between. You can change these to anything you want!
const texts = ["FSDM", "ROBOTIC", "CLUB"];

// Controls the speed of morphing.
const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
	morph -= cooldown;
	cooldown = 0;

	let fraction = morph / morphTime;

	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}

	setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
	// fraction = Math.cos(fraction * Math.PI) / -2 + .5;

	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

	fraction = 1 - fraction;
	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
	morph = 0;

	elts.text2.style.filter = "";
	elts.text2.style.opacity = "100%";

	elts.text1.style.filter = "";
	elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
	requestAnimationFrame(animate);

	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 1300;
	time = newTime;

	cooldown -= dt;

	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}

		doMorph();
	} else {
		doCooldown();
	}
}

// Start the animation.
animate();
// ##################################################################
const atroposElements = document.querySelectorAll(".my-atropos");

atroposElements.forEach((element) => {
	const myAtropos = Atropos({
		el: element,
		// rest of parameters
		activeOffset: 5,
		shadowScale: 0,
		highlight: false,
	});
});
// ##################################################################
document.getElementById("cards").onmousemove = (e) => {
	for (const card of document.getElementsByClassName("card")) {
		const rect = card.getBoundingClientRect(),
			x = e.clientX - rect.left,
			y = e.clientY - rect.top;

		card.style.setProperty("--mouse-x", `${x}px`);
		card.style.setProperty("--mouse-y", `${y}px`);
	}
};
const s3Elements = document.getElementsByClassName("s3");

function addMouseMoveListenerToElements(elements) {
	for (const element of elements) {
		element.addEventListener("mousemove", (e) => {
			const rect = element.getBoundingClientRect(),
				x = e.clientX - rect.left,
				y = e.clientY - rect.top;

			element.style.setProperty("--mouse-x", `${x}px`);
			element.style.setProperty("--mouse-y", `${y}px`);
		});
	}
}

addMouseMoveListenerToElements(s3Elements);
