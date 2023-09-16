// Импорт эмодзи
import {data} from "./data/emoji.js"

// Получение контейнера, хранящего карточки с эмодзи
const emojiListContainer = document.querySelector(".emojiListContainer")

// Функция вывода эмодзи
function emojiOutput(keyword) {
    // Очистка контейнера с эмодзи, чтобы найденные не наслаивались друг на друга
    emojiListContainer.innerHTML = ''

    // Перебор всех эмодзи
    data.forEach(emoji => {
        if (emoji.keywords.includes(keyword)) {
            // Получение карточки для эмодзи
            let emojiBox = document.createElement('div')
            emojiBox.className = "emojiBox"
        
            // Получение картинки эмодзи
            let emojiSymbol = document.createElement('div')
            emojiSymbol.className = "emojiSymbol"
            emojiSymbol.append(emoji.symbol)
        
            // Получение названия эмодзи
            let emojiTitle = document.createElement('div')
            emojiTitle.className = "emojiTitle"
            emojiTitle.append(emoji.title)
        
            // Получение контейнера для ключевых слов эмодзи
            let emojiKeywords = document.createElement('div')
            emojiKeywords.className = "emojiKeywords"

            // Избавление от повторяющихся ключевых слов
            let cleanKeywords = ""
            let actualWord = ""
            let lastIndex = 0
            for (let i=0; i<emoji.keywords.length; i++) {
                if ((emoji.keywords[i] == " ")||(i == emoji.keywords.length - 1)) {
                    actualWord = emoji.keywords.slice(lastIndex, i)
                    if (!(cleanKeywords.includes(actualWord))) {
                        cleanKeywords += actualWord + " "
                    }
                lastIndex = i
                }
            }
            emojiKeywords.append(cleanKeywords)
        
            // Заполнение карточки и контейнера полученными данными
            emojiBox.append(emojiSymbol)
            emojiBox.append(emojiTitle)
            emojiBox.append(emojiKeywords)
            emojiListContainer.append(emojiBox)
        }
    })
}

// Вызов функции вывода для заполнения только что открытой страницы
emojiOutput("")

// Поиск по ключевым словам
let inputToFind = document.getElementById("inputToFind")
inputToFind.onchange = function() {
    let keywords = document.getElementById("inputToFind").value
    emojiOutput(keywords)
};