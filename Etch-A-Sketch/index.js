document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const resetButton = document.getElementById('reset-button');

    function createGrid(size) {
        container.innerHTML = '';  // Clear existing grid
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('grid');
            square.addEventListener('mouseover', changeColor);
            container.appendChild(square);
        }
    }

    function changeColor(e) {
        const square = e.target;
        let currentColor = square.style.backgroundColor;
        if (!currentColor) {
            currentColor = getRandomColor();
            square.style.backgroundColor = currentColor;
            square.dataset.darkness = 1;
        } else {
            let darkness = parseInt(square.dataset.darkness);
            if (darkness < 10) {
                square.dataset.darkness = darkness + 1;
                square.style.backgroundColor = darkenColor(currentColor, 0.1);
            }
        }
    }

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function darkenColor(color, percentage) {
        const [r, g, b] = color.match(/\d+/g).map(Number);
        return `rgb(${Math.floor(r * (1 - percentage))}, ${Math.floor(g * (1 - percentage))}, ${Math.floor(b * (1 - percentage))})`;
    }

    resetButton.addEventListener('click', () => {
        let size = prompt("Enter the number of squares per side (maximum 100):", 16);
        size = parseInt(size);
        if (size > 100 || size < 1 || isNaN(size)) {
            alert("Invalid input. Please enter a number between 1 and 100.");
        } else {
            createGrid(size);
        }
    });

    createGrid(16);  // Default grid size
});