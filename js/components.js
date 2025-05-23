document.addEventListener('DOMContentLoaded', async function() {
    // Load header
    const headerResponse = await fetch('/components/header.html');
    const headerHtml = await headerResponse.text();
    document.getElementById('header-placeholder').innerHTML = headerHtml;

    // Load footer
    const footerResponse = await fetch('/components/footer.html');
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
});
