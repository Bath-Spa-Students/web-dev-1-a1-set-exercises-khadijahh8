document.addEventListener('DOMContentLoaded', function () {
    // Get all sample buttons
    var sampleButtons = document.querySelectorAll('.Sbutton');

    // Add click event listener to each sample button
    sampleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Get the audio source from the data-src attribute
            var audioSource = button.getAttribute('data-src');

            // Create a new Audio object
            var audio = new Audio(audioSource);

            // Play the audio
            audio.play();
        });
    });
});
