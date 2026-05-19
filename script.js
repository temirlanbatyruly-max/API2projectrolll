const fetchBtn = document.getElementById('fetchBtn');
const userInput = document.getElementById('userInput');
const loader = document.getElementById('loader');
const statusText = document.getElementById('statusText');
const content = document.getElementById('content');

const delay = (ms) => new Promise(res => setTimeout(res, ms));

// База наших приколов
const jokes = [
    "Ошибка 404: Мозг не найден. Попробуйте позже.",
    "Ответ — 42, но вы явно задали не тот вопрос.",
    "Я бы ответил, но у меня обеденный перерыв в облаке.",
    "Вы серьезно спросили ЭТО? Мне нужно время, чтобы это переварить...",
    "Запрос отклонен. Причина: слишком философски для вторника.",
    "Пожалуйста, подождите, я уточняю это у вашей кошки.",
    "Интересный факт: пока вы ждали ответ, Земля пролетела 90 км."
];

const phases = ["Подключаюсь к космосу...", "Спрашиваю у Гугла...", "Гугл просил не перезванивать...", "Почти готово..."];

async function getJokeResponse() {
    if (!userInput.value.trim()) {
        alert("Сначала напишите что-нибудь!");
        return;
    }

    content.innerHTML = '';
    loader.classList.remove('hidden');
    fetchBtn.disabled = true;

    // Имитируем бурную деятельность с изменением текста
    for (let phase of phases) {
        statusText.innerText = phase;
        await delay(1200);
    }

    // Выбираем случайный прикол
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    content.innerHTML = `
        <div class="joke-card">
            <p><strong>Ваш вопрос:</strong> ${userInput.value}</p>
            <hr>
            <p class="answer"><strong>Ответ:</strong> ${randomJoke}</p>
        </div>
    `;

    loader.classList.add('hidden');
    fetchBtn.disabled = false;
    userInput.value = ''; // Очищаем поле
}

fetchBtn.addEventListener('click', getJokeResponse);