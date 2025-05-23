document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Update paths to be relative to repo root
        const headerResponse = await fetch('./components/header.html');
        const headerHtml = await headerResponse.text();
        document.getElementById('header-placeholder').innerHTML = headerHtml;

        const footerResponse = await fetch('./components/footer.html');
        const footerHtml = await footerResponse.text();
        document.getElementById('footer-placeholder').innerHTML = footerHtml;

        // Set active nav link
        const currentPage = document.body.dataset.page;
        if (currentPage) {
            const activeLink = document.querySelector(`.nav-link[data-page="${currentPage}"]`);
            if (activeLink) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('text-blue-500', 'border-b-2', 'border-blue-500');
                });
                activeLink.classList.add('text-blue-500', 'border-b-2', 'border-blue-500');
            }
        }

        // Set current year
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }

        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const navMenu = document.getElementById('nav-menu');
        
        if (mobileMenuButton && navMenu) {
            mobileMenuButton.addEventListener('click', () => {
                navMenu.classList.toggle('hidden');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navMenu.contains(e.target) && 
                    !mobileMenuButton.contains(e.target) && 
                    !navMenu.classList.contains('hidden')) {
                    navMenu.classList.add('hidden');
                }
            });

            // Close menu on window resize if switching to desktop
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 768) { // md breakpoint
                    navMenu.classList.remove('hidden');
                }
            });
        }
    } catch (error) {
        console.error('Error loading components:', error);
    }
});
