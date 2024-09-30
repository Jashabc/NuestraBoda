document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate achievements on scroll
    const achievements = document.querySelectorAll('.achievement');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    achievements.forEach(achievement => {
        observer.observe(achievement);
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        document.querySelector('.hero').style.backgroundPositionY = scrollPosition * 0.7 + 'px';
    });
});