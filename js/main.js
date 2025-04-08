document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // For mobile, we need to account for the sidebar height
                const isMobile = window.innerWidth <= 900;
                const offset = isMobile ? 20 : 20;
                
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll Progress Indicator
    const scrollProgress = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', () => {
        // For the progress bar, we only want to measure the content area
        const content = document.querySelector('.content');
        const totalHeight = content.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;
    });
    
    // Highlight active section in navigation
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
