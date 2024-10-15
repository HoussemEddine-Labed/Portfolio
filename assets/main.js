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

document.addEventListener("DOMContentLoaded", function () {
    // Select all links and sections
    const links = document.querySelectorAll(".menu a, .brand");
    const sections = document.querySelectorAll("section");
  
    // Function to show the clicked section and hide others
    function showSection(event) {
      event.preventDefault();
  
      // Get the section ID from the clicked link
      const targetId = event.currentTarget.getAttribute("href").substring(1);
  
      // Hide all sections
      sections.forEach(section => {
        section.style.display = "none";
      });
  
      // Show the target section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = "block";
      }
    }
  
    // Add click event listener to each link
    links.forEach(link => {
      link.addEventListener("click", showSection);
    });
  });
  