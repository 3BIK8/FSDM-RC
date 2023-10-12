// Create the loading animation
const createLoadingAnimation = function () {
	// List of characters to use for the digital rain
	const chars = "FSDM ROBOTIC CLUB ";

	// Set up the canvas
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.style.position = "fixed";
	canvas.style.top = "0";
	canvas.style.left = "0";
	canvas.style.zIndex = "9";
	canvas.style.background = "black"; // Set the background color to black
	canvas.style.opacity = "1"; // Initial opacity

	// Append the canvas to the body
	document.body.appendChild(canvas);

	// Set up the characters
	const charSize = 20;
	const columns = canvas.width / charSize;
	const drops = [];
	for (let x = 0; x < columns; x++) {
		drops[x] = 1;
	}

	// Render the characters
	function draw() {
		ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = "#00ffff";
		ctx.font = charSize + "px monospace";
		for (let i = 0; i < drops.length; i++) {
			const text = chars[Math.floor(Math.random() * chars.length)];
			ctx.fillText(text, i * charSize, drops[i] * charSize);
			drops[i]++;
			if (drops[i] * charSize > canvas.height && Math.random() > 0.975) {
				drops[i] = 0;
			}
		}
	}

	// Delay the start of the animation by 500 milliseconds
	setTimeout(() => {
		// Animate the characters
		const intervalId = setInterval(draw, 34);

		// Function to remove the loading animation
		const removeLoadingAnimation = function () {
			// Gradually reduce opacity to create a smooth transition
			let opacity = 1;
			const fadeOutIntervalId = setInterval(() => {
				opacity -= 0.01;
				canvas.style.opacity = opacity.toString();
				if (opacity <= 0) {
					clearInterval(fadeOutIntervalId);
					clearInterval(intervalId);
					document.body.removeChild(canvas);
				}
			}, 10);
		};

		// Set a timeout to remove the loading animation after 10 seconds
		setTimeout(removeLoadingAnimation, 4000);
	}, 500);

	return {
		removeLoadingAnimation: removeLoadingAnimation,
	};
};

// Show the loading animation until the page is fully loaded
const loadingAnimation = createLoadingAnimation();

// ######################################################################
