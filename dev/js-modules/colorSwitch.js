// Создаем ключи для определения цветовой схемы в css 
const STORAGE_KEY = "user-scheme";
const COLOR_SCHEME_KEY = "--color-scheme";
// Элементы управления
const colorSwitchBtn = document.querySelector('.color-swich-btn');
const colorSwitchText = document.querySelector('.color-swich-btn__text');

// Получаем доступ к css и берем параметры темы
const getCSSProperty= propKey => {
    // Считываем CSS параметры, которые нам нужны
    let answer = getComputedStyle(document.documentElement).getPropertyValue(propKey);

    // Убираем ковычки и лишние пробелы
    if (answer){
        console.log(answer);
        answer = answer.replace(/\"/g, '').trim();
        console.log(answer);
    }

    return answer;
}

const setScheme = passedScheme => {
    let currentScheme = passedScheme || localStorage.getItem(STORAGE_KEY);

    // Передаем настройки в CSS и меняем вид переключателя
    if (currentScheme) {
        document.documentElement.setAttribute('what-is-user-scheme', currentScheme);
        setBtnStatus(currentScheme)
    } else {
        setBtnStatus(getCSSProperty(COLOR_SCHEME_KEY));
    };
};

// Меняем кнопку
const setBtnStatus = (currentScheme) => {
    colorSwitchText.innerHTML = `${currentScheme === 'dark' ? 'White' : '&nbsp;Night'} theme `
}

// Переключаем схему
const swichScheme = () => {
    let currentScheme =  localStorage.getItem(STORAGE_KEY);

    switch (currentScheme) {
        case 'light':
            currentScheme = 'dark';
            break;
        case 'dark':
            currentScheme = 'light';
            break;
        default:
            currentScheme = getCSSProperty(COLOR_SCHEME_KEY) == 'dark' ? 'light' : 'dark';
    };

    localStorage.setItem(STORAGE_KEY, currentScheme);

    return currentScheme;
}


// Слушатель на кнопку
colorSwitchBtn.addEventListener('click', e => {
    e.preventDefault();
    // Меняем настройки
    setScheme(swichScheme());
})

// Первоначально берем настройки из CSS 
setScheme();