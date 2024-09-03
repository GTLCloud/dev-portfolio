document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: [
            "Backend Systems",
            "Machine Learning",
            "SQL Database Integration",
            "Geospatial Analysis"
        ],
        typeSpeed: 50, // Speed of typing in milliseconds
        backSpeed: 25,  // Speed of backspacing in milliseconds
        backDelay: 1000, // Delay before starting backspacing
        startDelay: 500, // Delay before typing starts
        loop: true // Whether to loop the animation
    };

    var typed = new Typed('#typed-output', options);
});
