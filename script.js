const links = document.querySelectorAll('a[data-page]');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const page = event.target.getAttribute('data-page');
        
        showPage(page);
    });
});

function showPage(page) {
    // Hide all sections
    const sections = document.querySelectorAll('.page-content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected page
    const selectedPage = document.getElementById(page);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}
