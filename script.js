// Получаем все кнопки клавиатуры
const keys = document.querySelectorAll('.key');
const output = document.getElementById('output');

// Добавляем обработчик событий для каждой кнопки
keys.forEach((key) => {
    key.addEventListener('click', () => {
        // Получаем текст из data-word при нажатии на кнопку
        const word = key.getAttribute('data-word');
        // Отображаем текст в контейнере
        output.textContent = word;
    });
});


