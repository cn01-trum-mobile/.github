// script.js

document.addEventListener("DOMContentLoaded", () => {
	console.log("Trang web đã tải xong!");

	// Ví dụ về một tính năng nhỏ: highlight menu khi cuộn
	const sections = document.querySelectorAll("section");
	const navLinks = document.querySelectorAll(".nav-link");

	window.addEventListener("scroll", () => {
		let current = "";
		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			if (scrollY >= sectionTop - 60) {
				current = section.getAttribute("id");
			}
		});

		navLinks.forEach((link) => {
			link.classList.remove("active");
			if (link.href.includes(current)) {
				link.classList.add("active");
			}
		});
	});
});
