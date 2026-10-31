// ===== Кнопка "Вверх" =====
const upBtn = document.getElementById('upBtn');

upBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// ===== Кнопка "Тема" =====
const themeBtn = document.getElementById('themeBtn');

// при загрузке: если раньше выбрали тёмную, включаем её
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}

themeBtn.addEventListener('click', function () {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});