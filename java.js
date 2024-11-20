document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function setActiveLink() {
        let currentIndex = -1;

        sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;

            if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight >= window.innerHeight / 2) {
                currentIndex = index;
            }
        });

        navLinks.forEach((link) => link.classList.remove("active"));
        if (currentIndex !== -1) {
            navLinks[currentIndex].classList.add("active");
        }
    }

    setActiveLink(); // Initial check on page load
    window.addEventListener("scroll", setActiveLink); // Update on scroll
});