        // Function to change background color
        function changeBackgroundColor() {
            // Array of possible background colors
            const colors = ['#6f8f0e', '#3498db', '#e74c3c', '#2ecc71'];

            // Get a random color from the array
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            // Set the new background color
            document.body.style.backgroundColor = randomColor;
        }

        // Change the background color every 5 seconds (5000 milliseconds)
        setInterval(changeBackgroundColor, 3000);
