// Получение эмодзи
import {data} from "./data/emoji.js"

// Вывод эмодзи
const emojiListContainer = document.querySelector(".emojiListContainer")

function emojiOutput(keyword) {
    data.forEach(emoji => {
        if (emoji.keywords.includes(keyword)) {
            let emojiBox = document.createElement('div')
            emojiBox.className = "emojiBox"
        
            let emojiSymbol = document.createElement('div')
            emojiSymbol.className = "emojiSymbol"
            emojiSymbol.append(emoji.symbol)
        
            let emojiTitle = document.createElement('div')
            emojiTitle.className = "emojiTitle"
            emojiTitle.append(emoji.title)
        
            let emojiKeywords = document.createElement('div')
            emojiKeywords.className = "emojiKeywords"
            emojiKeywords.append(emoji.keywords)
        
            emojiBox.append(emojiSymbol)
            emojiBox.append(emojiTitle)
            emojiBox.append(emojiKeywords)
        
            emojiListContainer.append(emojiBox)
        }
    })
}

emojiOutput("")

// Поиск по ключевым словам

function showEmoji(keyword) {
    emojiListContainer.innerHTML = ''

    emojiOutput(keyword)
}

let inputToFind = document.getElementById("inputToFind")
inputToFind.onchange = function() {
    let keywords = document.getElementById("inputToFind").value
    showEmoji(keywords)
};