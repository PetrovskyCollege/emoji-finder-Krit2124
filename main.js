import {data} from "./data/emoji.js";

function showEmoji(keyword) {
    let emojiList = document.querySelector(".emojiList");
    
    for (emoji of data) {
        if (data.includes(keyword)) {
            let emojiBoxes = "";
            emojiBoxes += '<div class="emojiTitle">' + data.title + "</div>";
            emojiBoxes += '<div class="emojiSymbol">' + data.symbol + "</div>";
            emojiBoxes += '<div class="emojiKeywords">' + data.keywords + "</div>";
            emojiList.innerHTML = emojiBoxes;
        }
    }
}

showEmoji("");