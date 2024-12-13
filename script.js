// Получаем элементы
const counterElement = document.getElementById('counter');
const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');

// Загружаем сохраненные клики из localStorage
let clicks = parseInt(localStorage.getItem('clicks')) || 0;
counterElement.textContent = clicks;

// Обработчик кликов
clickButton.addEventListener('click', () => {
    clicks++;
    counterElement.textContent = clicks;
    localStorage.setItem('clicks', clicks); // Сохраняем в localStorage
});

// Обработчик сброса
resetButton.addEventListener('click', () => {
    clicks = 0;
    counterElement.textContent = clicks;
    localStorage.setItem('clicks', clicks); // Обновляем в localStorage
});
