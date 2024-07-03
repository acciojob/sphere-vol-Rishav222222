function volume_sphere(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input field and output div
    const radiusInput = document.getElementById('radius');
    const outputDiv = document.getElementById('volume-output');

    // Get the value from the input field
    const radiusValue = radiusInput.value;

    // Convert the input to a float
    const radius = parseFloat(radiusValue);

    // Validate the input
    if (isNaN(radius) || radius < 0) {
        // Display NaN for invalid input
        outputDiv.textContent = 'Volume: NaN';
    } else {
        // Calculate the volume using the formula V = (4/3) * π * r^3
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Round the volume to four decimal places
        const roundedVolume = volume.toFixed(4);

        // Display the calculated volume
        outputDiv.textContent = `Volume: ${roundedVolume}`;
    }
}

// Set up the event listener for the form
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};