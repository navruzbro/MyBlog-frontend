window.addEventListener('DOMContentLoaded', () => {
    const dimensionsElement = document.getElementById('dimensions');

    function updateDimensions() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        dimensionsElement.textContent = `${width}px - ${height}px`;
    }
    

    // Initial call to set dimensions on page load
    updateDimensions();

    // Update dimensions when window is resized
    window.addEventListener('resize', updateDimensions);
});
