// JavaScript to handle the "active" class toggle on click
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuLinks.forEach(link => link.classList.remove('active')); // Remove "active" from all links
        this.classList.add('active'); // Add "active" to clicked link
    });
});
function toggleContent(id) {
    const content = document.getElementById(id);
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}