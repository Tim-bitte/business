// Simple JS to enhance cosmic feel (subtle random twinkling on lines)
        function twinkleLines() {
            const lines = document.querySelectorAll('.line');
            lines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.transition = 'opacity 1.5s ease-in-out';
                    line.style.opacity = Math.random() * 0.4 + 0.7;
                    
                    setTimeout(() => {
                        line.style.opacity = 0.75;
                    }, 1500);
                }, index * 300);
            });
        }
        
        // Run twinkling every 6 seconds
        setInterval(twinkleLines, 6000);
        twinkleLines(); // initial call