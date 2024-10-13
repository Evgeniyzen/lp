document.addEventListener("DOMContentLoaded", () => {
    const lessonCard = document.getElementById("lessonCard");
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.getElementById("progressText");
    const howToBtn = document.getElementById("howToBtn");
    const backBtn = document.getElementById("backBtn");
    const lessons = [
  { 
    title: "Урок 1: Основы лидерства", 
    description: "Познакомьтесь с основными принципами эффективного лидерства.",
    task: "Определите 3 качества успешного лидера, которые вы хотите развить.",
    guide: 'Изучите концепцию <a href="https://telegra.ph/Sluzhashchij-lider-10-13" target="_blank">Служащий лидер</a> и как она помогает в управлении командой.'
  },
 { 
    title: "Урок 2: Эмоциональный интеллект лидера", 
    description: "Научитесь понимать эмоции членов команды и эффективно ими управлять.",
    task: "Проанализируйте реакцию членов команды в стрессовых ситуациях.",
    guide: 'Руководство: Используйте метод <a href="https://telegra.ph/4-SHaga-k-EHmpatii-10-13" target="_blank">"4 шага к эмпатии"</a> для построения доверия в команде.'
  },
{ 
    title: "Урок 3: Коммуникация и влияние", 
    description: "Изучите, как лидеры могут влиять на своих коллег через чёткую и уверенную коммуникацию.",
    task: "Проведите 5-минутное собрание с командой, использовав технику активного слушания.",
    guide: 'Руководство: Используйте методику <a href="https://telegra.ph/Brif-Poziciya-Rezyume-10-13" target="_blank">Бриф-Позиция-Резюме</a> для передачи ключевых идей.'
},
{ 
  title: "Урок 4: Публичные выступления", 
  description: "Развивайте навыки выступления перед аудиторией.",
  task: "Подготовьте 3-минутную речь на любую тему и запишите её.",
  guide: 'Руководство: Примените правило <a href="https://telegra.ph/Pravila-3-h-glavnyh-idej-dlya-uproshcheniya-struktury-vystupleniya-10-13" target="_blank">"3-х главных идей"</a> для упрощения структуры выступления.'
},
{
  title: "Урок 5: Визуализация успеха",
  description: "Научитесь использовать визуализацию для достижения целей в лидерстве.",
  task: "Визуализируйте успешное завершение проекта в своей роли тимлида.",
  guide: 'Руководство: Используйте методику <a href="https://telegra.ph/Metodika-Videnie-Motivaciya-Dejstvie-VMD-10-13" target="_blank">Видение-Мотивация-Действие</a> для целенаправленного лидерства.'
},
{ 
    title: "Урок 6: Обратная связь и рост", 
    description: "Изучите, как предоставлять конструктивную обратную связь команде.",
    task: "Дайте члену команды обратную связь, используя метод 'Плюс-Дельта'.",
    guide: 'Руководство: Изучите метод <a href="https://telegra.ph/Metod-Plyus-Delta-10-13" target="_blank">Плюс-Дельта</a>. Практикуйте правила конструктивной критики с акцентом на развитие.'
},                         
{ 
  title: "Урок 7: Управление конфликтами", 
  description: "Освойте навыки разрешения конфликтов в команде.", 
  task: "Опишите один недавний конфликт и предложите способы его решения.", 
  guide: 'Руководство: Примените метод <a href="https://telegra.ph/Metod-Uin-Uin-Win-Win-10-13" target="_blank">Уин-Уин</a> для достижения компромисса.'
},
{ 
  title: "Урок 8: Мотивация и вовлечение команды", 
  description: "Изучите техники мотивации команды для достижения общих целей.", 
  task: "Придумайте способ поощрить команду за выполнение важного задания.", 
  guide: 'Руководство: Используйте подход <a href="https://telegra.ph/Podhod-Pohvala-Predlozhenie-10-13" target="_blank">"Похвала-Предложение"</a> для поддержания мотивации.'
},
{
    title: "Урок 9: Лидерство в стрессовых ситуациях",
    description: "Узнайте, как оставаться уверенным лидером под давлением.",
    task: "Подумайте о недавнем стрессе и предложите способы его преодоления.",
    guide: 'Руководство: Используйте методику <a href="https://telegra.ph/Metodika-Spokojstvie-v-shtorme-10-13" target="_blank">Спокойствие в шторме</a> для контроля в критических ситуациях.'
},

{ 
    title: "Урок 10: Лидерская стратегия и видение", 
    description: "Разработайте долгосрочное видение для вашей команды или проекта.", 
    task: "Опишите видение вашего проекта на ближайшие 6 месяцев.", 
    guide: 'Руководство: Примените технику <a href="https://telegra.ph/Tehnika-Vdohnovlyayushchee-liderstvo-dlya-sozdaniya-strategii-10-13" target="_blank">Вдохновляющее лидерство</a> для создания стратегии.'
}

        // ... Добавь все уроки сюда
    ];

    let firstVisit = localStorage.getItem("firstVisit");
    if (!firstVisit) {
        firstVisit = new Date();
        localStorage.setItem("firstVisit", firstVisit);
    } else {
        firstVisit = new Date(firstVisit);
    }

    const today = new Date();
    const daysPassed = Math.floor((today - firstVisit) / (1000 * 60 * 60 * 24));
    const currentLessonIndex = Math.min(daysPassed, lessons.length - 1);
    const currentLesson = lessons[currentLessonIndex];

    // Обновляем содержимое карточки
    document.getElementById("lessonTitle").innerText = currentLesson.title;
    document.getElementById("lessonDescription").innerText = currentLesson.description;
    document.getElementById("lessonTask").innerText = currentLesson.task;
    document.getElementById("lessonGuide").innerHTML = currentLesson.guide;

    // Обновляем прогресс-бар
    const progressPercentage = ((currentLessonIndex + 1) / lessons.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.innerText = `${currentLessonIndex + 1}/${lessons.length}`;

    // Обработчик для переворота карточки
    howToBtn.addEventListener("click", () => {
        lessonCard.classList.add("flipped");
    });

    backBtn.addEventListener("click", () => {
        lessonCard.classList.remove("flipped");
    });

    // Обновляем информацию о следующем уроке
    const nextLessonInfo = document.getElementById("nextLessonInfo");
    if (currentLessonIndex >= lessons.length - 1) {
        nextLessonInfo.innerText = "Вы завершили все 10 уроков! Продолжайте применять полученные знания.";
    } else {
        nextLessonInfo.innerText = "Ваш следующий урок будет доступен завтра. Возвращайтесь на сайт, чтобы продолжить!";
    }
});
window.location.href = 'congratulations.html';
// Пример вызова после завершения последнего урока
completeLastLesson() {
    // Логика завершения урока
    checkCompletion();
}
function checkCompletion() {
    // Предположим, у вас есть функция, которая проверяет завершение всех уроков
    if (allLessonsCompleted) {
        window.location.href = 'congratulations.html'; // Убедитесь, что путь правильный
    }
}
function checkCompletion() {
    // Предположим, у вас есть функция, которая проверяет завершение всех уроков
    if (allLessonsCompleted) {
        window.location.href = 'congratulations.html'; // Убедитесь, что путь правильный
    }
}
